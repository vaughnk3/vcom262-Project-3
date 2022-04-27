let width = screen.width;


// Mac

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




// Windows

function scrollFunctionWindows() {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        document.getElementById("overImgCriterium").style.fontSize="8.5rem";
        document.getElementById("overImgCriterium").style.marginTop="-1%";
        document.getElementById("overImgCriterium").style.marginLeft="2%";

        document.getElementById("headerLinks").style.paddingTop="8%";


    }
    else {
        document.getElementById("overImgCriterium").style.fontSize="11rem";
        document.getElementById("overImgCriterium").style.marginTop="-20%";
        document.getElementById("overImgCriterium").style.marginLeft="10%";

        document.getElementById("headerLinks").style.paddingTop="4.5%";


    }
}

function loadFunctionWindows() {
    document.getElementById("overImgCriterium").style.fontSize="11rem";
    document.getElementById("overImgCriterium").style.marginTop="-20%";
    document.getElementById("overImgCriterium").style.marginLeft="10%";
    document.getElementById("overImgCriterium").style.animation="none";

    document.getElementById("headerLinks").style.paddingTop="4.5%";
}

// Tablet 

function scrollFunctionTablet () {
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
        document.getElementById("overImgCriterium").style.fontSize="8.5rem";
        document.getElementById("overImgCriterium").style.marginTop="-1%";
        document.getElementById("overImgCriterium").style.marginLeft="2%";

        document.getElementById("headerLinks").style.paddingTop="8%";


    }
    else {
        document.getElementById("overImgCriterium").style.fontSize="11rem";
        document.getElementById("overImgCriterium").style.marginTop="-20%";
        document.getElementById("overImgCriterium").style.marginLeft="10%";

        document.getElementById("headerLinks").style.paddingTop="4.5%";


    }
}

function loadFunctionWindows() {
    document.getElementById("overImgCriterium").style.fontSize="11rem";
    document.getElementById("overImgCriterium").style.marginTop="-20%";
    document.getElementById("overImgCriterium").style.marginLeft="10%";
    document.getElementById("overImgCriterium").style.animation="none";

    document.getElementById("headerLinks").style.paddingTop="4.5%";
}

if (width >= 2560) {
    window.onscroll = function () {scrollFunctionMac()};
    window.onload = function () {loadFunctionMac()};
}

else if (width <= 1920 && width >= 1260) {
    window.onscroll = function () {scrollFunctionWindows()};
    window.onload = function () {loadFunctionWindows()};

}


