var images = JSON.parse(sessionStorage.getItem("img"))
var names = JSON.parse(sessionStorage.getItem("nam"))
var costs = JSON.parse(sessionStorage.getItem("cos"))
var places = parseInt(sessionStorage.getItem("place"))
var once = 0;


function shoppingcnt(num) {
    document.getElementById("carts").innerText = num;
}

if (images) {
    var cartnum = images.length;
    document.onload = shoppingcnt(cartnum);
}
else {
    cartnum = 0;
    document.getElementById("carts").style.display = "none";
}



function newitem(img, nom, cos) {
    //making the tag
    var tag = document.createElement("div");
    tag.classList.add("item");
    //making the image
    var image = document.createElement("span");
    image.classList.add("image");
    image.innerHTML = img;
    tag.appendChild(image);
    //making the name
    var nombre = document.createElement("span");
    nombre.classList.add("name");
    nombre.innerHTML = nom;
    tag.appendChild(nombre);
    //making the cost
    var cost = document.createElement("span");
    cost.classList.add("cost");
    cost.innerHTML = cos;
    tag.appendChild(cost);
    //making the remove button
    var remove = document.createElement("span");
    remove.classList.add("remove");
    remove.textContent = "Remove from Cart"
    tag.appendChild(remove);
    document.getElementById("item_List").insertBefore(tag, document.getElementById("item_List").childNodes.item(1));


    var removal = document.getElementsByClassName("remove")
    var rem_Tag = document.querySelectorAll(".item")

    var removalARR = Array.prototype.slice.call(removal);
    var scoutARR = images.length -1;
    console.log(scoutARR)

    removalARR.forEach(removes => {
        removes.addEventListener('click', function update(event) {
            if (event.timeStamp == once) {
                //nothing
            }
            else {


                console.log(removalARR.length)
                console.log(scoutARR)
                if (scoutARR >= removalARR.length)
                {
                    console.log("pringus")
                    var remove_check = removalARR.length - 1;
                }
                else
                {
                    console.log("bringus")
                    var remove_check = scoutARR;
                }
                console.log("remove_check:" + remove_check);
                var mover = cartnum - 1;
                for (i = mover; i >= remove_check; i--) {
                    if (i == remove_check) {
                        images.splice(i, 1);
                        names.splice(i, 1);
                        costs.splice(i, 1);
                        scoutARR = scoutARR - 1;
                        console.log(scoutARR);
                    }
                }
                rem_Tag.item(0).remove();
                places = places - 1;

                sessionStorage.setItem("img", JSON.stringify(images));
                sessionStorage.setItem("nam", JSON.stringify(names));
                sessionStorage.setItem("cos", JSON.stringify(costs));
                sessionStorage.setItem("place", places);
                cartnum = images.length;
                shoppingcnt(cartnum);
                once = event.timeStamp;
                location.reload();
            }
        });
    });
}
var sum = 0;

function funny() {
    for (var i = 0; i < cartnum; i++) {
        newitem(images[i], names[i], costs[i]);
        sum += parseFloat(costs[i]);
    }
    document.getElementById("money").innerHTML = sum.toFixed(2);
}
