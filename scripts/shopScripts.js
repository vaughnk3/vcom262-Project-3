var dataBase = document.getElementsByClassName("items");
var active = document.getElementsByClassName("grid_Item");
var page_spot = document.getElementById("page_num");
var page = parseInt(page_spot.innerHTML);
var left = document.getElementById("left");
var right = document.getElementById("right");
const shop_Button = document.querySelectorAll(".cart")

var shop_ButtonARR = Array.prototype.slice.call(shop_Button);


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
var first = new Array();

//setting up the database
for (var i = 0; i <= dataBase.length - 1; i++) {
    item[i] = new shopItem(dataBase.item(i).childNodes.item(1).innerHTML, parseFloat(dataBase.item(i).childNodes.item(2).innerHTML).toFixed(2), dataBase.item(i).childNodes.item(3).innerHTML, dataBase.item(i).childNodes.item(4).innerHTML, dataBase.item(i).childNodes.item(0).outerHTML);
    total[i] = item[i];
}

//default / all

for (i = 0; i <= 19; i++) {
    active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
    active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
    active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
}

left.addEventListener('click', function () {

    if (page == 1) {
    }
    else if (page == 2) {
        page_spot.innerHTML = "1";
        page--;
        for (i = 0; i <= 19; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (page == 3) {
        page_spot.innerHTML = "2";
        page--;
        for (i = 20; i <= 39; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else{
        page_spot.innerHTML = "3";
        page--;
        for (i = 40; i <= 59; i++) {
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
        if (item.length < 40)
        {
            for (i = item.length; i <= 39; i++)
            {
                item[i] = new shopItem("","","","","");
            }
        }
        for (i = 20; i <= 39; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
            if(item[i].nom == "")
            {
                active.item(i%20).childNodes.item(3).style.display = "none";
            }
        }
    }
    else if (page == 2 && item.length > 40)
    {
        page_spot.innerHTML = "3";
        page++;
        if (item.length < 60)
        {
            for (i = item.length; i <= 59; i++)
            {
                item[i] = new shopItem("","","","","");
            }
        }
        for (i = 40; i <= 59; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
            if(item[i].nom == "")
            {
                active.item(i%20).childNodes.item(3).style.display = "none";
            }
        }
    }
    else if (page == 3 && item.length > 60)
    {
        page_spot.innerHTML = "4";
        page++;
        if (item.length < 80)
        {
            for (i = item.length; i <= 79; i++)
            {
                item[i] = new shopItem("","","","","");
            }
        }
        for (i = 60; i <= 79; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
            if(item[i].nom == "")
            {
                active.item(i%20).childNodes.item(3).style.display = "none";
            }
        }
    }
    else{
    }
})

var all = document.getElementById("all");
var men = document.getElementById("men");
var women = document.getElementById("women");
var both = document.getElementById("both");
var apparel = document.getElementById("app");
var accessory = document.getElementById("acc");
var form = document.getElementById("form");
var place = 0;


//filtering

form.addEventListener('click', function () {

//all
if(all.checked){
    if (both.checked)
    {
        for (i = 0; i<=total.length-1; i++)
        {
            item[i] = total[i];
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++) {
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
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (accessory.checked)
    {
        item = [];
        place = -1;
        for( i = 0; i <= total.length-1; i++)
        {
            if (total[i].type == "Accessory")
            {
                place++;
                item[place] = total[i];
            }
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
}
// men
else if(men.checked)
{
    first = [];
    place = -1;

    for (i = 0; i <= total.length-1; i++)
    {
        if (total[i].gen == "M" || total[i].gen == "N")
            {
                place++;
                first[place] = total[i];
            }
    }

    if (both.checked)
    {
        item = [];
        for (i = 0; i<=first.length-1; i++)
        {
            item[i] = first[i];
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }

    }
    else if (apparel.checked)
    {
        item = [];
        place = -1;
        for( i = 0; i <= first.length-1; i++)
        {
            if (first[i].type == "Apparel")
            {
                place++;
                item[place] = first[i];
            }
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (accessory.checked)
    {
        item = [];
        place = -1;
        for( i = 0; i <= first.length-1; i++)
        {
            if (first[i].type == "Accessory")
            {
                place++;
                item[place] = first[i];
            }
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
}

// woman
else if(women.checked)
{
    first = [];
    place = -1;

    for (i = 0; i <= total.length-1; i++)
    {
        if (total[i].gen == "F" || total[i].gen == "N")
            {
                place++;
                first[place] = total[i];
            }
    }

    if (both.checked)
    {
        for (i = 0; i<=first.length; i++)
        {
            item[i] = first[i];
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++) {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }

    }
    else if (apparel.checked)
    {
        item = [];
        place = -1;
        for( i = 0; i <= first.length-1; i++)
        {
            if (first[i].type == "Apparel")
            {
                place++;
                item[place] = first[i];
            }
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
    else if (accessory.checked)
    {
        item = [];
        place = -1;
        for( i = 0; i <= first.length-1; i++)
        {
            if (first[i].type == "Accessory")
            {
                place++;
                item[place] = first[i];
            }
        }
        page_spot.innerHTML = "1";
        page = 1;
        for (i = 0; i <= 19; i++)
        {
            active.item(i%20).childNodes.item(0).innerHTML = item[i].img;
            active.item(i%20).childNodes.item(1).innerHTML = item[i].nom;
            active.item(i%20).childNodes.item(2).innerHTML = item[i].cost;
        }
    }
}
});

if (!sessionStorage.getItem("img"))
{
    var send_img = new Array();
    var send_name = new Array();
    var send_cost = new Array();
    var cart_place = -1;
}
else
{
    var send_img = JSON.parse(sessionStorage.getItem("img"))
    var send_name = JSON.parse(sessionStorage.getItem("nam"))
    var send_cost = JSON.parse(sessionStorage.getItem("cos"))
    var cart_place = parseInt(sessionStorage.getItem("place"))
}


// adding things to the cart
shop_Button.forEach(cart => {

    cart.addEventListener('click', function shop_Click(event){

        cart.innerHTML = "Added to cart!";
        var shop_Check = shop_ButtonARR.indexOf(cart);
        var checksum = (page-1) * 20

        for(i = 0; i <= item.length-1; i++)
        {
            if (i == shop_Check + checksum)
            {
                cart_place++;
                send_img[cart_place] = item[i].img.toString();
                send_name[cart_place] = item[i].nom.toString();
                send_cost[cart_place] = item[i].cost.toString();
            }
        }
        document.getElementById("carts").innerHTML = send_img.length;
        if (document.getElementById("carts").style.display == "none")
        {
            document.getElementById("carts").style.display = "block"
        }

        sessionStorage.setItem("img",JSON.stringify(send_img));
        sessionStorage.setItem("nam",JSON.stringify(send_name));
        sessionStorage.setItem("cos",JSON.stringify(send_cost));
        sessionStorage.setItem("place",cart_place);
    });
})