//For start timer fucntion, help from https://stackoverflow.com/questions/54637148/how-to-add-onclick-event-to-start-timer-->
// Bloom countdown script-->
// When page is loaded Help from: https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
window.onload = function() {
    document.getElementById("bloombutton").addEventListener("click", function() {
        var timeLeft = 15;

        downloadTimer = setInterval(function function1() {
            document.getElementById("bloomcountdown").innerHTML = timeLeft;

            timeLeft -= 1;
            if (timeLeft <= 4) {
                document.getElementById("bloomcountdown").style.color = "red";
            }
            if (timeLeft < 0) {
                clearInterval(downloadTimer);
                document.getElementById("bloomcountdown").innerHTML = "Perfect!";
            }
        }, 1000);
        console.log(bloomcountdown);
    });


    //Rest countdown script-->

    document.getElementById("restbutton").addEventListener("click", function() {
        var timeLeft = 30;

        downloadTimer = setInterval(function function1() {
            document.getElementById("restcountdown").innerHTML = timeLeft;

            timeLeft -= 1;
            if (timeLeft <= 4) {
                document.getElementById("restcountdown").style.color = "red";
            }
            if (timeLeft < 0) {
                clearInterval(downloadTimer);
                document.getElementById("restcountdown").innerHTML = "Done";
            }
        }, 1000);
        console.log(bloomcountdown);
    });


    // Stir countdown script
    document.getElementById("waterbutton").addEventListener("click", function() {
        var timeLeft = 120;

        downloadTimer = setInterval(function function1() {
            document.getElementById("watercountdown").innerHTML = timeLeft;

            timeLeft -= 1;
            if (timeLeft <= 4) {
                document.getElementById("watercountdown").style.color = "red";
            }
            if (timeLeft < 0) {
                clearInterval(downloadTimer);
                document.getElementById("watercountdown").innerHTML = "Done";
            }
        }, 1000);
        console.log(watercountdown);
    });

    // Change cups for pour over
    var menu = document.getElementById("change_cups");
    menu.addEventListener("change", xcups);
    menu.addEventListener("change", xwater);
    menu.addEventListener("change", xbloom);


    // Converts grams of coffe for each cup 
    function xcups(event) {
        var gramsofcoffee = 11;

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
            return document.getElementById("coffeeweight").innerHTML = "0";
        }
    }
    // Converts grams of water for each cup

    function xwater(event) {
        var gramsofwater = 163;

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

    // Converts grams of water to bloom for each cup

    function xbloom(event) {
        var gramsofbloom = 11;

        if (menu.value == "2") {
            return document.getElementById("bloom").innerHTML = gramsofbloom * 2;
        } else if (menu.value == "3") {
            return document.getElementById("bloom").innerHTML = gramsofbloom * 3;
        } else if (menu.value == "4") {
            return document.getElementById("bloom").innerHTML = gramsofbloom * 4;
        } else if (menu.value == "5") {
            return document.getElementById("bloom").innerHTML = gramsofbloom * 5;
        } else if (menu.value == "6") {
            return document.getElementById("bloom").innerHTML = gramsofbloom * 6;
        } else if (menu.value == "0") {
            return document.getElementById("bloom").innerHTML = "0";
        }
    }

};