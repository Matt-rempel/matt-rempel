$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});


var currentItemNum = 0;

function timelineButtonPressed(itemNum) {
    currentItemNum = itemNum;

    var imageNames = ["products.PNG", "3dtouch.PNG", "productDetails.PNG", "sortProducts.PNG", "orders.PNG", "sort_orders.PNG"];
    var imgHolder = document.getElementById('imgContainer');
    
    var timeLineMarkers = document.getElementsByClassName('pic-timeline');
    console.log(timeLineMarkers)
    for (var i = 0; i < timeLineMarkers.length; i++) {
        console.log(i)
        // timeLineMarkers[i].classList.remove('is-primary');
        timeLineMarkers[i].style.display = "none";
    }

    // document.getElementById('arrow'+itemNum).classList.add('is-primary');
    document.getElementById('arrow'+itemNum).style.display = "flex";
    imgHolder.src = "res/img/"+imageNames[itemNum]
}

function nextPressed() {
    if (currentItemNum < 5) {
        currentItemNum++;
    } else {
        currentItemNum = 0
    }
    timelineButtonPressed(currentItemNum);
}

function prevPressed() {
    if (currentItemNum == 0) {
        currentItemNum = 5;
    } else {
        currentItemNum--;
    }

    timelineButtonPressed(currentItemNum);
}

timelineButtonPressed(0);


var currentItemNumGif = 0;

function timeline2ButtonPressed(itemNum) {
    currentItemNumGif = itemNum;

    var imageNames = ["barcodeScanner.gif", "tackingLabel.gif"];
    var imgHolder = document.getElementById('gifContainer');
    
    var timeLineMarkers = document.getElementsByClassName('gif-timeline');
    console.log(timeLineMarkers)
    for (var i = 0; i < timeLineMarkers.length; i++) {
        console.log(i)
        // timeLineMarkers[i].classList.remove('is-primary');
        timeLineMarkers[i].style.display = "none";
    }

    // document.getElementById('arrow'+itemNum).classList.add('is-primary');
    document.getElementById('arrow2'+itemNum).style.display = "flex";
    imgHolder.src = "res/img/"+imageNames[itemNum]
}

function nextPressed2() {
    if (currentItemNumGif < 1) {
        currentItemNumGif++;
    } else {
        currentItemNumGif = 0
    }
    timeline2ButtonPressed(currentItemNumGif);
}

function prevPressed2() {
    if (currentItemNumGif == 0) {
        currentItemNumGif = 1;
    } else {
        currentItemNumGif--;
    }

    timeline2ButtonPressed(currentItemNumGif);
}

timeline2ButtonPressed(0);
