//Show button to switch to light mode
document.addEventListener("DOMContentLoaded", function(){
document.querySelector(".Light-Dark-Switcher-Night").classList.add("Button-Hidden-Night")});
//Toggle Night mode classes off on page load
document.querySelector(".Body-Night").classList.toggle("Body-Night");
document.querySelector(".Navigation-Night").classList.toggle("Navigation-Night");
document.querySelector(".Title-Card-Night").classList.toggle("Title-Card-Night");
document.querySelector(".Main-4-Image-Panel-Night").classList.toggle("Main-4-Image-Panel-Night");
document.querySelector(".Footer-Night").classList.toggle("Footer-Night");

//Function for switching to night mode
const turnItNight = document.querySelector(".Light-Dark-Switcher-Day");
turnItNight.addEventListener("click",switchToNight);
function switchToNight(){
    //Swap out all the day classes for night classes
    document.querySelector(".Body-Day").classList.toggle("Body-Night");
    document.querySelector(".Body-Day").classList.toggle("Body-Day");
    document.querySelector(".Navigation-Day").classList.toggle("Navigation-Night");
    document.querySelector(".Navigation-Day").classList.toggle("Navigation-Day");
    document.querySelector(".Title-Card-Day").classList.toggle("Title-Card-Night");
    document.querySelector(".Title-Card-Day").classList.toggle("Title-Card-Day");
    document.querySelector(".Main-4-Image-Panel-Day").classList.toggle("Main-4-Image-Panel-Night");
    document.querySelector(".Main-4-Image-Panel-Day").classList.toggle("Main-4-Image-Panel-Day");
    document.querySelector(".Footer-Day").classList.toggle("Footer-Night");
    document.querySelector(".Footer-Day").classList.toggle("Footer-Day");
    //Finally, swap the buttons
    document.querySelector(".Light-Dark-Switcher-Day").classList.add("Button-Hidden-Day");
    document.querySelector(".Light-Dark-Switcher-Night").classList.remove("Button-Hidden-Night");
}

//Function for switching to Day mode
const turnItDay = document.querySelector(".Light-Dark-Switcher-Night");
turnItDay.addEventListener("click",switchToDay);
function switchToDay(){
    //Swap out all the day classes for night classes
    document.querySelector(".Body-Night").classList.toggle("Body-Day");
    document.querySelector(".Body-Night").classList.toggle("Body-Night");
    document.querySelector(".Navigation-Night").classList.toggle("Navigation-Day");
    document.querySelector(".Navigation-Night").classList.toggle("Navigation-Night");
    document.querySelector(".Title-Card-Night").classList.toggle("Title-Card-Day");
    document.querySelector(".Title-Card-Night").classList.toggle("Title-Card-Night");
    document.querySelector(".Main-4-Image-Panel-Night").classList.toggle("Main-4-Image-Panel-Day");
    document.querySelector(".Main-4-Image-Panel-Night").classList.toggle("Main-4-Image-Panel-Night");
    document.querySelector(".Footer-Night").classList.toggle("Footer-Day");
    document.querySelector(".Footer-Night").classList.toggle("Footer-Night");
    //Finally, swap the buttons
    document.querySelector(".Light-Dark-Switcher-Night").classList.add("Button-Hidden-Night");
    document.querySelector(".Light-Dark-Switcher-Day").classList.remove("Button-Hidden-Day");
}