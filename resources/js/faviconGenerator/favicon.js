/**
 * 
 * @param {string} folderPath - path to your folder
 * !IMPORTANT  don't add a slash '/' after the folder name
 * !IMPORTANT  as of right now this function is only compatible with favicons from https://favicon.io/favicon-generator/
 */

function faviconGenerate(folderPath) {
	// ATI = apple touch icon
	let ATI = document.createElement("link");
	ATI.rel = "apple-touch-icon";
	ATI.sizes = "180x180";
	ATI.href = `${folderPath}/apple-touch-icon.png`;
	document.head.appendChild(ATI);
	//32x32 image
	let x32 = document.createElement("link");
	x32.rel = "icon";
	x32.type = "img/png";
	x32.sizes = "32x32";
	x32.href = `${folderPath}/favicon-32x32.png`;
	document.head.appendChild(x32);
	//16x16 image
	let x16 = document.createElement("link");
	x16.rel = "apple-touch-icon";
	x16.sizes = "180x180";
	x16.href = `${folderPath}/favicon-16x16.png`;
	document.head.appendChild(x16);
	//site.webmanifest
	let webManifest = document.createElement("link");
	webManifest.rel = "manifest";
	webManifest.href = `${folderPath}/site.webmanifest`;
	document.head.appendChild(webManifest);
}
