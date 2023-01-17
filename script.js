
// for the responsive navbar
const hamburger = document.querySelector(".hamburger");
const menuLeft = document.querySelector(".menu-left");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuLeft.classList.toggle("active");
})

// script for the tabs
function tabs(evt, tabsName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabsName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// to show the filter-item-title content 
const buttons = document.querySelectorAll('button');
buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
// to show the filter-items
const filter = document.querySelector('filter-btn');
 filter.addEventListener('click', () =>{
    const filtreArea = filter.nextElementSibling;
    filtreArea.classList.toggle('show');
 }
)





