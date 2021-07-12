const drumButtons = document.querySelectorAll('.drum');

const switchSound = sound => {
    let audio;
    switch (sound) {
        case 'w':
            audio = new Audio('sounds/tom-1.mp3')
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3')
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3')
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3')
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3')
            break;
        case 'k':
            audio = new Audio('sounds/crash.mp3')
            break;
        case 'l':
            audio = new Audio('sounds/kick-bass.mp3')
            break;
        default:
            console.log('Pick a valid sound.')  
    }
    if(audio) {
        audio.play()
    }
}

const buttonAnimation = buttonKey => {
    let activeButton = document.querySelector("." + buttonKey)
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100)
}

for (let i = 0; i< drumButtons.length; i ++) {
    drumButtons[i].addEventListener('click', function() {
        let sound = this.innerHTML;
        switchSound(sound)
        buttonAnimation(sound)
    })
}

document.addEventListener('keydown', (e) => {
    switchSound(e.key)
    buttonAnimation(e.key)
})