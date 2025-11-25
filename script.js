let questions = [
  {
    question:
      "Wer spielte die Hauptrolle als Iron Man im Marvel Cinematic Universe?",
    answer_1: "Chris Evans",
    answer_2: "Robert Downey Jr.",
    answer_3: "Tom Holland",
    answer_4: "Mark Ruffalo",
    right_answer: 2,
  },
  {
    question: "Welche Sängerin veröffentlichte das Album '1989'?",
    answer_1: "Billie Eilish",
    answer_2: "Katy Perry",
    answer_3: "Taylor Swift",
    answer_4: "Ariana Grande",
    right_answer: 3,
  },
  {
    question:
      "Welche Serie handelt von einer Gruppe Teenager in der fiktiven Stadt Hawkins?",
    answer_1: "Riverdale",
    answer_2: "Stranger Things",
    answer_3: "The Umbrella Academy",
    answer_4: "Dark",
    right_answer: 2,
  },
  {
    question: "Welches Game wurde 2017 zu einem weltweiten Battle-Royale-Hit?",
    answer_1: "Fortnite",
    answer_2: "Minecraft",
    answer_3: "League of Legends",
    answer_4: "Valorant",
    right_answer: 1,
  },
  {
    question: "Welche Band ist bekannt durch Hits wie 'Bohemian Rhapsody'?",
    answer_1: "The Beatles",
    answer_2: "Queen",
    answer_3: "Pink Floyd",
    answer_4: "Coldplay",
    right_answer: 2,
  },
  {
    question: "Wie heißt das fiktive Königreich aus 'Game of Thrones'?",
    answer_1: "Narnia",
    answer_2: "Westeros",
    answer_3: "Middle-Earth",
    answer_4: "Panem",
    right_answer: 2,
  },
  {
    question: "Welcher Künstler steht hinter dem Song 'Blinding Lights'?",
    answer_1: "The Weeknd",
    answer_2: "Drake",
    answer_3: "Post Malone",
    answer_4: "Ed Sheeran",
    right_answer: 1,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("totalQuestionLength").innerHTML = questions.length;
  showCurrentQuestion();
}

function showCurrentQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function answer(answer_x) {}
