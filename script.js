//your JS code here. If required.
const buttons = document.querySelectorAll('.btn')
let currentAudio = null
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`assets/${e.target.textContent.trim()}.mp3`)
        currentAudio.play()
    })
})