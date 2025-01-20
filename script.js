const getElement = function(selector){
    const element = document.querySelector(selector);
    if(element)return element
    throw Error(`check your class name, there is no ${selector} class`)
}

const links = getElement(".nav-links")
const navBtnDom = getElement(".nav-btn")
navBtnDom.addEventListener("click", function(){
    links.classList.toggle("show-links")
})

const date = getElement("#date")
const currebtYear = new Date().getFullYear();
date.textContent = currebtYear