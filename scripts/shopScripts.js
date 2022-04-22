// console.log(document.getElementsByClassName("items").item(2).childNodes.item(0));

var dataBase = document.getElementsByClassName("items");
var active = document.getElementsByClassName("grid_Item");
var page_spot = document.getElementById("page_num");
var page = parseInt(page_spot.innerHTML);
var left = document.getElementById("left");
var right = document.getElementById("right");

let shopItem = class {
    constructor(nom, cost, gen, type, img) {
        this.nom = nom;
        this.cost = cost;
        this.gen = gen;
        this.type = type;
        this.img = img;
    }
}

var item = new Array();
var total = new Array();


//setting up the database
for (var i = 0; i <= dataBase.length - 1; i++) {
    item[i] = new shopItem(dataBase.item(i).childNodes.item(1).innerHTML, parseFloat(dataBase.item(i).childNodes.item(2).innerHTML).toFixed(2), dataBase.item(i).childNodes.item(3).innerHTML, dataBase.item(i).childNodes.item(4).innerHTML, dataBase.item(i).childNodes.item(0).outerHTML);
    total[i] = item[i];
    // console.log(item[i])
}

//default / all

for (i = 0; i <= 19; i++) {
    // console.log(active.item(i%20).childNodes.item(0));
    active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
    active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
    active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
}

left.addEventListener('click', function () {

    if (page == 1) {
        console.log("nothing")
    }
    else if (page == 2) {
        page_spot.innerHTML = "1";
        page--;
        for (i = 0; i <= 19; i++) {
            // console.log(active.item(i%20).childNodes.item(0));
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (page == 3) {
        page_spot.innerHTML = "2";
        page--;
        for (i = 20; i <= 39; i++) {
            // console.log(active.item(i%20).childNodes.item(0));
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else{
        page_spot.innerHTML = "3";
        page--;
        for (i = 40; i <= 59; i++) {
            // console.log(active.item(i%20).childNodes.item(0));
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
})

right.addEventListener('click', function (){

    if (page == 1 && item.length > 20)
    {
        page_spot.innerHTML = "2";
        page++;
        for (i = 20; i <= 39; i++) {
            // console.log(active.item(i%20).childNodes.item(0));
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (page == 2 && item.length > 40)
    {
        page_spot.innerHTML = "3";
        page++;
        for (i = 40; i <= 59; i++) {
            // console.log(active.item(i%20).childNodes.item(0));
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (page == 3 && item.length > 60)
    {
        page_spot.innerHTML = "4";
        page++;
        for (i = 60; i <= 76; i++) {
            // console.log(active.item(i%20).childNodes.item(0));
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
        for (i=77; i <= 79; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = ""
            active.item(i%20).childNodes.item(1).innerHTML = ""
            active.item(i%20).childNodes.item(2).innerHTML = ""
        }
    }
    else{
        console.log("nothing")
    }
})

var all = document.getElementById("all");
var men = document.getElementById("men");
var women = document.getElementById("women");
var both = document.getElementById("both");
var apparel = document.getElementById("app");
var accessory = document.getElementById("acc");
var place = 0;


//filtering

all.addEventListener('click', function () {

//all and all

if (both.checked)
{
    page_spot.innerHTML = "1";
    page = 1;
    for (i = 0; i <= 19; i++) {
        // console.log(active.item(i%20).childNodes.item(0));
        active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
        active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
        active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
    }

}
else if (apparel.checked)
{
    item = [];
    place = -1;
    for( i = 0; i <= total.length-1; i++)
    {
        if (total[i].type == "Apparel")
        {
            place++;
            item[place] = total[i];
        }
    }
    for (i = 0; i <= 19; i++)
    {
        active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
        active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
        active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
    }
}

});

men.addEventListener('click', function () {

    document.getElementById("test").innerHTML = "fish"

})

women.addEventListener('click', function () {

    document.getElementById("test").innerHTML = "cat"

})
