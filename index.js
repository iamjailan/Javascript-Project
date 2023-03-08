const navbarDate = document.getElementById("navbar-date");


function updateDate(){
    let date = new Date().toLocaleTimeString();
    navbarDate.textContent = date

    setTimeout(function(){
        updateDate()
    },1000)
}
updateDate()
