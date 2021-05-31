let designedBy = document.getElementById("designed-by")
let myFace = document.getElementById("my-face");

designedBy.onclick = function() {
    alert("Proofed by Hannah!")
}


myFace.onclick = function() {
    openNav();
    setTimeout(() => {  closeNav(); }, 800);

}

function openNav() {
    document.getElementById("easter-egg").style.display = "block";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("easter-egg").style.display = "none";
  }