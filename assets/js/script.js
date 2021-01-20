//Help from https://stackoverflow.com/questions/54637148/how-to-add-onclick-event-to-start-timer-->
// Bloom countdown script-->
// When page is loaded Help from: https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
window.onload=function(){
document.getElementById("bloombutton").addEventListener("click", function(){
    var timeLeft = 15;

    downloadTimer = setInterval(function function1(){
        document.getElementById("bloomcountdown").innerHTML = timeLeft ;

        timeLeft -=1;
         if(timeLeft <=4) {
            document.getElementById("bloomcountdown").style.color = "red";
        }
        if(timeLeft <=0) {
            clearInterval(downloadTimer);
            document.getElementById("bloomcountdown").innerHTML = "Stop!"
        }
    }, 1000);
    console.log(bloomcountdown);
});


//Rest countdown script-->

document.getElementById("restbutton").addEventListener("click", function(){
    var timeLeft = 30;

    downloadTimer = setInterval(function function1(){
        document.getElementById("restcountdown").innerHTML = timeLeft ;

        timeLeft -=1;
        if(timeLeft <=4) {
            document.getElementById("restcountdown").style.color = "red";
        }
         if(timeLeft <=0) {
            clearInterval(downloadTimer);
            document.getElementById("restcountdown").innerHTML = "Done"
        }
    }, 1000);
    console.log(bloomcountdown);
});


// Stir countdown script
document.getElementById("waterbutton").addEventListener("click", function(){
    var timeLeft = 120;

    downloadTimer = setInterval(function function1(){
        document.getElementById("watercountdown").innerHTML = timeLeft ;

        timeLeft -=1;
        if(timeLeft <=4) {
            document.getElementById("watercountdown").style.color = "red";
        }
         if(timeLeft <=0) {
            clearInterval(downloadTimer);
            document.getElementById("watercountdown").innerHTML = "Done"
        }
    }, 1000);
    console.log(watercountdown);
});

// Change cups



var menu = document.getElementById("change_cups");
menu.addEventListener("change", xcups); 

document.getElementById("coffeeweight").innerHTML = xcups();
document.getElementById("bloom").innerHTML = xcups();
document.getElementById("waterweight").innerHTML = xcups()*10-xcups();



    function xcups(event) {
        let gramsofcoffee = 12;

        if (menu.value == "2") {
        return document.getElementById("coffeeweight").innerHTML = gramsofcoffee*2;
        } else if (menu.value == "3") {
        return document.getElementById("coffeeweight").innerHTML = gramsofcoffee*3;
        } else if (menu.value == "4") {
        return document.getElementById("coffeeweight").innerHTML = gramsofcoffee*4;
        } else if (menu.value == "5") {
        return document.getElementById("coffeeweight").innerHTML = gramsofcoffee*5;
        } else if (menu.value == "6") {
        return document.getElementById("coffeeweight").innerHTML = gramsofcoffee*6;
        }
    }


    }