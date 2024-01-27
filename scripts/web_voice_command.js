// verison: 0.1
// wirtten by hiroakiwater
class WebVoiceCommand {
  constructor(commands, words, lang) {
    this.commands = commands;
    this.words = words;
    this.lang = lang;

    this.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
  }

  startListen() {
    this.recognition = new this.SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.lang = this.lang;
    this.recognition.onresult = (event) => {
      const length = event.results.length - 1;
      const results = event.results;
      const text = results[length][0].transcript;
      // console.log(text);

      const aTags = document.getElementsByTagName('a');
      for (const command of commands) {
        if (text.toLowerCase().indexOf(command.name) >= 0) {
          for (const word of this.words) {
            for (const link of aTags) {
              if (link.innerText.toLowerCase().indexOf(word) >= 0) {
                // console.log(link);
                const event = new MouseEvent('click', {view: window, bubbles: true, cancelable: true});
                link.dispatchEvent(event);
              }
            }
          }
        }
      }
    };
    this.recognition.start();
  }

  stopListen() {
    this.recognition.stop();
  }
}