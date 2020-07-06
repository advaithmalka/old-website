/*SECTION Back to top arrow button*/
var $bttBtn = $(".back-to-top-btn");

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		$bttBtn.addClass("show");
	} else {
		$bttBtn.removeClass("show");
	}
});
//set the 
$bttBtn.on("click", (e) => {
	e.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, 0); //set animation length to 300 if smooth scrolling is disabled
});
/*!SECTION */

/*SECTION SCROLL PROGRESS INDICATOR*/
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
/*!SECTION */

/*SECTION Hamburger icons*/
$(".hamburger-icon").on("click", function () {
	$(this).toggleClass("clicked");
});
/*!SECTION */
