//window.alert("Welcome to Isabel's Website!");

var imagea = "login.png";
var imageb = "snow.png";

function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("snow")) {
        image.src = "login.png";
    } else {
        image.src = "snow.png";
    }
}

function increaseImageSize() {
    var image = document.getElementById('hawaii');
    image.width = '300px';
    console.log("I'M GONE!!!")
}

function decreaseImageSize() {
    var image = document.getElementById('hawaii');
    image.width = '1000px';
}
