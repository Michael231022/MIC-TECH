/************************ LANDING-SCREEN ************************/
const landingScreen = document.querySelector('.landing-screen');
const landingLogo = document.getElementById('landing-logo');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        landingScreen.classList.add('display-none');
    }, 2800);
    landingLogo.src = "mic-logo/fast.gif"+"?a="+Math.random();
});

