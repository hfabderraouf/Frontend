const singinbtn= document.getElementById("singinbtn") ; 
const singupform= document.getElementById("signupform") ;


const singupbtn= document.getElementById("singupbtn") ; 
const singinform= document.getElementById("signinform") ; 

singupbtn.addEventListener('click', function(){
    singinform.style.display="none";
     singupform.style.display="block";
})

singinbtn.addEventListener('click', function(){
    singupform.style.display="none";
     singinform.style.display="block";
})
