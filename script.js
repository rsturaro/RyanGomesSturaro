/*passa seletor css*/
const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => { 
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const tuboposition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (tuboposition <= 120 &&tuboposition > 0 &&marioPosition < 80) {

        tubo.style.animation = 'none';
        tubo.style.left = `${tuboposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens-jogo/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

/*evento de pulo, keydown acontece tal função quando o teclado é apertado*/
document.addEventListener('keydown', jump);
