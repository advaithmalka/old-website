var body = document.body;
//linear gradients
const lg = [
	"lg-purple-indigo-tl",
	"lg-skyblue-green-br",
	"lg-red-orange-tl",
	"lg-lightblue-purple-lightred-tr",
];

const themes = {
	purple: "0",
	green: "1",
	orange: "2",
	vivid: "3",
};

//let getTheme = Math.floor(Math.random() * 4);

//body.classList.add(currTheme);
function darkMode() {
	let card = document.querySelectorAll(".card");
	let darkItem = document.querySelectorAll(".dark-item");
	let darkerItem = document.querySelectorAll(".darker-item");
	let svg = document.querySelectorAll(".svg");
	let pagination = document.querySelectorAll(".dm-active");
	let listItem = document.querySelectorAll(".list-group-item");
	let darkText = document.querySelectorAll(".dark-link");
	let hamburgerIcon = document.querySelectorAll(".hamburger-icon:not(.dm-ignore) .bar");
	let codebox = document.querySelectorAll(".codebox");
	let hr = document.getElementsByTagName("hr");
	//body
	body.classList.toggle("dark-mode");

	//body.classList.toggle(currTheme);
	//cards
	for (let i = 0; i < card.length; i++) {
		card[i].classList.toggle("card-dark");
	}
	//any items to trigger dark mode
	for (let i = 0; i < darkItem.length; i++) {
		darkItem[i].classList.toggle("card-dark");
	}
	//any items to trigger darker mode
	for (let i = 0; i < darkerItem.length; i++) {
		darkerItem[i].classList.toggle("light-black");
	}
	//dark pagination
	for (let i = 0; i < pagination.length; i++) {
		pagination[i].classList.toggle("pg-dark");
	}
	//change color of svg's
	for (let i = 0; i < svg.length; i++) {
		svg[i].classList.toggle("svg-fill-black");
	}
	for (let i = 0; i < darkText.length; i++) {
		darkText[i].classList.toggle("text-black");
	}
	//list item
	for (let i = 0; i < listItem.length; i++) {
		listItem[i].classList.toggle("list-item-dark");
	}
	//hamburger icon
	for (let i = 0; i < hamburgerIcon.length; i++) {
		hamburgerIcon[i].classList.toggle("bg-white");
	}
	//codebox
	for (let i = 0; i < codebox.length; i++) {
		codebox[i].classList.toggle("codebox-light");
	}
	//hr tags
	for (let i = 0; i < hr.length; i++) {
		hr[i].classList.toggle("bg-black");
	}

	/*let dItem = document.body
		.getElementsByTagName("*")
		.classList()
		.contains("dm-active");
	console.log(dItem);*/
}
