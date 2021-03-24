var modal = document.getElementById('popup');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}