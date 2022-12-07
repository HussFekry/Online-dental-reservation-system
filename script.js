let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


//payment stripe frontend

const stripe=stripe("pk_test_51KHw2nJlt27XPt2lB93gxRvuyjvJ41pTGSHSUXSzFfIfFqC7qTR7WMwCXljqcMEXbRTADVKbg66398jMLtblZDW3004kcgKc22")
const btn = document.querySelector('#pbtn')
btn.addEventListener('click', ()=>{
	fetch('/checkout.php',{
		method: "POST",
		headers:{
			'content-type' : 'application/json',
		},
		body: JSON.Stringify({})
	}).then(res=> res.json())
	.then(payload=>{
		stripe. redirectToCheckout ({sessiodID: payload.id})
	})
})

//password toggle

