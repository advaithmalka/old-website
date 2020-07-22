/*SECTION Back to top arrow button*/
var $bttBtn = $(".back-to-top-btn");

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		$bttBtn.addClass("show");
	} else {
		$bttBtn.removeClass("show");
	}
});

$bttBtn.on("click", (e) => {
	e.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, 0); //set animation length to 300 if smooth scrolling is disabled
});
/*!SECTION */

/*SECTION SCROLL PROGRESS INDICATOR*/
if ($('#scroll-indicator')) {
	window.addEventListener("scroll", scrollIndicator);
	function scrollIndicator() {
		let windowTop =
			document.body.scrollTop || document.documentElement.scrollTop;
		let pgHeight =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		let scroll = (windowTop / pgHeight) * 100;
		$("#scroll-indicator").css('width', `${scroll}%`)
	}
}
/*!SECTION */

/*SECTION Hamburger icons*/
$(".hamburger-icon").on("click", function () {
	$(this).toggleClass("clicked");
});
/*!SECTION */
