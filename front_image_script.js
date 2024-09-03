var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}
// navbar togglemenu end

// slider
var counter = 1;
        setInterval(function(){
        document.getElementById("radio" + counter).checked = true;
        counter++;
            if(counter > 3){
            counter = 1;
            }
        }, 5000); 