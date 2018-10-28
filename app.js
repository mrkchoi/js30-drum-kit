// DOM variables
let key = document.querySelector('.key'),
    keys = document.querySelectorAll('.key');

// Event listener for keydown
// Play corresponding data-key sound on keydown
window.addEventListener('keydown', playSound);

function playSound(e) {
    let dataKey = e.which,
        audioClip = document.querySelector(`audio[data-key='${dataKey}']`),
        key = document.querySelector(`.key[data-key='${dataKey}']`);

        if(!audioClip) {
            return;
        }
        audioClip.currentTime = 0;
        audioClip.play();

        key.classList.add('playing');
}

// Event listener for each key. Listen for css transition end
keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
});

// On transition end, execute the following to remove the 'playing' class
function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('playing');
}