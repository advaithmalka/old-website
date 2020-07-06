/**
 * Original made by user mVChr on Stackoverflow: https://stackoverflow.com/users/246616/mvchr
 * !IMPORTANT requires Jquery
 * @param {string} pos position at where the fixed element will change to an absolute element
 * @param {string} offset px to offset the selected element from the top
 */

if(!window.jQuery){ location.reload()}

$.fn.followTo = function (pos, offset) {
	var $this = this,
		$window = $(window);

	$window.scroll(e =>{
		if ($window.scrollTop() > pos) {
			$this.css({
				position: "absolute",
				top: pos + offset,
			});
		} else {
			$this.css({
				position: "fixed",
				top: offset,
			});
		}
	});
};
