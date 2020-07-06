/**
 * IMPORTANT: JQuery must be loaded in before this script
 * NOTE: class .gv-card must be added to the element with the class .col-lg-4 or col-lg-3 (whatever is the default)
 * NOTE: add id .grid-4x3 on the compact view button and .grid-3x3 on the spaced view button
 */

let $card = $(".gv-card");

$(".grid-4x3").on("click", () => {
	if ($card.hasClass("col-lg-4")) {
		$card.removeClass("col-lg-4");
		$card.addClass("col-lg-3");
	} else if ($card.hasClass("col-4")) {
		$card.removeClass("col-4");
		$card.addClass("col-3");
	} else if ($card.hasClass("col-xl-4")) {
		$card.removeClass("col-xl-4");
		$card.addClass("col-xl-3");
	} else if ($card.hasClass("col-md-4")) {
		$card.removeClass("col-md-4");
		$card.addClass("col-md-3");
	} else if ($card.hasClass("col-sm-4")) {
		$card.removeClass("col-sm-4");
		$card.addClass("col-sm-3");
	}
});
$(".grid-3x3").on("click", () => {
	if ($card.hasClass("col-lg-3")) {
		$card.removeClass("col-lg-3");
		$card.addClass("col-lg-4");
	} else if ($card.hasClass("col-3")) {
		$card.removeClass("col-3");
		$card.addClass("col-4");
	} else if ($card.hasClass("col-xl-3")) {
		$card.removeClass("col-xl-3");
		$card.addClass("col-xl-4");
	} else if ($card.hasClass("col-md-3")) {
		$card.removeClass("col-md-3");
		$card.addClass("col-md-4");
	} else if ($card.hasClass("col-sm-3")) {
		$card.removeClass("col-sm-3");
		$card.addClass("col-sm-4");
	}
});
