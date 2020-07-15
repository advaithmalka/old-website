window.addEventListener("load", function () {
	faviconGenerate("icons/new-litcss-fav");

	let ccTopOffset = "120px";
	let ccNormalOffset = "200px";

	//list group items
	let overview = $("#overview-li-g");
	let litWidth = $("#width-li-g");

	let generatedLG = (name, href) => {
		var id = `${href.substr(1)}-lgn`;
		return `
		<a
		class="list-group-item ${determineDarkMode()} list-group-item-action li-fs p-2 pg-contents-generated"
		href="${href}"
		id='${id}'
		>${name}</a
	>
`;
	};

	var generateContent = (e) => {
		if (overview.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("LitJS components", "#litjs-components") +
						generatedLG("Default CSS", "#default-values")
				);
			}
		} else if (litWidth.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Syntax", "#wd-syntax") +
						generatedLG(
							"Syntax explained",
							"#wd-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#wd-available-classes"
						) + 
						generatedLG(
							"Examples",
							"#wd-examples"
						)
				);
			}
		}

		$(
			"#litjs-components-lgn, #default-values-lgn,#wd-syntax-explained-lgn,#wd-syntax-lgn, #wd-examples-lgn, #wd-available-classes-lgn"
		).on("click", function () {
			linkOffset($(this).attr("href"), event);
		});
	};

	ccFunc = (e) => {
		if ($(window).scrollTop() === 0) {
			$("#contents-col").css("position", "absolute");
		}

		if (window.innerWidth > 992) {
			$("#contents-col").css("top", ccTopOffset);
			$("#contents-col").followTo(document.body.scrollHeight - 1375, 120);
		} else {
			$("#contents-col").css("top", ccNormalOffset);
			$("#contents-col").followTo(document.body.scrollHeight - 1375, 200);
		}
	};

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

	let determineDarkMode = (e) => {
		if ($("body").hasClass("dark-mode")) return "list-item-dark";
		else return;
	};
	$("#dark-mode").on("click"),
		(e) => {
			determineDarkMode();
		};
	determineDarkMode();
	$(window).scroll(function () {
		ccFunc();
		determineDarkMode();
		generateContent();
	});

	generateContent();
	ccFunc();

	$("h1, h2, h3, h4").each(function () {
		if (
			($(this).attr("id") && !$(this).hasClass("anchor-ignore")) ||
			$(this).hasClass("anchor-force")
		) {
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
		}
	});
});
