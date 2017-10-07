(function(){
	let menu=document.querySelector(".nav-menu");
	let lis = menu.children;
	for( let i = 0; i<lis.length; i++){
		lis[i].addEventListener("click",navfocus,false);
	}
})();
function navfocus(e){
	 e = e || window.event;
	 var e1 = e.srcElement || e.target;
	let active = document.querySelector(".active");
	if(active){
		active.classList.remove("active");
	}
	e1.classList.add("active");
}