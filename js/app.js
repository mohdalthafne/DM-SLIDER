let menuBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    menuBar.classList.toggle('show');
}

window.onscroll = () =>{
    menuBar.classList.remove('show')
}

let menuLink = document.querySelectorAll('.menu_link');

function linkAction(){
    menuLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active')
    menuBar.classList.remove('show');
}

menuLink.forEach(n => n.addEventListener('click', linkAction));

const typing = document.querySelector('.second-txt');

const textLoaad = () =>{
    setTimeout(() =>{
        typing.textContent = "UI/UX Designing";
    }, 0);
    setTimeout(() =>{
        typing.textContent = "Web Developing";
    }, 4000);
    setTimeout(() =>{
        typing.textContent = "Web Designing";
    }, 8000);
    setTimeout(() =>{
        typing.textContent = "App Developing";
    }, 12000);
} 

textLoaad();
setInterval(textLoaad, 16000);

function loader(){
    document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
    setInterval(loader, 2000);
}

window.onload = fadeOut;

var themeBtn = document.getElementById('theme-btn-mon');


themeBtn.onclick = function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        themeBtn.className = "fa-solid fa-sun";
        localStorage.setItem("theme" , "light");
    }else{
        themeBtn.className = "fa-solid fa-moon";
        localStorage.setItem("theme", "light"); 
    }
}