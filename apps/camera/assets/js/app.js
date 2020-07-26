const liveFeed = document.querySelector("#cam-viewer");
const sensor = document.querySelector("#cam-pic");
const output = $("#output");
output.hide()
// Access the device camera and stream to liveFeed
function startCamera() {
	navigator.mediaDevices
		.getUserMedia({ video: { facingMode: "user" } })
		.then(function (str) {
			track = str.getTracks()[0];
			liveFeed.srcObject = str;
		})
		.catch(function (err) {
			console.error("Unfortunately the camera was unable to start:", err);
		});
}
// Take a picture when trigger is tapped
$("#trigger").on("click", function () {
	output.show()
	sensor.width = liveFeed.videoWidth;
	sensor.height = liveFeed.videoHeight;
	sensor.getContext("2d").drawImage(liveFeed, 0, 0);
	output.attr("src", sensor.toDataURL("image/webp")).addClass("taken");
});
$("#output-link").on("click", function() {
	$(this).attr('href', output.attr('src'))
	output.download = 'image.jpg'
	console.log($(this))
});

output.on("load", e => {
	console.log("lloaded");
});
output.on("error", e => {
	console.error("Something whet wrong and the picture was not taken :(");
});

window.addEventListener("load", startCamera);
