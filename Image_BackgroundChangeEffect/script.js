var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var image = document.getElementById("image");
var line = document.getElementById("line");

image.style.width = imgBox.offsetWidth + "px";

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}