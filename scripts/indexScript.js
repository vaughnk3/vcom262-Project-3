let width = screen.width;

function scrollFunctionMac() {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        document.getElementById("overImgCriterium").style.fontSize="9rem";
        document.getElementById("overImgCriterium").style.marginTop="-1%";
        document.getElementById("overImgCriterium").style.marginLeft="2%";


    }
    else {
        document.getElementById("overImgCriterium").style.fontSize="13rem";
        document.getElementById("overImgCriterium").style.marginTop="-20%";
        document.getElementById("overImgCriterium").style.marginLeft="10%";


    }
}

function loadFunctionMac() {
    document.getElementById("overImgCriterium").style.fontSize="13rem";
    document.getElementById("overImgCriterium").style.marginTop="-20%";
    document.getElementById("overImgCriterium").style.marginLeft="10%";
    document.getElementById("overImgCriterium").style.animation="none";
}

function scrollFunctionWindows() {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        document.getElementById("overImgCriterium").style.fontSize="9rem";
        document.getElementById("overImgCriterium").style.marginTop="-1%";
        document.getElementById("overImgCriterium").style.marginLeft="2%";


    }
    else {
        document.getElementById("overImgCriterium").style.fontSize="13rem";
        document.getElementById("overImgCriterium").style.marginTop="-20%";
        document.getElementById("overImgCriterium").style.marginLeft="10%";


    }
}

function loadFunctionWindows() {
    document.getElementById("overImgCriterium").style.fontSize="13rem";
    document.getElementById("overImgCriterium").style.marginTop="-20%";
    document.getElementById("overImgCriterium").style.marginLeft="10%";
    document.getElementById("overImgCriterium").style.animation="none";
}


window.onscroll = function () {scrollFunctionMac()};
window.onload = function () {loadFunctionMac()};