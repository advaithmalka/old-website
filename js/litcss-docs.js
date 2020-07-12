window.addEventListener("load", function () {
	faviconGenerate("icons/new-litcss-fav");

	let ccTopOffset = "120px";
	let ccNormalOffset = "200px";

	$("#lit-hamburger").on("click", function () {
		$(this).toggleClass("clicked");
		setTimeout((e) => {
			$("#inner-nav-hamburger").removeClass("clicked");
		});
	});

	$("hr.lit-hr").addClass("bg-danger");
	$("hr.lit-hr").addClass("mt-5");

	$("#copy-lit-usage").on("click", function () {
		copyText("#codebox-lit-usage", this);
	});

	$("#copy-cjs-setCookie").on("click", function () {
		copyText("#codebox-setCookie", this);
	});

	$("#copy-cjs-getCookie").on("click", function () {
		copyText("#codebox-getCookie", this);
	});
	$("#copy-cjs-deleteCookie").on("click", function () {
		copyText("#codebox-deleteCookie", this);
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
	$("#try-setCookie").on("click", () => {
		setCookie("cookie", "chocolate", 1);
		alert(
			"Cookie has been set: cookie = chocolate \n This cookie will expire in 1 day"
		);
	});
	$("#try-getCookie").on("click", () => {
		alert(getCookie("cookie"));
	});
	$("#try-deleteCookie").on("click", () => {
		deleteCookie("cookie");
		alert("Cookie has been deleted");
	});
	function openSidebar() {
		$("#main").removeClass("col-12");
		$("#main").addClass("col-8");
		$("#gv-collapse").addClass("pos-fixed");
		$(".hamburger-icon").addClass("clicked");
		$("#contents-col").css("margin-left", "-200px");
		$("#main").animate({ marginLeft: "150px" }, 200);
		$("body").css("overflowX", "hidden");
		$("#contents-col").removeClass("d-none");
		$("#contents-col").animate({ marginLeft: "10px" }, 200);
	}
	function closeSidebar() {
		$("#main").removeClass("col-8");
		$("#main").addClass("col-12");
		$("#gv-collapse").removeClass("pos-fixed");
		$(".hamburger-icon").removeClass("clicked");
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
			closeSidebar();
			x = true;
			$("#contents-col").css("top", ccTopOffset);
		} else if (window.innerWidth <= 992) {
			closeSidebar();
			x = true;
			$("#contents-col").css("top", ccNormalOffset);
		}
	}
	customMedia();

	$(window).scroll(function () {
		ccFunc();
	});

	ccFunc = (e) => {
		if ($(window).scrollTop() === 0) {
			$("#contents-col").css("position", "absolute");
		}

		if (window.innerWidth > 992) {
			$("#contents-col").css("top", ccTopOffset);
			$("#contents-col").followTo(document.body.scrollHeight - 1375, 120);
			console.log(document.body.scrollHeight);
		} else {
			$("#contents-col").css("top", ccNormalOffset);
			$("#contents-col").followTo(document.body.scrollHeight - 1375, 200);
		}
	};
	ccFunc();

	$("h1, h2, h3, h4").each(function () {
		if ($(this).attr("id") && !$(this).hasClass('anchor-ignore') || $(this).hasClass('anchor-force')) {
			console.log(this);
			$(this).append(`<a class='text-decoration-none' href='#${$(
				this
			).attr("id")}'>
		<img class="link-icon" src="icons/link.png" width="30">
		</a>`);

			$(`a[href='#${$(this).attr("id")}]'`).on("click", (e) => {
				setTimeout(function () {
					$("html, body").animate({
						scrollTop: 0,
					});
				});
			});
		} else {
			console.log(`${$(this)} false`);
		}
	});
});
