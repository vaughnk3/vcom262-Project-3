let width = screen.width;

function scrollFunctionWindows() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 90) {
        document.getElementById("regularCriterium").style.fontSize="7.5rem";
        document.getElementById("regularCriterium").style.marginTop="0%";
        document.getElementById("regularCriterium").style.marginLeft="2%";
        document.getElementById("headerLinks").style.paddingTop="3%";
        document.getElementById("headerLinks").style.marginLeft="28%";
        document.getElementById('navBar').style.height="200px";


    }
    else {
        document.getElementById("regularCriterium").style.fontSize="8.5rem";
        document.getElementById("regularCriterium").style.marginTop="1%";
        document.getElementById("regularCriterium").style.marginLeft="3%";
        document.getElementById("headerLinks").style.paddingTop="4.5%";
        document.getElementById("headerLinks").style.marginLeft="32%";
        document.getElementById('navBar').style.height="250px";


    }
}

function loadFunctionWindows() {
    document.getElementById("regularCriterium").style.fontSize="8.5rem";
    document.getElementById("regularCriterium").style.marginTop="1%";
    document.getElementById("regularCriterium").style.marginLeft="3%";
    document.getElementById("headerLinks").style.paddingTop="4.5%";
    document.getElementById("headerLinks").style.marginLeft="32%";
    document.getElementById('navBar').style.height="250px";
}

if (width >= 2560) {
    window.onscroll = function () {scrollFunctionMac()};
    window.onload = function () {loadFunctionMac()};
}

else if (width <= 1920 && width >= 900) {
    window.onscroll = function () {scrollFunctionWindows()};
    window.onload = function () {loadFunctionWindows()};

}

else {
    window.onscroll = function () {scrollFunctionMobile()};
}
