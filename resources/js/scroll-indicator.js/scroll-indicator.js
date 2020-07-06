if (document.getElementById("si-bar")) {
	window.addEventListener("scroll", scrollIndicator);
	function scrollIndicator() {
		let winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		let docHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		let scrolled = (winScroll / docHeight) * 100;
		document.getElementById("si-bar").style.width = `${scrolled}%`;
	}
}