const buttons = document.querySelectorAll('.btn')
let currentAudio = null
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`sounds/${e.target.textContent.trim()}.mp3`)
        currentAudio.play()
    })
})
const stop = document.querySelector('.stop')
stop.addEventListener('click', () => {
    currentAudio.pause();
    currentAudio.currentTime = 0;

})