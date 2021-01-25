//Help from https://stackoverflow.com/questions/54637148/how-to-add-onclick-event-to-start-timer-->
// Bloom countdown script-->
// When page is loaded Help from: https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
window.onload = function() {
    document.getElementById("bloombutton").addEventListener("click", function() {
        var timeLeft = 75;

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
    });


    //Rest countdown script-->

    document.getElementById("restbutton").addEventListener("click", function() {
        var timeLeft = 10;

        downloadTimer = setInterval(function function1() {
            document.getElementById("restcountdown").innerHTML = timeLeft;

            timeLeft -= 1;
            if (timeLeft <= 4) {
                document.getElementById("restcountdown").style.color = "red";
            }
            if (timeLeft < 0) {
                clearInterval(downloadTimer);
                document.getElementById("restcountdown").innerHTML = "Great!";
            }
        }, 1000);
    });


    // Stir countdown script
    document.getElementById("waterbutton").addEventListener("click", function() {
        var timeLeft = 30;

        downloadTimer = setInterval(function function1() {
            document.getElementById("watercountdown").innerHTML = timeLeft;

            timeLeft -= 1;
            if (timeLeft <= 4) {
                document.getElementById("watercountdown").style.color = "red";
            }
            if (timeLeft < 0) {
                clearInterval(downloadTimer);
                document.getElementById("watercountdown").innerHTML = "Finished!";
            }
        }, 1000);
    });

    // Change cups for pour over
    var menu = document.getElementById("change_cups");
    menu.addEventListener("change", xcups);
    menu.addEventListener("change", xwater);
    menu.addEventListener("change", xbloom);



    // Converts grams of coffe for each cup 
    function xcups(event) {
        var gramsofcoffee = 8.5;

        if (menu.value == "2") {
            return document.getElementById("coffeeweight").innerHTML = gramsofcoffee * 2;
        } else if (menu.value == "0") {
            return document.getElementById("coffeeweight").innerHTML = "0";
        }
    }
    // Converts grams of water for each cup

    function xwater(event) {
        var gramsofwater = 100;

        if (menu.value == "2") {
            return document.getElementById("waterweight").innerHTML = gramsofwater * 2;
        } else if (menu.value == "0") {
            return document.getElementById("waterweight").innerHTML = "0";
        }
    }


    // Converts grams of water to bloom for each cup

    function xbloom(event) {
        var gramsofbloom = 25;

        if (menu.value == "2") {
            return document.getElementById("bloom").innerHTML = gramsofbloom * 2;
        } else return document.getElementById("bloom").innerHTML = "0";

    }
}