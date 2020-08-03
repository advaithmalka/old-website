/**PREVENTS THE PAGE FROM DISPLAYING UN-STYLED CONTENT */
function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

let pre = document.createElement("link");
pre.rel = "stylesheet";
pre.type = "text/css";
pre.href = "css/fouc.css";
pre.id = "style";
document.head.prepend(pre);

//FAVICON
let f1 = document.createElement("link");
f1.rel = "apple-touch-icon";
f1.sizes = "180x180";
f1.href = "icons/favicon_io/apple-touch-icon.png";
document.head.appendChild(f1);

let f2 = document.createElement("link");
f2.rel = "icon";
f2.type = "img/png";
f2.sizes = "32x32";
f2.href = "icons/favicon_io/favicon-32x32.png";
document.head.appendChild(f2);

let f3 = document.createElement("link");
f3.rel = "icon";
f3.type = "img/png";
f3.sizes = "16x16";
f3.href = "icons/favicon_io/favicon-16x16.png";
document.head.appendChild(f3);

let manifest = document.createElement("link");
manifest.rel = "manifest";
manifest.href = "icons/favicon_io/site.webmanifest";
document.head.appendChild(manifest);

//Responsive meta tag
let viewport = document.createElement("meta");
viewport.name = "viewport";
viewport.content = "width=device-width, initial-scale=1, shrink-to-fit=no";
document.head.prepend(viewport);

let asyncAttr2 = document.createAttribute("async");

let gtagjs = document.createElement("script");
gtagjs.setAttributeNode(asyncAttr2);
gtagjs.src = "https://www.googletagmanager.com/gtag/js?id=UA-174312447-1";
document.head.appendChild(gtagjs);

let gtagf = document.createElement("script");
gtagf.src = "resources/all-website-resources/gtag.js";
insertAfter(gtagjs, gtagf);
