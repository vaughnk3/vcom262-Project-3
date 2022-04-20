var rb = document.getElementById("rb");
var mb = document.getElementById("mb");
var cb = document.getElementById("cb");
var bm = document.getElementById("bm");
var a = document.getElementById("a");
var rbi = document.getElementById("rbi");
var mbi = document.getElementById("mbi");
var cbi = document.getElementById("cbi");
var bmi = document.getElementById("bmi");
var ai = document.getElementById("ai");
var me = document.getElementById("me");


function change (funny){
    me.innerHTML = funny.innerHTML;
}

change(rbi);

rb.addEventListener('click', function(){

    change(rbi);

});

mb.addEventListener('click', function(){

    change(mbi);

});

cb.addEventListener('click', function(){

    change(cbi);

});

bm.addEventListener('click', function(){

    change(bmi);

});

a.addEventListener('click', function(){

    change(ai);

});