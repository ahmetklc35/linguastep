const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.end(JSON.stringify(body));
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 12 * 1024 * 1024) {
        reject(new Error("Ses kaydı çok büyük. 30 saniyeyi aşmadan tekrar dene."));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

const extractJsonText = (response) => {
  if (typeof response.output_text === "string") return response.output_text;
  const text = response.output?.flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join("");
  return text || "{}";
};

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return json(res, 200, { ok: true });
  }

  if (req.method !== "POST") {
    return json(res, 405, { error: "Sadece POST destekleniyor." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return json(res, 500, {
      error: "OPENAI_API_KEY ortam değişkeni eksik. Vercel proje ayarlarına OpenAI API anahtarını ekle."
    });
  }

  try {
    const payload = JSON.parse(await readBody(req));
    const {
      audioBase64,
      mimeType = "audio/webm",
      level = "A1",
      question = "",
      questionTr = "",
      sampleAnswer = "",
      keywords = []
    } = payload;

    if (!audioBase64) {
      return json(res, 400, { error: "Ses kaydı bulunamadı." });
    }

    const audioBuffer = Buffer.from(audioBase64, "base64");
    const form = new FormData();
    form.append("model", "gpt-4o-mini-transcribe");
    form.append("response_format", "json");
    form.append("language", "en");
    form.append(
      "prompt",
      "The speaker is a Turkish learner practicing English. Keep learner mistakes in the transcript when possible."
    );
    form.append("file", new Blob([audioBuffer], { type: mimeType }), "speaking-practice.webm");

    const transcriptionResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: form
    });

    const transcription = await transcriptionResponse.json();
    if (!transcriptionResponse.ok) {
      return json(res, transcriptionResponse.status, {
        error: transcription.error?.message || "Ses yazıya çevrilemedi."
      });
    }

    const transcript = transcription.text || "";
    const evaluationResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-5.2",
        input: [
          {
            role: "system",
            content:
              "You are a supportive English speaking coach for a Turkish learner. Evaluate the learner's spoken answer. Be concise, practical, and encouraging. Return only valid JSON."
          },
          {
            role: "user",
            content: JSON.stringify({
              level,
              question,
              questionTr,
              sampleAnswer,
              keywords,
              transcript,
              requiredJsonShape: {
                transcript: "string",
                score: "number 0-100",
                summary: "short Turkish summary",
                fluency: "Turkish feedback",
                pronunciation: "Turkish feedback inferred from transcript limits",
                grammar: "Turkish feedback",
                naturalAnswer: "improved English answer",
                nextTry: "one concrete Turkish instruction for next attempt"
              }
            })
          }
        ],
        text: {
          format: {
            type: "json_schema",
            name: "speaking_evaluation",
            schema: {
              type: "object",
              additionalProperties: false,
              properties: {
                transcript: { type: "string" },
                score: { type: "number" },
                summary: { type: "string" },
                fluency: { type: "string" },
                pronunciation: { type: "string" },
                grammar: { type: "string" },
                naturalAnswer: { type: "string" },
                nextTry: { type: "string" }
              },
              required: [
                "transcript",
                "score",
                "summary",
                "fluency",
                "pronunciation",
                "grammar",
                "naturalAnswer",
                "nextTry"
              ]
            }
          }
        }
      })
    });

    const evaluation = await evaluationResponse.json();
    if (!evaluationResponse.ok) {
      return json(res, evaluationResponse.status, {
        error: evaluation.error?.message || "AI öğretmen değerlendirmesi alınamadı."
      });
    }

    const parsed = JSON.parse(extractJsonText(evaluation));
    return json(res, 200, {
      ...parsed,
      transcript: parsed.transcript || transcript
    });
  } catch (error) {
    return json(res, 500, { error: error.message || "Beklenmeyen backend hatası." });
  }
}
