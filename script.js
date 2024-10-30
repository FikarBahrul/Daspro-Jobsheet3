document.getElementById("celebrateButton").addEventListener("click", startCelebration);

function startCelebration() {
    for (let i = 0; i < 100; i++) {
        createBalloon();
    }
}

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomLeft = Math.random() * window.innerWidth + "px";
    const randomAnimationDuration = (Math.random() * 3 + 3) + "s";

    balloon.style.backgroundColor = randomColor;
    balloon.style.left = randomLeft;
    balloon.style.animationDuration = randomAnimationDuration;

    document.getElementById("balloonContainer").appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, parseFloat(randomAnimationDuration) * 1000);
}

