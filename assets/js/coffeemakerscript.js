//Help from https://stackoverflow.com/questions/54637148/how-to-add-onclick-event-to-start-timer-->
// When page is loaded Help from: https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
// Change cups for pour over
window.onload = function() {
    var menu = document.getElementById("change_cups");
    menu.addEventListener("change", xcups);
    menu.addEventListener("change", xwater);


    // Converts grams of coffe for each cup 
    function xcups(event) {
        var gramsofcoffee = 12;

        if (menu.value == "2") {
            return document.getElementById("coffeeweight").innerHTML = gramsofcoffee * 2;
        } else if (menu.value == "3") {
            return document.getElementById("coffeeweight").innerHTML = gramsofcoffee * 3;
        } else if (menu.value == "4") {
            return document.getElementById("coffeeweight").innerHTML = gramsofcoffee * 4;
        } else if (menu.value == "5") {
            return document.getElementById("coffeeweight").innerHTML = gramsofcoffee * 5;
        } else if (menu.value == "6") {
            return document.getElementById("coffeeweight").innerHTML = gramsofcoffee * 6;
        } else if (menu.value == "0") {
            return document.getElementById("coffeeweight").innerHTML = "0"
        }
    }
    // Converts grams of water for each cup

    function xwater(event) {
        var gramsofwater = 200;

        if (menu.value == "2") {
            return document.getElementById("waterweight").innerHTML = gramsofwater * 2;
        } else if (menu.value == "3") {
            return document.getElementById("waterweight").innerHTML = gramsofwater * 3;
        } else if (menu.value == "4") {
            return document.getElementById("waterweight").innerHTML = gramsofwater * 4;
        } else if (menu.value == "5") {
            return document.getElementById("waterweight").innerHTML = gramsofwater * 5;
        } else if (menu.value == "6") {
            return document.getElementById("waterweight").innerHTML = gramsofwater * 6;
        } else if (menu.value == "0") {
            return document.getElementById("waterweight").innerHTML = "0";
        }
    }
};