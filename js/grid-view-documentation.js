window.addEventListener("load", function () {
	faviconGenerate("icons/grid-view-png");

	$("#contents-col").followTo(document.body.scrollHeight - 500, 200);

	$("#copy-jquery").on("click", function () {
		copyText("#codebox-usage", this);
	});

	$("#copy-grid-view-js-sample").on("click", function () {
		copyText("#codebox-sample", this);
	});
	let x = true;
	$("#gv-collapse").on("click", () => {
		if (x) {
			openSidebar();
			x = false;
		} else {
			closeSidebar();
			x = true;
		}
	});

	function openSidebar() {
    $("#main").removeClass('col-12')
    $("#main").addClass('col-8')
    $("#gv-collapse").addClass('pos-fixed')
    $(".hamburger-icon").addClass('clicked')
		$("#contents-col").css("margin-left", "-200px");
		$("#main").animate({ marginLeft: "150px" }, 200);
		$("body").css("overflowX", "hidden");
		$("#contents-col").removeClass("d-none");
		$("#contents-col").animate({ marginLeft: "10px" }, 200);
	}
	function closeSidebar() {
    $("#main").removeClass('col-8')
    $('#main').addClass('col-12')
    $("#gv-collapse").removeClass('pos-fixed')
    $(".hamburger-icon").removeClass('clicked')
		$("#main").animate({ marginLeft: "0" }, 200, "swing");
		$("#contents-col").animate(
			{ marginLeft: "-200px" },
			200,
			"swing",
			function () {
				$("#contents-col").css("margin-left", "0px");
				$("#contents-col").addClass("d-none");
			}
		);
	}

	$(window).resize(function () {
		customMedia();
	});
	function customMedia() {
		if (window.innerWidth > 992) {
      closeSidebar()
      x = true
		} else if (window.innerWidth <= 992) {
      closeSidebar();
			x = true;
		}  
	}
	customMedia();

  $(window).scroll(function(){
    if($(window).scrollTop() === 0){
      $("#contents-col").css('position', 'absolute')
    }
  })
  
});
