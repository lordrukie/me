let page = window.location.hash.substr(1);
const defaultPage = window.location.hash.substr(1);
const dynamic = document.querySelector('#dynamic-content');
const isActive = document.querySelectorAll("nav ul li a")
const home = document.querySelector("nav ul li a").getAttribute("href").substr(1)
// Active Nav Function
function active(){
	isActive.forEach((active1)=> {
		if(page === active1.getAttribute("href").substr(1)) {
			if(localStorage.getItem("toggle") == "true"){
				active1.classList.add("active-dark")
				console.log("true")
			} else {
				active1.classList.add("active-white")
				console.log("false")
			}
		}
		active1.addEventListener("click", (activated)=>{
			if(localStorage.getItem("toggle") == "true"){
				active1.classList.remove("active-dark", "active-white")

			isActive.forEach((remove)=>{
				remove.classList.remove("active-dark")
			})
				active1.classList.add("active-dark")
		} else {
			active1.classList.remove("active-dark", "active-white")
			if(page === active1.getAttribute("href").substr(1)) {
				active1.classList.add("active-white")
			}
			isActive.forEach((remove)=>{
				remove.classList.remove("active-white")
			})
				active1.classList.add("active-white")
		}
	})
})
}

active()

if (page === '' || page ==="static-content" || page === "dynamic-content" || page === "body-content"){
	page = 'home';
}
document.querySelectorAll(".link").forEach((link)=> {
	link.addEventListener("click", ()=> {
		localStorage.setItem("pageNow", page) // LocalStrorage
		page = link.getAttribute("href").substr(1)
		if (localStorage.getItem("pageNow") !== page){
			loadPage(page)
		}

	})
})


loadPage(page)

function loadPage(page) {
	change()

	if(page !== "" && page !== "home"){
		isActive[0].classList.remove("active-white", "active-dark")
		console.log("bukan saya")
	} else {
		isActive[0].classList.add("active-white")
		console.log("ya, ini saya :v")
	}

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4) {
			const content = document.querySelector('#dynamic-content');
			if (this.status === 200) {

				if (localStorage.getItem("pageNow") === page){
					content.classList.remove('fade')
					content.innerHTML = xhttp.responseText;
					contentText = document.querySelectorAll(".text-white")
					inputButton = document.querySelectorAll("input.button")
					input = document.querySelectorAll(".input-val")
					if(localStorage.getItem("toggle")== "true"){
						whiteToDark()
					}
				} else {
					removeChange()
					setTimeout(()=> {
					content.innerHTML = xhttp.responseText;
					contentText = document.querySelectorAll(".text-white")
					inputButton = document.querySelectorAll("input.button")
					input = document.querySelectorAll(".input-val")
					if(page != "home"){
						location.href = "#dynamic-content"
					} else {
						location.href = "#body-content"
					}
					location.href = `#${page}`
					if(localStorage.getItem("toggle")== "true"){
						whiteToDark()
					}
				}, 340)
				}
				
				
			} else if (this.status === 404) {
				content.innerHTML = '<p  class="text-white">Halaman tidak ditemukan.</p>';
			} else {
				content.innerHTML = '<p  class="text-white">Ups.. halaman tidak dapat diakses.</p>';
			}

				
		}
	};

    xhttp.open('GET', `./src/pages/${page}.html`);
    xhttp.send();

}

// let setPage = ""
// if (page === "static-content" || "dynamic-content" || "body-content" ){
// 	setPage = "home" 
// 	console.log("tru mint")
// 	localStorage.setItem("pages", setPage)
// }
// console.log(setPage)

// Toggle Function
const body = document.querySelector('body')
const nav = document.querySelector("nav")
const data = document.querySelector(".toggle-logo")
const text = document.querySelectorAll(".text-white")
let contentText = ""
const content = document.querySelectorAll(".content")
const static = document.querySelector("#static-content")
const toogle = document.querySelector(".toogle")
let inputButton = ""
const activeted = document.querySelector("active-white", "active-dark")
let isActiveWhite = document.querySelectorAll(".active-white")
let isActiveDark = document.querySelectorAll(".active-dark")
let input = ""

function whiteToDark(){
	isActiveWhite = document.querySelectorAll(".active-white")
	body.setAttribute("class", "dark")	
	data.setAttribute("src", "./src/assets/moon.svg")
	nav.removeAttribute("class")
	nav.setAttribute("class", "nav-dark")
	static.classList.remove("border-white")
	static.classList.add("border-dark")

	input.forEach(inputAll => {
		inputAll.classList.remove("input-white")
		inputAll.classList.add("input-dark")
	})

	inputButton.forEach((btn)=> {
		btn.classList.remove("text-dark", "dark")
		btn.classList.add("text-white", "white")
	})

	text.forEach(text => {
		text.classList.remove("text-white")
		text.classList.add("text-dark")
	})
	contentText.forEach(text => {
		text.classList.remove("text-white")
		text.classList.add("text-dark")
	})
	content.forEach(contents => {
		contents.classList.remove("content-light")
		contents.classList.add("dark")
	})
	toogle.classList.remove("nav-white")
	toogle.classList.add("nav-dark")
	isActiveWhite.forEach(active => {
		active.classList.add("active-dark")

		active.classList.remove("active-white")
	})
}


function darkToWhite() {
	isActiveDark = document.querySelectorAll(".active-dark")
	body.setAttribute("class", "white")	
	data.setAttribute("src", "./src/assets/sun.svg")
	nav.removeAttribute("class")
	nav.setAttribute("class", "nav-white")
	static.classList.remove("border-dark")
	static.classList.add("border-white")

	input.forEach(inputAll => {
		inputAll.classList.remove("input-dark")
		inputAll.classList.add("input-white")
	})

	inputButton.forEach((btn)=> {
		btn.classList.remove("text-white", "white")
		btn.classList.add("text-dark", "dark")
	})

	text.forEach(text => {
		text.classList.remove("text-dark")
		text.classList.add("text-white")
	}); 
	contentText.forEach(text => {
		text.classList.remove("text-dark")
		text.classList.add("text-white")
	}); 
	content.forEach(contents => {
		contents.classList.remove("dark")
		contents.classList.add("content-light")
	});
	isActiveDark.forEach(active => {
		active.classList.add("active-white")
		active.classList.remove("active-dark")
	})
	toogle.classList.remove("nav-dark")
	toogle.classList.add("nav-white")

}



document.querySelector(".toogle").addEventListener("click", ()=> {
if(body.classList.contains("white")){
	localStorage.setItem("toggle", "true")
	whiteToDark()
} else {
	localStorage.setItem("toggle", "false")
	darkToWhite()
}

})
