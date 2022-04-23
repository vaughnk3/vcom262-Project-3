var images = JSON.parse(sessionStorage.getItem("img"))
var names = JSON.parse(sessionStorage.getItem("nam"))
var costs = JSON.parse(sessionStorage.getItem("cos"))

if(images)
{
    var cartnum = images.length;
}
else{
    cartnum = 0;
}