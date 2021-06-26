const drumButtons = document.querySelectorAll('.drum');

for (let i = 0; i< drumButtons.length; i ++) {
    drumButtons[i].addEventListener('click', () => {
        let audio = new Audio('sounds/tom-1.mp3')
        audio.play()
    })
}