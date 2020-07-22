window.addEventListener("load", function () {
	faviconGenerate("icons/new-litcss-fav");

	let ccTopOffset = "120px";
	let ccNormalOffset = "200px";

	//list group items
	let overview = $("#overview-li-g");
	let litWidth = $("#width-li-g");
	let litfs = $("#fs-li-g");
	let litfw = $("#fw-li-g"),
		litpos = $("#pos-li-g"),
		litbr = $("#br-li-g"),
		littd = $("#td-li-g"),
		litof = $("#of-li-g"),
		litsc = $("#sc-li-g"),
		litsvg = $("#svg-li-g"),
		litgr = $("#gr-li-g"),
		litno = $("#no-li-g"),
		litbtt = $("#btt-li-g"),
		lithi = $("#hi-li-g"),
		litsi = $("#si-li-g"),
		litgb = $("#gb-li-g"),
		litcb = $("#cb-li-g"),
		litss = $("#ss-li-g");
	copyShortener = (trigger) => {
		return $(trigger).on("click", function () {
			copyText(`#codebox${trigger.substr(trigger.indexOf("-"))}`, this);
		});
	};

	//SECTION copy codebox
	$('[id^="copy"]').each(function () {
		copyShortener(`#${$(this).attr("id")}`);
	});
	//!SECTION
	let determineDarkMode = (e) => {
		if ($("body").hasClass("dark-mode")) return "list-item-dark";
		else return;
	};

	let generatedLG = (name, href, OpClass) => {
		if (OpClass === "active") {
			var id = `${href.substr(1)}-lgn`;
			return `
			<a
		class="list-group-item ${determineDarkMode()} list-group-item-action li-fs p-2 pg-contents-generated ${OpClass}"
		style='border-bottom: solid black 3px'
		href="${href}"
		id='${id}'
		>${name}</a
	>`;
		} else {
			var id = `${href.substr(1)}-lgn`;
			return `
		<a
		class="list-group-item ${determineDarkMode()} list-group-item-action li-fs p-2 pg-contents-generated ${OpClass}"
		href="${href}"
		id='${id}'
		>${name}</a
	>
`;
		}
	};

	var generateContent = (e) => {
		if (overview.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Overview", "#overview", "active") +
						generatedLG("LitJS components", "#litjs-components") +
						generatedLG("Default CSS", "#default-values")
				);
			}
		} else if (litWidth.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG(
						"Width and Height",
						"#width-classes",
						"active"
					) +
						generatedLG("Syntax", "#wd-syntax") +
						generatedLG(
							"Syntax explained",
							"#wd-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#wd-available-classes"
						) +
						generatedLG("Width Examples", "#wd-examples") +
						generatedLG("Height Examples", "#ht-examples")
				);
			}
		} else if (litfs.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Font size", "#fs-classes", "active") +
						generatedLG("Syntax", "#fs-syntax") +
						generatedLG(
							"Syntax explained",
							"#fs-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#fs-available-classes"
						) +
						generatedLG("Examples", "#fs-examples")
				);
			}
		} else if (litbr.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Border radius", "#br-classes", "active") +
						generatedLG("Syntax", "#br-syntax") +
						generatedLG(
							"Syntax explained",
							"#br-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#br-available-classes"
						) +
						generatedLG("Examples", "#br-examples")
				);
			}
		} else if (littd.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG(
						"Transition duration",
						"#td-classes",
						"active"
					) +
						generatedLG("Syntax", "#td-syntax") +
						generatedLG(
							"Syntax explained",
							"#td-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#td-available-classes"
						) +
						generatedLG("Examples", "#td-examples")
				);
			}
		} else if (litfw.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Font weight", "#fw-classes", "active") +
						generatedLG("Syntax", "#fw-syntax") +
						generatedLG(
							"Syntax explained",
							"#fw-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#fw-available-classes"
						) +
						generatedLG("Examples", "#fw-examples")
				);
			}
		} else if (litof.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Overflow", "#of-classes", "active") +
						generatedLG("Syntax", "#of-syntax") +
						generatedLG(
							"Syntax explained",
							"#of-syntax-explained"
						) +
						generatedLG("Examples", "#of-examples")
				);
			}
		} else if (litsc.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Scale", "#sc-classes", "active") +
						generatedLG("Syntax", "#sc-syntax") +
						generatedLG(
							"Syntax explained",
							"#sc-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#sc-available-classes"
						) +
						generatedLG("Examples", "#sc-examples")
				);
			}
		} else if (litpos.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Positioning", "#pos-classes", "active") +
						generatedLG("Syntax", "#pos-syntax") +
						generatedLG(
							"Syntax explained",
							"#pos-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#pos-available-classes"
						) +
						generatedLG(
							"Direction classes",
							"#pos-tblr",
							"active"
						) +
						generatedLG("Syntax", "#pos-tblr-syntax") +
						generatedLG(
							"Syntax explained",
							"#pos-tblr-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#pos-tblr-available-classes"
						) +
						generatedLG("Examples", "#pos-tblr-examples") +
						generatedLG("Z-index", "#pos-z", "active") +
						generatedLG("Syntax", "#pos-z-syntax") +
						generatedLG(
							"Syntax explained",
							"#pos-z-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#pos-z-available-classes"
						)
				);
			}
		} else if (litsvg.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Svg fill classes", "#svg-classes", "active") +
						generatedLG("Syntax", "#svg-syntax") +
						generatedLG(
							"Syntax explained",
							"#svg-syntax-explained"
						) +
						generatedLG(
							"Available classes",
							"#svg-available-classes"
						) +
						generatedLG("Hoverable svgs", "#svg-hover") +
						generatedLG("Examples", "#svg-examples")
				);
			}
		} else if (litgr.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Gradients", "#gr-classes", "active") +
						generatedLG("Syntax", "#gr-syntax") +
						generatedLG(
							"Syntax explained",
							"#gr-syntax-explained"
						) +
						generatedLG(
							"Available directions",
							"#gr-available-dir"
						) +
						generatedLG("Available colors", "#gr-available-classes")
				);
			}
		} else if (litno.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Notes", "#no-classes", "active") +
						generatedLG("Syntax", "#no-syntax") +
						generatedLG(
							"Syntax explained",
							"#no-syntax-explained"
						) +
						generatedLG("Available notes", "#no-available-classes")
				);
			}
		} else if (litbtt.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Back to top", "#btt-classes", "active") +
						generatedLG("Add to your page", "#btt-syntax") +
						generatedLG("Examples", "#btt-example")
				);
			}
		} else if (lithi.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Hamburger icons", "#hi-classes", "active") +
						generatedLG("Examples", "#hi-examples") +
						generatedLG("Normal hamburger", "#hi-normal") +
						generatedLG("Hamburger spin", "#hi-spin") +
						generatedLG("Hamburger press", "#hi-press") +
						generatedLG("Small hamburgers", "#hamburger-sm")
				);
			}
		} else if (litsi.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG(
						"Progress indicators",
						"#si-classes",
						"active"
					) +
						generatedLG("Examples", "#si-examples") +
						generatedLG("Syntax", "#si-syntax")
				);
			}
		}else if (litgb.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Gradient buttons", "#gb-classes", "active") +
						generatedLG("Examples", "#gb-examples") +
						generatedLG("Pop on hover", "#gb-pop") +
						generatedLG("Large gradient buttons", "#gb-lg")
				);
			}
		}else if (litcb.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Codebox", "#cb-classes", "active") +
						generatedLG("Examples", "#cb-examples") +
						generatedLG("Dark codebox", "#cb-dark") +
						generatedLG("Light codebox", "#cb-light") + 
						generatedLG("Copy button", "#cb-copy")
				);
			}
		}else if (litss.hasClass("active")) {
			$(".lit-overview-lg").empty();
			if ($(".lit-overview-lg").children().length === 0) {
				$(".lit-overview-lg").append(
					generatedLG("Toggle switches", "#ss-classes", "active") +
						generatedLG("Examples", "#ss-examples") +
						generatedLG("Custom colors", "#ss-color")
				);
			}
		}

		/*$(
			"#litjs-components-lgn, #default-values-lgn,#wd-syntax-explained-lgn,#wd-syntax-lgn, #wd-examples-lgn, #wd-available-classes-lgn,#ht-examples-lgn,#fw-syntax-explained-lgn,#fw-syntax-lgn, #fw-examples-lgn, #fw-available-classes-lgn"
		).on("click", function () {
			linkOffset($(this).attr("href"), event);
		});*/
		$(".pg-contents-generated").each(function () {
			if ($(this).attr("href") === "javascript: void(0)") {
				return;
			} else {
				$(this).on("click", function () {
					linkOffset($(this).attr("href"));
				});
			}
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

	$("#dark-mode").on("click"),
		(e) => {
			determineDarkMode();
		};

	$(window).scroll(function () {
		ccFunc();
		determineDarkMode();
		generateContent();
	});

	ccFunc();
	determineDarkMode();
	generateContent();

	$("h1, h2, h3, h4").each(function () {
		if (
			($(this).attr("id") && !$(this).hasClass("anchor-ignore")) ||
			$(this).hasClass("anchor-force")
		) {
			$(this).append(`<a class='text-decoration-none' href='#${$(
				this
			).attr("id")}'>
		<img class="link-icon" src="icons/svg/link-fluent.svg" width="30">
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

	$(".lit-td-ex").hover(
		function () {
			$(this).addClass("bg-warning");
		},
		function () {
			$(this).removeClass("bg-warning");
		}
	);

	$(window).scrollTop(1);
	$(window).scrollTop(0);
});
