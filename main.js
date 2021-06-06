
document.getElementById("textAway").addEventListener("click", disText);

function disText() {
    document.getElementById("text").classList.toggle("disappear")
}
document.getElementById("buttonAway").addEventListener("click", disButton);

function disButton() {
    this.classList.add("disappear");   
    setTimeout(function() {document.getElementById("buttonAway").classList.remove("disappear");} , 1000);
}
document.getElementById("mainmenu").addEventListener("click", disList);

function disList () {
    var liList = document.getElementsByTagName("li");
    for(var i = 0; i<liList.length; i++) {
        liList[i].classList.toggle("disappear")
    }
}