const content = {
  A1: {
    lessons: [
      {
        title: "To be ile kendini tanıtma",
        explanation:
          "A1 seviyesinde en önemli yapı am, is, are kullanımıdır. Kendini, mesleğini, nereli olduğunu ve temel duygularını bu yapı ile anlatırsın.",
        example: "I am a software developer.",
        translation: "Ben bir yazılım geliştiricisiyim.",
        tip:
          "Türkçede 'ben öğretmenim' derken ayrı bir fiil duymazsın. İngilizcede bu boşluğu am, is, are doldurur."
      },
      {
        title: "Günlük rutinleri anlatma",
        explanation:
          "Her gün yaptığın işleri anlatırken geniş zaman kullanırsın. I, you, we, they ile fiil yalın kalır.",
        example: "I study English every evening.",
        translation: "Her akşam İngilizce çalışırım.",
        tip:
          "Rutin cümlelerinde every day, usually ve sometimes gibi zaman ifadeleri cümlenin anlamını güçlendirir."
      }
    ],
    words: [
      { english: "repeat", turkish: "tekrar etmek", sentence: "Could you repeat that, please?" },
      { english: "learn", turkish: "öğrenmek", sentence: "I learn five new words." },
      { english: "slowly", turkish: "yavaşça", sentence: "Please speak slowly." },
      { english: "question", turkish: "soru", sentence: "I have a question." }
    ],
    quiz: [
      {
        question: "Boşluğu doldur: I ___ from Turkey.",
        options: ["am", "is", "are", "be"],
        answer: "am",
        note: "I öznesi ile am kullanılır."
      },
      {
        question: "Hangisi 'Lütfen yavaş konuşun' demektir?",
        options: ["Please speak slowly.", "Please listen quickly.", "Please write again.", "Please read later."],
        answer: "Please speak slowly.",
        note: "Speak konuşmak, slowly yavaşça demektir."
      }
    ],
    speaking: {
      title: "Kendini tanıt",
      scenario: "Yeni tanıştığın birine 30 saniyede kendini anlat.",
      prompts: ["My name is ...", "I am from ...", "I work as ...", "I am learning English because ..."],
      phrases: [
        {
          tr: "Ne iş yaptığımı bilmiyorum nasıl söyleyeceğim?",
          en: "I work in technical operations."
        },
        {
          tr: "Uygulama geliştirme ile ilgileniyorum.",
          en: "I work on app development projects."
        },
        {
          tr: "İş hayatımda çok faydalı olacağını düşünüyorum.",
          en: "I am learning English because I think it will be very useful in my work life."
        },
        {
          tr: "Kariyerim için İngilizce istiyorum.",
          en: "I want to improve my English for my career."
        }
      ],
      modelAnswer:
        "My name is Ahmet. I am from Turkey. I work in technical operations and I also work on app development projects. I am learning English because I think it will be very useful in my work life and for my career.",
      dialogue: [
        {
          question: "Hi, nice to meet you. What do you do?",
          tr: "Merhaba, tanıştığımıza memnun oldum. Ne iş yapıyorsun?",
          help: [
            "I work in technical operations.",
            "I work on app development projects.",
            "I am responsible for technical work."
          ],
          sample: "I work in technical operations and I also work on app development projects.",
          keywords: ["work", "technical", "operations", "app", "development"]
        },
        {
          question: "Why are you learning English?",
          tr: "Neden İngilizce öğreniyorsun?",
          help: [
            "I am learning English because it will be useful in my work life.",
            "I want to improve my English for my career.",
            "English can help me communicate better at work."
          ],
          sample:
            "I am learning English because I think it will be very useful in my work life and for my career.",
          keywords: ["learning", "because", "useful", "work", "career"]
        }
      ]
    }
  },
  A2: {
    lessons: [
      {
        title: "Geçmiş zamanı güvenle kullanma",
        explanation:
          "Dün, geçen hafta veya bitmiş bir olaydan söz ederken simple past kullanırsın. Düzenli fiiller genelde -ed alır.",
        example: "I watched a lesson yesterday.",
        translation: "Dün bir ders izledim.",
        tip:
          "Geçmiş zaman cümlesinde did yardımcı fiili varsa ana fiil yalın hale döner: Did you watch?"
      },
      {
        title: "Plan anlatma",
        explanation:
          "Yakın gelecek planlarını anlatmak için going to yapısı kullanılır. Önceden karar verilmiş niyetleri net gösterir.",
        example: "I am going to practice speaking tonight.",
        translation: "Bu gece konuşma pratiği yapacağım.",
        tip:
          "Going to yapısını kişiye göre am, is, are ile başlatırsın."
      }
    ],
    words: [
      { english: "improve", turkish: "geliştirmek", sentence: "I want to improve my pronunciation." },
      { english: "practice", turkish: "pratik yapmak", sentence: "Practice makes speaking easier." },
      { english: "mistake", turkish: "hata", sentence: "A mistake helps you learn." },
      { english: "confident", turkish: "kendinden emin", sentence: "I feel more confident now." }
    ],
    quiz: [
      {
        question: "Boşluğu doldur: She ___ English last night.",
        options: ["studied", "study", "studies", "studying"],
        answer: "studied",
        note: "Last night bitmiş zamanı gösterir, bu yüzden studied doğru."
      },
      {
        question: "Hangisi plan bildirir?",
        options: ["I am going to read.", "I read every day.", "I read yesterday.", "I can read."],
        answer: "I am going to read.",
        note: "Going to önceden planlanmış gelecek niyeti anlatır."
      }
    ],
    speaking: {
      title: "Hafta sonu planı",
      scenario: "Bir arkadaşına hafta sonu ne yapacağını anlat.",
      prompts: ["This weekend, I am going to ...", "First, I will ...", "After that, I want to ...", "I think it will be ..."],
      phrases: [
        { tr: "Bu hafta sonu İngilizce çalışacağım.", en: "This weekend, I am going to study English." },
        { tr: "Önce kelime tekrarı yapacağım.", en: "First, I will review new words." },
        { tr: "Sonra konuşma pratiği yapmak istiyorum.", en: "After that, I want to practice speaking." },
        { tr: "Bence faydalı olacak.", en: "I think it will be useful." }
      ],
      modelAnswer:
        "This weekend, I am going to study English. First, I will review new words. After that, I want to practice speaking. I think it will be useful for my confidence.",
      dialogue: [
        {
          question: "What are you going to do this weekend?",
          tr: "Bu hafta sonu ne yapacaksın?",
          help: ["I am going to study English.", "I am going to practice speaking.", "I will review new words."],
          sample: "This weekend, I am going to study English and practice speaking.",
          keywords: ["going", "study", "practice", "weekend"]
        },
        {
          question: "Why do you want to practice speaking?",
          tr: "Neden konuşma pratiği yapmak istiyorsun?",
          help: ["I want to speak more confidently.", "I want to use English at work.", "It helps me improve."],
          sample: "I want to practice speaking because I want to speak more confidently at work.",
          keywords: ["want", "practice", "because", "confident", "work"]
        }
      ]
    }
  },
  B1: {
    lessons: [
      {
        title: "Fikir belirtme ve gerekçe sunma",
        explanation:
          "B1 seviyesinde sadece cümle kurmak yetmez; fikrini desteklemek gerekir. Because, however ve for example konuşmanı daha olgun yapar.",
        example: "I prefer online lessons because they are flexible.",
        translation: "Online dersleri tercih ederim çünkü esnektirler.",
        tip:
          "Bir fikri güçlü yapmak için formül kullan: opinion + reason + example."
      },
      {
        title: "Deneyim anlatma",
        explanation:
          "Hayat deneyimlerinden bahsederken present perfect kullanırsın. Zaman net değilse have veya has + V3 iyi çalışır.",
        example: "I have tried several learning apps.",
        translation: "Birkaç öğrenme uygulaması denedim.",
        tip:
          "Yesterday veya last year gibi net geçmiş zaman varsa simple past daha uygundur."
      }
    ],
    words: [
      { english: "although", turkish: "rağmen", sentence: "Although it is difficult, I keep practicing." },
      { english: "achieve", turkish: "başarmak", sentence: "You can achieve fluency step by step." },
      { english: "feedback", turkish: "geri bildirim", sentence: "Feedback helps me correct my mistakes." },
      { english: "purpose", turkish: "amaç", sentence: "My purpose is to speak at work." }
    ],
    quiz: [
      {
        question: "Hangisi fikir ve gerekçe içerir?",
        options: [
          "I agree because it saves time.",
          "I went home.",
          "She is at work.",
          "They can swim."
        ],
        answer: "I agree because it saves time.",
        note: "Because cümleye gerekçe ekler."
      },
      {
        question: "Boşluğu doldur: I ___ never ___ this word before.",
        options: ["have / seen", "did / seen", "am / see", "has / saw"],
        answer: "have / seen",
        note: "Never ile deneyim anlatırken present perfect sık kullanılır."
      }
    ],
    speaking: {
      title: "Bir fikri savun",
      scenario: "Online İngilizce öğrenmenin avantajlarını anlat.",
      prompts: ["In my opinion, ...", "The main reason is ...", "For example, ...", "However, ..."],
      phrases: [
        { tr: "Bence online öğrenme esnektir.", en: "In my opinion, online learning is flexible." },
        { tr: "Ana sebep, istediğim zaman çalışabilmem.", en: "The main reason is that I can study whenever I want." },
        { tr: "Örneğin, işten sonra pratik yapabilirim.", en: "For example, I can practice after work." },
        { tr: "Ama düzenli olmak zorundayım.", en: "However, I need to be consistent." }
      ],
      modelAnswer:
        "In my opinion, online learning is flexible. The main reason is that I can study whenever I want. For example, I can practice after work. However, I need to be consistent to improve.",
      dialogue: [
        {
          question: "What is your opinion about online English learning?",
          tr: "Online İngilizce öğrenme hakkında fikrin nedir?",
          help: ["In my opinion, it is flexible.", "I think it is useful.", "It helps busy people study regularly."],
          sample: "In my opinion, online English learning is flexible and useful for busy people.",
          keywords: ["opinion", "flexible", "useful", "online"]
        },
        {
          question: "Can you give me one example?",
          tr: "Bana bir örnek verebilir misin?",
          help: ["For example, I can practice after work.", "For example, I can repeat lessons anytime."],
          sample: "For example, I can practice after work and repeat lessons whenever I need.",
          keywords: ["example", "practice", "after", "work", "repeat"]
        }
      ]
    }
  }
};

const defaultState = {
  level: "A1",
  xp: 0,
  streak: 0,
  knownWords: [],
  quizCorrect: 0,
  quizTotal: 0,
  completedToday: "",
  lessonIndex: 0,
  wordIndex: 0,
  quizIndex: 0,
  coachIndex: 0
};

const state = {
  ...defaultState,
  ...JSON.parse(localStorage.getItem("linguaStepState") || "{}")
};

const recordingState = {
  recorder: null,
  stream: null,
  chunks: [],
  startedAt: 0,
  timerId: null,
  audioUrl: "",
  audioBlob: null,
  lastDuration: 0,
  maxSeconds: 30
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const todayKey = () => new Date().toISOString().slice(0, 10);

function saveState() {
  localStorage.setItem("linguaStepState", JSON.stringify(state));
  renderStats();
}

function currentLevel() {
  return content[state.level];
}

function awardXp(points) {
  state.xp += points;
  if (state.completedToday !== todayKey()) {
    state.streak += 1;
    state.completedToday = todayKey();
  }
  saveState();
}

function switchView(viewId) {
  document.body.dataset.currentView = viewId;
  $$(".view").forEach((view) => view.classList.toggle("is-visible", view.id === viewId));
  $$(".nav-tab").forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === viewId));
}

function renderStats() {
  $("#streakCount").textContent = `${state.streak} gün`;
  $("#xpCount").textContent = state.xp;
  $("#knownWords").textContent = state.knownWords.length;
  const score = state.quizTotal ? Math.round((state.quizCorrect / state.quizTotal) * 100) : 0;
  $("#quizScore").textContent = `${score}%`;
}

function renderLesson() {
  const lesson = currentLevel().lessons[state.lessonIndex % currentLevel().lessons.length];
  $("#lessonLevel").textContent = `${state.level} Dersi`;
  $("#lessonTitle").textContent = lesson.title;
  $("#lessonExplanation").textContent = lesson.explanation;
  $("#lessonExample").textContent = lesson.example;
  $("#lessonTranslation").textContent = lesson.translation;
  $("#coachTip").textContent = lesson.tip;
  $("#dailyTitle").textContent = `${state.level} seviyesinde bugünkü ders hazır.`;
}

function renderWord() {
  const word = currentLevel().words[state.wordIndex % currentLevel().words.length];
  $("#wordTag").textContent = state.level;
  $("#wordEnglish").textContent = word.english;
  $("#wordSentence").textContent = word.sentence;
  $("#wordTurkish").textContent = word.turkish;
  $("#flashcard").classList.remove("is-flipped");
  $("#flashcard").setAttribute("aria-pressed", "false");
  $("#previewPhrase").textContent = word.sentence;
}

function renderQuiz() {
  const quiz = currentLevel().quiz[state.quizIndex % currentLevel().quiz.length];
  $("#questionText").textContent = quiz.question;
  $("#feedback").textContent = "";
  $("#answers").innerHTML = "";
  quiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => answerQuestion(button, option, quiz));
    $("#answers").append(button);
  });
}

function answerQuestion(button, option, quiz) {
  if ($(".answer.is-correct") || $(".answer.is-wrong")) return;

  const correct = option === quiz.answer;
  button.classList.add(correct ? "is-correct" : "is-wrong");
  state.quizTotal += 1;
  if (correct) {
    state.quizCorrect += 1;
    state.xp += 8;
  }

  $$(".answer").forEach((answer) => {
    if (answer.textContent === quiz.answer) answer.classList.add("is-correct");
  });

  $("#feedback").textContent = correct ? `Doğru. ${quiz.note}` : `Bir daha bak. ${quiz.note}`;
  saveState();
}

function renderSpeaking() {
  const speaking = currentLevel().speaking;
  const turn = getCurrentCoachTurn();
  $("#speakingTitle").textContent = speaking.title;
  $("#speakingScenario").textContent = speaking.scenario;
  $("#coachQuestion").innerHTML = `<strong>${turn.question}</strong><small>${turn.tr}</small>`;
  $("#spokenAnswer").value = "";
  $("#helpPanel").classList.remove("is-visible");
  $("#helpPanel").innerHTML = "";
  $("#analysisPanel").classList.remove("is-visible");
  $("#analysisPanel").innerHTML = "";
}

function getCurrentCoachTurn() {
  const turns = currentLevel().speaking.dialogue;
  return turns[state.coachIndex % turns.length];
}

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function appendDialogueMessage(role, text) {
  const message = document.createElement("div");
  message.className = `message ${role === "coach" ? "coach-message" : "student-message"}`;
  message.innerHTML = `<span>${role === "coach" ? "Koç" : "Sen"}</span><p>${text}</p>`;
  $("#dialogueLog").append(message);
  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderHelpPanel() {
  const turn = getCurrentCoachTurn();
  $("#helpPanel").innerHTML = `
    <h3>Bu soruya böyle cevap verebilirsin</h3>
    ${turn.help.map((sentence) => `<button class="helper-sentence" type="button">${sentence}</button>`).join("")}
    <p><strong>Örnek cevap:</strong> ${turn.sample}</p>
  `;
  $("#helpPanel").classList.add("is-visible");
  $$(".helper-sentence").forEach((button) => {
    button.addEventListener("click", () => {
      const current = $("#spokenAnswer").value.trim();
      $("#spokenAnswer").value = current ? `${current} ${button.textContent}` : button.textContent;
      $("#spokenAnswer").focus();
    });
  });
}

function evaluateCoachAnswer() {
  const turn = getCurrentCoachTurn();
  const answer = $("#spokenAnswer").value.trim();
  if (!answer) {
    $("#analysisPanel").innerHTML = `
      <h3>Koç Değerlendirmesi</h3>
      <p>Önce kısa bir cevap yaz veya telefonda klavyenin mikrofonuyla söyleyip metne çevir. Sonra değerlendireyim.</p>
    `;
    $("#analysisPanel").classList.add("is-visible");
    return;
  }

  const normalized = answer.toLowerCase();
  const hits = turn.keywords.filter((keyword) => normalized.includes(keyword));
  const needsReason = turn.question.toLowerCase().includes("why");
  const hasBecause = normalized.includes("because");
  const wordCount = answer.split(/\s+/).filter(Boolean).length;
  const reasonBonus = needsReason && hasBecause ? 15 : 0;
  const directnessBonus = !needsReason && hits.length >= 2 ? 15 : 0;
  const score = Math.min(100, 35 + hits.length * 12 + reasonBonus + directnessBonus + (wordCount >= 10 ? 14 : 0));
  const nextStep =
    score >= 75
      ? "Cevabın iyi. Şimdi aynı cevabı daha doğal hızda sesli söyle."
      : "Cevap fikri var ama daha net bir sebep ve iş/kariyer kelimesi ekleyelim.";

  appendDialogueMessage("student", answer);
  appendDialogueMessage("coach", nextStep);
  $("#analysisPanel").innerHTML = `
    <h3>Koç Değerlendirmesi</h3>
    <p><strong>Puan:</strong> ${score}/100</p>
    <p><strong>Güçlü taraf:</strong> ${hits.length ? `Şu anahtar fikirleri yakaladın: ${hits.join(", ")}.` : "Cevap vermeye başladın; bu iyi bir ilk adım."}</p>
    <p><strong>Geliştir:</strong> ${needsReason ? (hasBecause ? "Sebep bağladın, bunu koru." : "Bir sebep ekle: because it will help my career.") : "Sorulan şeye doğrudan cevap ver; sonra istersen ekstra bilgi ekle."}</p>
    <p><strong>Daha doğal cevap:</strong> ${turn.sample}</p>
  `;
  $("#analysisPanel").classList.add("is-visible");
}

function formatSeconds(seconds) {
  return `00:${String(Math.min(seconds, recordingState.maxSeconds)).padStart(2, "0")}`;
}

function setRecordingProgress(seconds) {
  $("#recordTimer").textContent = formatSeconds(seconds);
  $("#recordProgress").style.width = `${Math.min(100, (seconds / recordingState.maxSeconds) * 100)}%`;
}

function cleanupRecordingStream() {
  if (recordingState.stream) {
    recordingState.stream.getTracks().forEach((track) => track.stop());
  }
  recordingState.stream = null;
}

function getElapsedRecordingSeconds() {
  if (!recordingState.startedAt) return 0;
  return Math.min(recordingState.maxSeconds, Math.max(1, Math.round((Date.now() - recordingState.startedAt) / 1000)));
}

function resetRecording() {
  clearInterval(recordingState.timerId);
  recordingState.timerId = null;
  recordingState.chunks = [];
  cleanupRecordingStream();

  if (recordingState.audioUrl) {
    URL.revokeObjectURL(recordingState.audioUrl);
  }
  recordingState.audioUrl = "";
  recordingState.audioBlob = null;

  $("#playbackAudio").removeAttribute("src");
  $("#playbackAudio").classList.remove("has-audio");
  $("#retryRecordingBtn").classList.remove("is-visible");
  $("#analyzeRecordingBtn").classList.remove("is-visible");
  $("#analysisPanel").classList.remove("is-visible");
  $("#analysisPanel").innerHTML = "";
  $("#recordBtn").classList.remove("is-recording", "is-ready");
  $("#recordBtn").setAttribute("aria-pressed", "false");
  $("#recordStatus").textContent = "Hazır";
  $("#recordHint").textContent = "30 saniyelik prova yap, sonra kaydını dinle.";
  setRecordingProgress(0);
}

function finishRecording() {
  recordingState.lastDuration = getElapsedRecordingSeconds();
  clearInterval(recordingState.timerId);
  recordingState.timerId = null;
  cleanupRecordingStream();
  $("#recordBtn").classList.remove("is-recording");
  $("#recordBtn").setAttribute("aria-pressed", "false");

  const blob = new Blob(recordingState.chunks, {
    type: recordingState.recorder?.mimeType || "audio/webm"
  });

  if (!blob.size) {
    $("#recordStatus").textContent = "Kayıt alınamadı";
    $("#recordHint").textContent = "Mikrofon iznini kontrol edip tekrar dene.";
    return;
  }

  recordingState.audioBlob = blob;
  recordingState.audioUrl = URL.createObjectURL(blob);
  $("#playbackAudio").src = recordingState.audioUrl;
  $("#playbackAudio").classList.add("has-audio");
  $("#retryRecordingBtn").classList.add("is-visible");
  $("#analyzeRecordingBtn").classList.add("is-visible");
  $("#recordBtn").classList.add("is-ready");
  $("#recordStatus").textContent = "Kayıt hazır";
  $("#recordHint").textContent = "Şimdi kendini dinle: akıcılık, telaffuz ve duraksamalara bak.";
  renderSpeakingAnalysis();
}

function renderSpeakingAnalysis() {
  const turn = getCurrentCoachTurn();
  const duration = recordingState.lastDuration || 0;
  const durationFeedback =
    duration >= 18
      ? "Süre iyi. Şimdi daha az duraksayarak tekrar dene."
      : "Kayıt kısa kaldı. Hedefin en az 18-25 saniye konuşmak olsun.";

  $("#analysisPanel").innerHTML = `
    <h3>Ses Kaydı Kontrolü</h3>
    <p><strong>Süre:</strong> ${duration} saniye. ${durationFeedback}</p>
    <p><strong>Koçun sorusu:</strong> ${turn.question}</p>
    <p><strong>Dinlerken kontrol et:</strong> Bu soruya doğrudan cevap verdin mi? Cümleyi yarıda kesmeden bitirdin mi?</p>
    <p><strong>Metinli değerlendirme için:</strong> Cevabını "Cevabın" alanına yaz veya telefon klavyesinin mikrofonuyla söyleyip metne çevir, sonra "Cevabımı Değerlendir" düğmesine bas.</p>
  `;
  $("#analysisPanel").classList.add("is-visible");
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",")[1] : result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function analyzeRecordingWithAi() {
  if (!recordingState.audioBlob) {
    renderSpeakingAnalysis();
    return;
  }

  const turn = getCurrentCoachTurn();
  $("#analysisPanel").innerHTML = `
    <h3>AI Öğretmen Dinliyor</h3>
    <p>Ses kaydın yazıya çevriliyor ve cevabın değerlendiriliyor. Bu birkaç saniye sürebilir.</p>
  `;
  $("#analysisPanel").classList.add("is-visible");
  $("#analyzeRecordingBtn").disabled = true;
  $("#analyzeRecordingBtn").textContent = "Değerlendiriliyor...";

  try {
    const audioBase64 = await blobToBase64(recordingState.audioBlob);
    const response = await fetch("/api/analyze-speaking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audioBase64,
        mimeType: recordingState.audioBlob.type || "audio/webm",
        level: state.level,
        question: turn.question,
        questionTr: turn.tr,
        sampleAnswer: turn.sample,
        keywords: turn.keywords
      })
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      data = {
        error:
          "AI backend bu adreste çalışmıyor. GitHub Pages statik olduğu için bu özellik Vercel deployment gerektirir."
      };
    }

    if (!response.ok) {
      throw new Error(data.error || "AI değerlendirmesi alınamadı.");
    }

    $("#spokenAnswer").value = data.transcript || "";
    appendDialogueMessage("student", data.transcript || "Ses kaydı transkript edildi.");
    appendDialogueMessage("coach", data.summary || "Kaydını değerlendirdim.");
    $("#analysisPanel").innerHTML = `
      <h3>AI Öğretmen Değerlendirmesi</h3>
      <p><strong>Transkript:</strong> ${data.transcript || "Transkript alınamadı."}</p>
      <p><strong>Puan:</strong> ${data.score || 0}/100</p>
      <p><strong>Akıcılık:</strong> ${data.fluency || "-"}</p>
      <p><strong>Telaffuz:</strong> ${data.pronunciation || "-"}</p>
      <p><strong>Gramer:</strong> ${data.grammar || "-"}</p>
      <p><strong>Daha doğal cevap:</strong> ${data.naturalAnswer || turn.sample}</p>
      <p><strong>Sonraki deneme:</strong> ${data.nextTry || "Aynı cevabı daha net ve doğal söyle."}</p>
    `;
  } catch (error) {
    $("#analysisPanel").innerHTML = `
      <h3>AI Bağlantısı Hazır Değil</h3>
      <p>${error.message}</p>
      <p>Bu özellik GitHub Pages üzerinde çalışmaz; uygulamayı Vercel gibi backend çalıştıran bir yere yayınlayıp <strong>OPENAI_API_KEY</strong> ortam değişkenini eklememiz gerekiyor.</p>
    `;
  } finally {
    $("#analyzeRecordingBtn").disabled = false;
    $("#analyzeRecordingBtn").textContent = "Kaydı Değerlendir";
  }
}

function startRecordingTimer() {
  setRecordingProgress(0);
  recordingState.startedAt = Date.now();
  recordingState.timerId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - recordingState.startedAt) / 1000);
    setRecordingProgress(elapsed);
    if (elapsed >= recordingState.maxSeconds) {
      stopRecording();
    }
  }, 250);
}

function stopRecording() {
  if (recordingState.recorder?.state === "recording") {
    recordingState.recorder.stop();
  }
}

function getSupportedAudioOptions() {
  const types = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/aac"];
  const mimeType = types.find((type) => MediaRecorder.isTypeSupported(type));
  return mimeType ? { mimeType } : {};
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    $("#recordStatus").textContent = "Bu tarayıcı desteklemiyor";
    $("#recordHint").textContent = "Telefonda Chrome veya Safari ile HTTPS linkinden açmayı dene.";
    return;
  }

  resetRecording();

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordingState.stream = stream;
    recordingState.chunks = [];
    recordingState.recorder = new MediaRecorder(stream, getSupportedAudioOptions());

    recordingState.recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size) recordingState.chunks.push(event.data);
    });
    recordingState.recorder.addEventListener("stop", finishRecording);
    recordingState.recorder.start();

    $("#recordBtn").classList.add("is-recording");
    $("#recordBtn").setAttribute("aria-pressed", "true");
    $("#recordStatus").textContent = "Kayıt alınıyor";
    $("#recordHint").textContent = "Konuşmanı doğal hızda yap. Bitince REC'e tekrar bas.";
    startRecordingTimer();
  } catch (error) {
    cleanupRecordingStream();
    $("#recordStatus").textContent = "Mikrofon izni gerekli";
    $("#recordHint").textContent = "Tarayıcı mikrofon iznini kapattıysa ayarlardan izin verip tekrar dene.";
  }
}

function renderAll() {
  $("#levelSelect").value = state.level;
  renderStats();
  renderLesson();
  renderWord();
  renderQuiz();
  renderSpeaking();
}

$$(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

$$("[data-go]").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.go));
});

$("#startDailyBtn").addEventListener("click", () => switchView("lesson"));

$("#levelSelect").addEventListener("change", (event) => {
  state.level = event.target.value;
  state.lessonIndex = 0;
  state.wordIndex = 0;
  state.quizIndex = 0;
  state.coachIndex = 0;
  saveState();
  renderAll();
});

$("#completeLessonBtn").addEventListener("click", () => {
  awardXp(15);
  $("#completeLessonBtn").textContent = "Tamamlandı";
  setTimeout(() => {
    $("#completeLessonBtn").textContent = "Dersi Tamamla";
  }, 1200);
});

$("#nextLessonBtn").addEventListener("click", () => {
  state.lessonIndex += 1;
  saveState();
  renderLesson();
});

function flipWord() {
  const card = $("#flashcard");
  card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(card.classList.contains("is-flipped")));
}

$("#flashcard").addEventListener("click", flipWord);
$("#flipWordBtn").addEventListener("click", flipWord);

$("#shuffleWordBtn").addEventListener("click", () => {
  state.wordIndex = Math.floor(Math.random() * currentLevel().words.length);
  saveState();
  renderWord();
});

$("#knowWordBtn").addEventListener("click", () => {
  const word = currentLevel().words[state.wordIndex % currentLevel().words.length].english;
  const key = `${state.level}:${word}`;
  if (!state.knownWords.includes(key)) {
    state.knownWords.push(key);
    state.xp += 5;
  }
  state.wordIndex += 1;
  saveState();
  renderWord();
});

$("#nextQuestionBtn").addEventListener("click", () => {
  state.quizIndex += 1;
  saveState();
  renderQuiz();
});

$("#speakQuestionBtn").addEventListener("click", () => {
  speakText(getCurrentCoachTurn().question);
});

$("#nextCoachQuestionBtn").addEventListener("click", () => {
  state.coachIndex += 1;
  saveState();
  renderSpeaking();
  appendDialogueMessage("coach", getCurrentCoachTurn().question);
});

$("#showHelpBtn").addEventListener("click", () => {
  renderHelpPanel();
});

$("#evaluateTextBtn").addEventListener("click", () => {
  evaluateCoachAnswer();
});

$("#recordBtn").addEventListener("click", () => {
  if (recordingState.recorder?.state === "recording") {
    stopRecording();
    return;
  }

  startRecording();
});

$("#retryRecordingBtn").addEventListener("click", () => {
  resetRecording();
});

$("#analyzeRecordingBtn").addEventListener("click", () => {
  analyzeRecordingWithAi();
});

$("#completeSpeakingBtn").addEventListener("click", () => {
  awardXp(12);
  if (recordingState.recorder?.state === "recording") {
    stopRecording();
  }
  $("#recordStatus").textContent = recordingState.audioUrl ? "Pratik tamamlandı" : "Pratik kayıtsız tamamlandı";
  $("#recordHint").textContent = recordingState.audioUrl
    ? "Kaydını dinleyip tekrar denemek istersen yeniden kaydet."
    : "Bir dahaki pratikte ses kaydı alıp kendini dinleyebilirsin.";
});

renderAll();
document.body.dataset.currentView = "home";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Uygulama file:// ile açıldığında service worker çalışmaz; yayınlanınca aktif olur.
    });
  });
}
