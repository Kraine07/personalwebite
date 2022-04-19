const modalButton = document.getElementById("modal_btn");
const closeButton = document.getElementById("close_btn");
const modal = document.getElementsByClassName("modal")[0];


modalButton.onclick = function(){
    modal.style.display = "block";
}

closeButton.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.oncontextmenu = function(){
    return false;
}