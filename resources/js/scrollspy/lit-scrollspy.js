let spyOn = (target, offset) => {
	$(document).scroll(function () {
		if (
			$(this).scrollTop() >=
			$($(target).attr("href")).offset().top - offset
		) {
			$(target).addClass("active");
		} else {
			$(target).removeClass("active");
		}
	});
};
