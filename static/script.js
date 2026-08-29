function openLove() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("question").style.display = "block";
}


function moveButton() {

    const button = document.getElementById("noButton");

    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "fixed";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}


function yesClicked() {

    document.getElementById("question").style.display = "none";
    document.getElementById("final").style.display = "block";

    const song = document.getElementById("loveSong");
    song.play();

    setInterval(createHeart, 300);

}
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
