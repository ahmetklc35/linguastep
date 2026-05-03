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
      if (body.length > 1024 * 1024) reject(new Error("İstek çok büyük."));
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

const extractJson = (text) => {
  const match = text.match(/\{[\s\S]*\}/);
  return JSON.parse(match ? match[0] : text);
};

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return json(res, 200, { ok: true });
  if (req.method !== "POST") return json(res, 405, { error: "Sadece POST destekleniyor." });

  const baseUrl = process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434";
  const model = process.env.OLLAMA_MODEL || "llama3.2:3b";

  try {
    const payload = JSON.parse(await readBody(req));
    const prompt = `
You are an English speaking coach for a Turkish learner.
Evaluate this answer to the coach question.
Return ONLY valid JSON with: score, summary, grammar, fluency, naturalAnswer, nextTry.

Level: ${payload.level}
Question: ${payload.question}
Turkish meaning: ${payload.questionTr}
Learner answer: ${payload.answer}
Useful keywords: ${(payload.keywords || []).join(", ")}
Sample answer: ${payload.sampleAnswer}
`;

    const response = await fetch(`${baseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        stream: false,
        messages: [
          {
            role: "system",
            content:
              "You are concise, practical, and encouraging. Write feedback in Turkish, improved answer in English. Return only JSON."
          },
          { role: "user", content: prompt }
        ],
        format: "json",
        options: {
          temperature: 0.2
        }
      })
    });

    if (!response.ok) {
      return json(res, 200, {
        fallback: true,
        error: `Ollama yanıt vermedi (${response.status}).`
      });
    }

    const data = await response.json();
    const parsed = extractJson(data.message?.content || "{}");
    return json(res, 200, {
      score: Number(parsed.score || 0),
      summary: String(parsed.summary || "Cevabını değerlendirdim."),
      grammar: String(parsed.grammar || "Kısa ve net cümle kurmaya devam et."),
      fluency: String(parsed.fluency || "Bir sonraki denemede daha doğal hızda söyle."),
      naturalAnswer: String(parsed.naturalAnswer || payload.sampleAnswer),
      nextTry: String(parsed.nextTry || "Aynı cevabı daha net söyle.")
    });
  } catch (error) {
    return json(res, 200, {
      fallback: true,
      error: error.message || "Ollama değerlendirmesi kullanılamıyor."
    });
  }
}
