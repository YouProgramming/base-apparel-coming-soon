let formElement = document.getElementsByTagName("form");
function changeImageDependingOnScreenSize(){
    let size = window.matchMedia("(max-width:375px)");
    if(size.matches){
        document.querySelector(".logo-image").src = "images/hero-mobile.jpg";
    }
}
formElement[0].addEventListener("submit",function(e){
    let element = document.querySelector(".email-input").value;
    console.log(element);
    let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    if(reg.test(element)){
        console.log("valid");
        displayErrorMessage(false);
    }else{
        console.log("not valid");
        displayErrorMessage(true);
    }
    e.preventDefault();
});
function displayErrorMessage(bool){
    if(bool)
        document.querySelector(".error-message").style.display = "inline";
    else
        document.querySelector(".error-message").style.display = "none";
}
changeImageDependingOnScreenSize();
