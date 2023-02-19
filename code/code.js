
window.addEventListener("DOMContentLoaded", () => {
    let burgerBtn = document.querySelector(".nav-icon");
    let burgerMenu = document.querySelector(".nav");

    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("activeIcon");
        burgerMenu.classList.toggle("active")
        },
         false);
    




    window.addEventListener("scroll", () =>  {  
    let headerFixed = document.querySelector(".header-fixed");

    if(document.body.scrollTop < 10 || document.documentElement.scrollTop < 10){
        headerFixed.classList.remove("scroll");
        }

    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
    headerFixed.classList.add("scroll");
    }
    
    }, false);


    let btn = document.querySelectorAll(".btn");
    let modalX = document.querySelector(".modalX");
    let modal = document.querySelector(".modal-all");

    [...btn].forEach((element) => {
        element.addEventListener("click", () => {
            modal.classList.add("modal-active");
            
            },
             false);
    });
    
    
    modalX.addEventListener("click", () => {
        modal.classList.remove("modal-active");
        
        },
         false);



  let btnContacts = document.querySelector(".contacts");
  let blockContacts = document.getElementById("contacts");
         
 function handleButtonClick(block) {
     block.scrollIntoView({block: "start", behavior: "smooth"});
};

btnContacts.addEventListener("click", (e) => {
    e.preventDefault();
     handleButtonClick(blockContacts);
    },
     false);

let btnAdvantages = document.querySelector(".nav-advantages");
let blockAdvantages = document.getElementById("advantages");
    
btnAdvantages.addEventListener("click", (e) => {
    e.preventDefault();
     handleButtonClick(blockAdvantages);
    },
     false);

let btnExamples = document.querySelector(".nav-examples");
let blockExamples = document.getElementById("examples");
    
btnExamples.addEventListener("click", (e) => {
    e.preventDefault();
     handleButtonClick(blockExamples);
    },
     false);

let btnQuality = document.querySelector(".nav-quality");
let blockQuality = document.getElementById("quality");
         
btnQuality.addEventListener("click", (e) => {
    e.preventDefault();
     handleButtonClick(blockQuality);
    },
     false);

let btnIndividual = document.querySelector(".nav-individual");
let blockIndividual = document.getElementById("individual");
         
btnIndividual.addEventListener("click", (e) => {
    e.preventDefault();
     handleButtonClick(blockIndividual);
    },
     false);



}, false);