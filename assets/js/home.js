alert("This is Ten Dots Official Website");

function show() {
    document.querySelector(".hov").classList.toggle("hov-open");
}
var notific = JSON.parse(localStorage.getItem("notification"));
var notificationIcon = document.getElementById("notification_icon");
if (notific == "on") {
    notificationIcon.src = '../assets/html images/notification_on.svg';
    notific = "on";
} else {
    notificationIcon.src = '../assets/html images/notification_off.svg';
    notific = "off";

}
localStorage.setItem("notification", JSON.stringify(notific));


function notification() {

    notificationIcon = document.getElementById("notification_icon");
    let email = prompt("Enter your mail id to get notifications");
    localStorage.setItem("mailForNotifications", JSON.stringify(email));
    alert("Notifcations will be sent to " + email);
    console.log(email);
    if (notific == "off") {
        notificationIcon.src = '../assets/html images/notification_on.svg';
        alert("Notifications turned on ");
        notific = "on";
    } else {
        notificationIcon.src = '../assets/html images/notification_off.svg';
        alert(" Notifications turned off");
        notific = "off";

    }
    localStorage.setItem("notification", JSON.stringify(notific));
}

function navBar() {
    document.querySelector(".nav-bar").classList.toggle("open");
}

function logOut() {
    localStorage.setItem("loggedInUser", null);
    alert("You have been Logged out");
    showLogOut();
}
showLogOut();

function showLogOut() {
    let logOutData = localStorage.getItem("loggedInUser");
    let logOutDisplay = document.getElementById("logout");
    logOutDisplay.style.display = logOutData == "null" ? "none" : "display";
}