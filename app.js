let image = new Image();
image.src = "stamp.png";

let canvas = document.getElementById("canvas");
canvas.addEventListener("click", function(event) {
	let x = event.clientX - canvas.offsetLeft;
	let y = event.clientY - canvas.offsetTop;
	drawStamp(x, y);
});

function drawStamp(x, y) {
	let context = canvas.getContext("2d");
	context.drawImage(image, x, y);
}
