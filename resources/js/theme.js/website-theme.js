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
	let table = document.querySelectorAll('table.dm-active')
	let text = document.querySelectorAll('.text-dm-active')

	//body
	body.classList.toggle("dark-mode");

	let iterator = (target, className, optionalLine) =>{
		for(let i = 0; i < target.length; i++) {
			target[i].classList.toggle(className);
			optionalLine
		}
	}

	//body.classList.toggle(currTheme);
	//cards
	iterator(card,'card-dark')
	//any items to trigger dark mode
	iterator(darkItem,'card-dark')
	//any items to trigger darker mode
	iterator(darkerItem,'light-black')
	//dark pagination
	iterator(pagination,'pg-dark')
	//change color of svg's
	iterator(svg,'svg-fill-black')
	iterator(darkText,'text-black')
	//list item
	iterator(listItem,'list-item-dark')
	//hamburger icon
	iterator(hamburgerIcon,'bg-white')
	//codebox
	iterator(codebox,'codebox-light')
	//hr tags
	iterator(hr,'bg-black')
	//tables
	iterator(table,'table-dark')
	//text
	iterator(text,'text-black', iterator(text,'text-primary'))
	
	

	/*let dItem = document.body
		.getElementsByTagName("*")
		.classList()
		.contains("dm-active");
	console.log(dItem);*/
}
