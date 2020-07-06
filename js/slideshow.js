let fadeDuration = parseFloat($("#animation-duration").val()); //default: 200
let imageWidth = parseFloat($("#image-width").val());

let z = 1;
let inputValue = $("#img-file").val();
let iv = $("#img-file").val();

checkI = () => {
	if (z === 1) {
		$("#prev-btn").addClass("disabled");
		$("#prev-btn").prop("disabled", true);
	} else {
		$("#prev-btn").removeClass("disabled");
		$("#prev-btn").prop("disabled", false);
	}

	if (z === $("#images img").length) {
		$("#next-btn").addClass("disabled");
		$("#next-btn").prop("disabled", true);
	} else {
		$("#next-btn").removeClass("disabled");
		$("#next-btn").prop("disabled", false);
	}
	//$("#debug-div").text($("#images img").length);
	$("#slide-div").text(`${z}/${$("#images img").length}`);
};
checkI();
$("img").hide();
$("#invalid-alert").hide();

$("#fade-duration").text($("#animation-duration").val() + "ms");
$("#animation-duration").on("input", () => {
	$("#fade-duration").text($("#animation-duration").val() + "ms");
	if ($("#animation-duration").val() === "0") {
		$("#fade-duration").text("No animation");
	}
	fadeDuration = parseFloat($("#animation-duration").val());
});

$("#image-width-div").text($("#image-width").val() + "px");
$("#image-width").on("input", () => {
	for (a = 1; a <= $("#images img").length; a++) {
		$(`#${a}`).attr("width", imageWidth);
		console.log(a);
	}
	$("#image-width-div").text($("#image-width").val() + "px");
	imageWidth = parseFloat($("#image-width").val());
});

$("#" + z).fadeIn(fadeDuration);
$("#next-btn").on("click", () => {
	$("#" + z).fadeOut(fadeDuration, () => {
		z++;
		$("#" + z).fadeIn(fadeDuration);
		checkI();
	});
});
$("#prev-btn").on("click", () => {
	$("#" + z).fadeOut(fadeDuration, () => {
		z--;
		$("#" + z).fadeIn(fadeDuration);
		checkI();
	});
});

$("#closeBtn").on("click", () => {
	$("#invalid-alert").show();
	$("#invalid-alert").hide();
});

$("#img-submit").addClass("disabled");
$("#img-submit").prop("disabled", true);

$("#img-file").on("input", () => {
	iv = $("#img-file").val();
	if (iv === "") {
		$("#img-submit").addClass("disabled");
		$("#img-submit").prop("disabled", true);
	} else {
		$("#img-submit").removeClass("disabled");
		$("#img-submit").prop("disabled", false);
	}
});
let invalidImage;
$("#img-submit").on("click", (e) => {
	e.preventDefault();
	inputValue = $("#input-file").val();
	invalidImage = false;
	console.log($("#img-file").val());

	/*checkURL = (str) => {
		var pattern = new RegExp(
			"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
				"(\\#[-a-z\\d_]*)?$",
			"i"
		); // fragment locator
		return !pattern.test(str);
	};
	checkURL(inputValue);
	if (!checkURL(inputValue)) {
		$("#invalid-alert").show();
		return;
	}*/

	$("<img>")
		.attr("src", $("#img-file").val())
		.attr("id", $("#images img").length + 1)
		.attr("width", imageWidth)
		.on("load", () => {
			console.log("Image loaded correctly");
		})
		.on("error", () => {
			errorFunc();
			$(`#${$("#images img").length}`).remove();
			console.log("sec called");
			checkI();
		})
		.hide()
		.appendTo($("#images"));

	if ($("#images img").length === 1) {
		$("#images img").show();
	}
	console.log($("#images img").length);
	$("#img-file").val("");

	errorFunc = () => {
		invalidImage = true;
		$("#invalid-alert").show();
		console.log("Error loading image");
		console.log("Please make sure the URL is valid");
	};

	checkI();
	console.log(invalidImage);
	console.log($("#images img").length);
});

let defaultImages = [
	"https://www.kasandbox.org/programming-images/animals/snake_green-tree-boa.png",
	"https://www.kasandbox.org/programming-images/animals/shark.png",
	"https://www.kasandbox.org/programming-images/animals/retriever.png",
];

$("#di-toggle").on("input", () => {
	if ($("#di-toggle").prop("checked") == true) {
		let createDefaultImages = async () => {
			for (let b = 1; b <= 3; b++) {
				$("<img>")
					.attr("id", b)
					.attr("class", "default-img")
					.attr("src", defaultImages[b - 1])
					.attr("width", imageWidth)
					.appendTo($("#images"));

				console.log(b);
			}
		};

		let hideImages = async () => {
			await createDefaultImages();
			$("#2").hide();
			$("#3").hide();
		};
		if ($("#images img").length > 0) {
			for (let c = 1; c <= $("#images img").length; c++) {
				$(`#${c}`)
					.attr("id", c + 3)
					.hide();
			}
			console.log(true);
		}
		hideImages();
		z = 1;
		checkI();
	} else if ($("#di-toggle").prop("checked") == false) {
		$(".default-img").remove();
		z = 1;
		if ($("#images img").length !== 0) {
			for (let c = 1; c <= $("#images img").length; c++) {
				$(`#${c + 3}`).attr("id", c);
			}

			checkI();
			for (let d = 1; d <= $("#images img").length; d++) {
				$("#images img").hide();
			}
			$("#1").show();
			checkI();
		}
		console.log($("#images img").length);
		checkI();
	}
});

$("#trash-can").on('click', () => {
	$(`#${z}`).remove()
	for(let f = z; f <= $("#images img").length; f++){
		$(`#${f+1}`).attr('id', $(`#${f+1}`).attr('id') -  1)
	}

	if(z === 1) {
		z++
	}
	z--
	$(`#${z}`).show()
	checkI()
})
