/**PREVENTS THE PAGE FROM DISPLAYING UN-STYLED CONTENT */
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
let viewport = document.createElement('meta')
viewport.name = 'viewport'
viewport.content = "width=device-width, initial-scale=1, shrink-to-fit=no"
document.head.prepend(viewport)
