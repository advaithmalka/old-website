
function copyText(target, copybtn) {
	// Selects the text content of the target
	var targetNode = document.querySelector(target);
	var range = document.createRange();
	range.selectNode(targetNode);
	window.getSelection().addRange(range);
	console.log(target)
	try {
		var result = document.execCommand("copy");
		var msg = result ? "successful" : "unsuccessful";
		console.log(`Copy command was ${msg}`);
	} catch (err) {
		console.log("Oops, unable to copy :(");
	}
	window.getSelection().removeRange(range);

	$(copybtn).text("Copied");
	setTimeout(function () {
		$(copybtn).text("Copy");
	}, 2000);
}
