console.log(document.getElementsByClassName("ginko").children.item(0).innerHTML);

let shopItem = class{
    constructor(nom,cost,gen,type,img)
    {
        this.nom = nom;
        this.cost = cost;
        this.gen = gen;
        this.type = type;
        this.img = img;
    }
}

// const dog = new shopItem(document.getElementById("brungus").children.item(1).innerHTML, document.getElementById("brungus").children.item(2).innerHTML);

// console.log(dog.nom);
// console.log(dog.cost);

// var frog = new Array(5);

// frog[1] = new shopItem(document.getElementById("brungus").children.item(1).innerHTML, document.getElementById("brungus").children.item(2).innerHTML);

// console.log(frog[1].nom);
// console.log(document.getElementById("brungus").firstElementChild);