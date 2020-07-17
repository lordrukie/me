// Gunanya untuk menambaahkan dan menghapus class active ke navbar yang sesuai
isActive.forEach((active1)=> {
	if(page == active1.getAttribute("href").substr(1)) {
		active1.classList.add("active")
		
	}
	active1.addEventListener("click", ()=>{
		isActive.forEach((remove)=>{
		remove.classList.remove("active")
	})
	active1.classList.add("active")
	})

})