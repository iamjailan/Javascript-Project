const alertEl = document.querySelector(".alert");
const logoutBtn = document.querySelector(".logout");
const noBtn = document.getElementById("no-btn");
let timer;

logoutBtn.addEventListener("click", ()=>{
    clearTimeout(timer);
    logoutCall();
})

function logoutCall(){
    alertEl.classList.toggle("active");

  timer =  setTimeout(()=>{
        alertEl.classList.add("active");
    }, 6000)
}

noBtn.addEventListener("click", ()=>{
    alertEl.classList.add("active");
})