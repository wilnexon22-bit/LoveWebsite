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


function birthdaySurprise() {

    document.getElementById("final").style.display = "none";
    document.getElementById("birthday").style.display = "block";

    createBalloons();
    createConfetti();

}


function createBalloons() {

    const balloons = document.getElementById("balloons");

    for (let i = 0; i < 15; i++) {

        const balloon = document.createElement("div");

        balloon.innerHTML = "🎈";
        balloon.classList.add("balloon");

        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = (4 + Math.random() * 4) + "s";
        balloon.style.animationDelay = Math.random() * 2 + "s";

        balloons.appendChild(balloon);
    }
}


function createConfetti() {

    const confetti = document.getElementById("confetti");

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDuration = (2 + Math.random() * 3) + "s";
        piece.style.animationDelay = Math.random() * 2 + "s";

        confetti.appendChild(piece);
    }

}
