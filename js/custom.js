var btnMenu = document.getElementById("btn-menu");
btnMenu.addEventListener("click", toggleMenu);


function toggleMenu(event) {
    
    var divContent= document.getElementById("content");

    var eventTarget = event.target;
    
    if( eventTarget.className == "btn-open" ) {
        divContent.style.opacity = 1;
        eventTarget.className = "btn-close";
        
    } else if ( eventTarget.className == "btn-close") {
        divContent.style.opacity = 0;
        eventTarget.className = "btn-open";
    }
    
}















