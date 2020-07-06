includeHTML();

function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let webScript = document.querySelector(
	'script[src="./resources/all-website-resources/website-resources.js"]'
);

let deferAttr = document.createAttribute("defer");
let asyncAttr = document.createAttribute("async");

let jquery = document.createElement("script");
jquery.src = "resources/js/jquery-3.5/jquery-3.5.1.min.js";
insertAfter(webScript, jquery);

let popper = document.createElement("script");
popper.src = "resources/js/popper-2.4/popper-2.4.js";
insertAfter(jquery, popper);

let bjs = document.createElement("script");
bjs.setAttributeNode(asyncAttr);
bjs.src = "resources/js/bootstrap-4.5/bootstrap.js";
insertAfter(popper, bjs);

let wt = document.createElement("script");
wt.src = "resources/js/theme.js/website-theme.js";
insertAfter(bjs, wt);

let cookieTheme = document.createElement("script");
cookieTheme.src = "resources/js/cookie-js/main/cookie.js";
insertAfter(wt, cookieTheme);

let faviconGenerator = document.createElement("script");
faviconGenerator.src = "resources/js/faviconGenerator/favicon.js";
insertAfter(cookieTheme, faviconGenerator);

let copyFunc = document.createElement("script");
copyFunc.src = "resources/js/copyText.js/copyText.js";
insertAfter(faviconGenerator, copyFunc);

let fixedElementFollow = document.createElement("script");
fixedElementFollow.src = "resources/js/followTo.js/followTo.js";
insertAfter(copyFunc, fixedElementFollow);

let linkOffsetNode = document.createElement("script");
linkOffsetNode.src = "resources/js/link-offset/link-offset.js";
insertAfter(copyFunc, linkOffsetNode);

let litjs = document.createElement('script')
litjs.src = 'resources/css/libs/litcss/main/js/litjs.js';
insertAfter(linkOffsetNode, litjs)

window.onload = function () {
	$("<footer>").attr("w3-include-html", "footer.html").appendTo("body");
	includeHTML();
	document.getElementById("style").remove();
	/*********************************************/

	let getTheme = getCookie("theme");
	var currTheme = lg[themes[getTheme]];
	updateTheme();

	function updateTheme(num) {
		if (num === null) {
			body.classList.remove(currTheme);
			return;
		}
		getTheme = getCookie("theme");
		body.classList.remove(currTheme);
		currTheme = lg[themes[getTheme]];

		body.classList.add(currTheme);
		body.classList.toggle(currTheme);
		body.classList.toggle(currTheme);
		console.log(getTheme);
		console.log(currTheme);
	}


	$("#dark-drop").hide();
	$("#theme-arrow").hover(
		function () {
			$("#dark-drop").show();
		},
		function () {
			$(".ta-bg").hover(
				function () {
					$("#dark-drop").show();
				},
				function () {
					$("#dark-drop").hide();
				}
			);
			$("#dark-drop").hide();
		}
	);

	$("#dark-drop").hover(
		function () {
			$("#dark-drop").show();
		},
		function () {
			$("#dark-drop").hide();
		}
	);
	$("#normal").on("click", () => {
		deleteCookie("theme");
		setCookie("theme", "normal", "30");
		console.log(getCookie("theme"));
		updateTheme();
	});
	$("#purple").on("click", () => {
		deleteCookie("theme");
		setCookie("theme", "purple", "30");
		console.log(getCookie("theme"));
		updateTheme(0);
	});
	$("#green").on("click", () => {
		deleteCookie("theme");
		setCookie("theme", "green", "30");
		console.log(getCookie("theme"));
		updateTheme(1);
	});
	$("#orange").on("click", () => {
		deleteCookie("theme");
		setCookie("theme", "orange", "30");
		console.log(getCookie("theme"));
		updateTheme(2);
	});
	$("#vivid").on("click", () => {
		deleteCookie("theme");
		setCookie("theme", "vivid", "30");
		console.log(getCookie("theme"));
		updateTheme(3);
	});

	$("#dark-mode").on("click", function () {
		if ($("body").hasClass("dark-mode")) {
			setCookie("dm", "true", "30");
		} else {
			setCookie("dm", "false", "30");
		}
	});

	if ($("body").hasClass("dark-mode") && getCookie("dm") === "false") {
		darkMode();
	}
};
