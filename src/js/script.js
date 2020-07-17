let page = window.location.hash.substr(1);
if (page === '') page = 'home';

const dynamic = document.querySelector('#dynamic-content');

function change() {
	setTimeout(()=> {
		dynamic.classList.add('fade');
	}), 400
	
  }
function removeChange(){
	setTimeout( () => {
		dynamic.classList.remove('fade')
	}, 400
		
	)
	
}


document.querySelectorAll(".link").forEach((link)=> {
	link.addEventListener("click", ()=> {
		localStorage.setItem("pageNow", page)
		page = link.getAttribute("href").substr(1)
		if (localStorage.getItem("pageNow") !== page){
			loadPage(page)
		}

	})
})

loadPage(page)

function loadPage(page) {
	change()

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState === 4) {
			const content = document.querySelector('#dynamic-content');

			if (this.status === 200) {

				if (localStorage.getItem("pageNow") === page){
					content.classList.remove('fade')
					content.innerHTML = xhttp.responseText;
					contentText = document.querySelectorAll(".text-white")
					if(localStorage.getItem("toggle")== "true"){
						whiteToDark()
					}
				} else {
					removeChange()
					setTimeout(()=> {
					content.innerHTML = xhttp.responseText;
					contentText = document.querySelectorAll(".text-white")
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
const body = document.querySelector('body')
const nav = document.querySelector("nav")
const data = document.querySelector(".toggle-logo")
const text = document.querySelectorAll(".text-white")
let contentText = ""
const content = document.querySelectorAll(".content")
const toogle = document.querySelector(".toogle")


function whiteToDark(){
	body.setAttribute("class", "dark")	
	data.setAttribute("src", "./src/assets/moon.svg")
	nav.removeAttribute("class")
	nav.setAttribute("class", "nav-dark")
	console.log(text)
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
	console.log(localStorage.getItem("toggle"))
} else {
	localStorage.setItem("toggle", "false")
	darkToWhite()
	console.log(localStorage.getItem("toogle"))
}

})

