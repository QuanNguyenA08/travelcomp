function login_main(){
    console.log("a")
    var login = document.getElementById("Login").style.top="0";
    document.body.style.overflow="hidden";
}

function login() {
    var admin = 'admin'
    var mk= '123456'
    var email = document.getElementById("email-lg").value;
    var password = document.getElementById("password-lg").value;
    if(admin == email && mk == password){
        console.log('login thanh cong')
        var login = document.getElementById("Login").style.top="-100vh";
        document.body.style.overflow="auto";
    }else{
        console.log('login that bai')
    }
    
}

function slideshow(pngsrc){
    var linkImg = pngsrc.getAttribute("src");
    var img_slide = document.getElementById("slideshow")
    img_slide.setAttribute("src", linkImg)
}




// window.onscroll = function() {myFunction()};

//     var navbar = document.getElementById("menu");
//     var sticky = navbar.offsetTop;

//     function myFunction() {
//         console.log(window.scrollY )
//     if (window.scrollY >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }