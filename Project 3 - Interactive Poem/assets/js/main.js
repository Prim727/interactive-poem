function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let divs = document.querySelectorAll(".grid-container div");

let rotation = 0;
		document.addEventListener("click", function () {
			rotation += randomNumber(1, 200);
			document.body.style.transform = `rotate(${rotation}deg)`;
		});

function randomize() {
    console.log(divs.length, "randomize!");

    divs.forEach(function (div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translateY = randomNumber(0, 20);

        div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%)`;
    });
}
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault();
        randomize();
    }
});
