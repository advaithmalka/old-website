function copyText(target, copybtn) {
	$(copybtn).text("Copied");
	setTimeout(function () {
		$(copybtn).text("Copy");
	}, 2000);
}

$('.copy-btn').each(function(){
	var thisCodebox = `#codebox${$(this).attr("id").substr($(this).attr("id").indexOf("-"))}`
	$(this).attr('data-clipboard-target', thisCodebox)
})

$('[id^=copy]').each(function(){
	var thisCodebox = `#codebox${$(this).attr("id").substr($(this).attr("id").indexOf("-"))}`
	$(this).attr('data-clipboard-target', thisCodebox)
})