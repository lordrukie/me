const body = document.querySelector('body')
const nav = document.querySelector("nav")
const data = document.querySelector(".toggle-logo")
const text = document.querySelectorAll(".text-white")
let contentText = ""
const content = document.querySelectorAll(".content")
const static = document.querySelector("#static-content")
const toogle = document.querySelector(".toogle")
let inputButton = ""

function whiteToDark(){
	body.setAttribute("class", "dark")	
	data.setAttribute("src", "./src/assets/moon.svg")
	nav.removeAttribute("class")
	nav.setAttribute("class", "nav-dark")
	static.classList.remove("border-white")
	static.classList.add("border-dark")

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
}


function darkToWhite() {
	body.setAttribute("class", "white")	
	data.setAttribute("src", "./src/assets/sun.svg")
	nav.removeAttribute("class")
	nav.setAttribute("class", "nav-white")
	static.classList.remove("border-dark")
	static.classList.add("border-white")

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