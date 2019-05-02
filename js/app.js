
var modal = document.getElementById('myModal');


// When the user clicks on the button, open the modal
function openModal(){
	modal.style.display = "block";
}

function closeModal(){
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal()
  }
} 

