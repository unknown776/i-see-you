document.querySelector("body").addEventListener('mousemove', eyeball);
let music = new Audio("i_see_you.mp3");
alert("Please click anywhere in this window!")
function eyeball() {
    let eye = document.querySelectorAll(".eye");
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(window.event.pageX - x, window.event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = `rotate(${rot}deg)`;
    });
};

setTimeout(() => {
    music.play()
}, 10000);
