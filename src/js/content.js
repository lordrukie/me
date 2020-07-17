let page = window.location.hash.substr(1);
const dynamic = document.querySelector('#dynamic-content');
const isActive = document.querySelectorAll("nav ul li a")

if (page === '' || "dynamic-content") page = 'home';
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
					if(localStorage.getItem("toggle")== "true"){
						whiteToDark()
					}
				} else {
					removeChange()
					setTimeout(()=> {
					content.innerHTML = xhttp.responseText;
					contentText = document.querySelectorAll(".text-white")
					inputButton = document.querySelectorAll("input.button")
					location.href = "#dynamic-content"
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


