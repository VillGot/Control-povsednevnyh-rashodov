

let final_transcript = "";
let recognizing = false;

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
console.log(speechRecognition)
const recognition = new speechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.maxAlternatives = 3;
recognition.lang = "ru-RU";
let voiceIcon = document.getElementById("voice")
let res = ""

recognition.onerror = ({ error }) => {
  console.error(error);
};
recognition.onend = () => {
  if (!recognizing) return;
  recognition.start();
};
recognition.onresult = (e) => {
  let interim_transcript = "";
  for (let i = e.resultIndex; i < e.results.length; i++) {
    if (e.results[i].isFinal) {
      const result = editInterim(e.results[i][0].transcript);
      final_transcript += result;
    } else {
      interim_transcript += e.results[i][0].transcript;
    }
  }
  res = interim_transcript
  final_transcript = editFinal(final_transcript);
  
  
};

const DICTIONARY = {
  точка: ".",
  Точка: ".",
  запятая: ",",
  Запятая: ",",
  вопрос: "?",
  Вопрос: "?",
  восклицание: "!",
  Восклицание: "!",
  двоеточие: ":",
  Двоеточие: ":",
  тире: "-",
  Тире: "-",
  абзац: "\n",
  Абзац: "\n",
  отступ: "\t",
  Отступ: "\t",
  бешик: "Бешик(голубой)"
};

function editInterim(s) {
  return s
    .split(" ")
    .map((word) => {
      word = word.trim();
      return DICTIONARY[word] ? DICTIONARY[word] : word;
    })
    .join(" ");
}

function editFinal(s) {
  return s.replace(/\s([\.+,?!:-])/g, "$1");
}

assistant.onclick = ({ target }) => {
  switch (target.className) {
    case "start":
      final_transcript = "";
      recognition.start();
      recognizing = true;
      target.className = "stop";
      voiceIcon.style = "background-color: red;";
      break;
    case "stop":
      recognition.stop();
      recognizing = false;
      target.className = "start";
      voiceIcon.style = "background-color: none;";
      if(final_transcript !== "")res = final_transcript
      if(res === "")res = "Не удалось распознать текст. Попробуйте снова."
      console.log(res)
      //rustam(res)
      res = ""
      
      break;
    default:
      break;
  }
};


