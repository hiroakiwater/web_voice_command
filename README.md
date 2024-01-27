# web_voice_command
WebVoiceCommand library built for easy to add voice command to a web page.

# How to use

Add following code to a project.

```
<script src="scripts/web_voice_command.js"></script>

...

<script>
let commands = [
  { name: 'move', action: 'click' }
]
// this is word list in your web page.
let words = ['menu']

let voice = new WebVoiceCommand(commands, words, "en-US");
document.body.onlick = () => {
  voice.startListen();
}
</script>
```

This is an example of voice command of "move to menu".
The library will find a word of "menu" in the page, and execute click event.
