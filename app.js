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
      prompts: ["My name is ...", "I am from ...", "I work as ...", "I am learning English because ..."]
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
      prompts: ["This weekend, I am going to ...", "First, I will ...", "After that, I want to ...", "I think it will be ..."]
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
      prompts: ["In my opinion, ...", "The main reason is ...", "For example, ...", "However, ..."]
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
  quizIndex: 0
};

const state = {
  ...defaultState,
  ...JSON.parse(localStorage.getItem("linguaStepState") || "{}")
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
  $("#speakingTitle").textContent = speaking.title;
  $("#speakingScenario").textContent = speaking.scenario;
  $("#promptList").innerHTML = speaking.prompts.map((prompt) => `<p>${prompt}</p>`).join("");
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

$("#recordBtn").addEventListener("click", () => {
  const recording = $("#recordBtn").classList.toggle("is-recording");
  $("#recordBtn").setAttribute("aria-pressed", String(recording));
  $("#recordStatus").textContent = recording ? "Kayıt simülasyonu aktif" : "Hazır";
});

$("#completeSpeakingBtn").addEventListener("click", () => {
  awardXp(12);
  $("#recordBtn").classList.remove("is-recording");
  $("#recordBtn").setAttribute("aria-pressed", "false");
  $("#recordStatus").textContent = "Pratik tamamlandı";
});

renderAll();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Uygulama file:// ile açıldığında service worker çalışmaz; yayınlanınca aktif olur.
    });
  });
}
