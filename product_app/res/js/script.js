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

    var imageNames = ["mainView.PNG", "sortView.PNG", "3dtouch.PNG", "newItem.PNG", "detailView.PNG"];
    var imgHolder = document.getElementById('imgContainer');
    
    var timeLineMarkers = document.getElementsByClassName('timeline-marker');
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
    if (currentItemNum < 4) {
        currentItemNum++;
    } else {
        currentItemNum = 0
    }
    timelineButtonPressed(currentItemNum);
}

function prevPressed() {
    if (currentItemNum == 0) {
        currentItemNum = 4;
    } else {
        currentItemNum--;
    }

    timelineButtonPressed(currentItemNum);
}

timelineButtonPressed(0);

