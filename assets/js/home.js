// On clicking, opens and closes the side-bar of apply directly for a course

function showApplyCourseBar() {
    document.querySelector(".hov").classList.toggle("hov-open");
}
// Checks whether notifcation are turned-on or off by getting value from local storage on refresh

function onRefreshForNotification() {
    let notific = JSON.parse(localStorage.getItem("notification"));
    let notificationIcon = document.getElementById("notification_icon");
    if (notific == "on") {
        notificationIcon.src = '../assets/images/notification_on.svg';
        notific = "on";
    } else {
        notificationIcon.src = '../assets/images/notification_off.svg';
        notific = "off";

    }
    localStorage.setItem("notification", JSON.stringify(notific));
}

// On clicking, changes the notfications to on and off 

function notification() {
    let notificationIcon = document.getElementById("notification_icon");
    let notific = JSON.parse(localStorage.getItem("notification"));
    if (notific == "off") {
        let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        let email = loggedInUser ? loggedInUser[0] : prompt("Enter your mail id to get notifications");
        alert("Notifcations will be sent to " + email);
        localStorage.setItem("mailForNotifications", JSON.stringify(email));
        notificationIcon.src = '../assets/images/notification_on.svg';
        alert("Notifications turned on ");
        notific = "on";
    } else {
        notificationIcon.src = '../assets/images/notification_off.svg';
        alert(" Notifications turned off");
        notific = "off";

    }
    localStorage.setItem("notification", JSON.stringify(notific));
}

// Toggles the nav-bar on clicking. Clicking invokes this fn.

function navBar() {
    document.querySelector(".nav-bar").classList.toggle("open");
    document.getElementsByClassName("fas fa-times")[0].classList.toggle("show");
}

// Gets data from storage and deletes it and makes user Logout from our website
function logOut() {
    localStorage.removeItem("loggedInUser");
    let logout = confirm("Are you sure ? Do you want to Log-out ?");
    if (logout) {
        alert("You have been Logged out");
        showLogOut();
    }
}

function socialMedia(nameOfMedium) {
    switch (nameOfMedium) {
        case "facebook":
            window.open("https://www.facebook.com/");
            break;
        case "twitter":
            window.open("https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D");
            break;
        case "instagram":
            window.open("https://www.instagram.com/accounts/login/");
            break;
        default:
            window.open("https://www.youtube.com/");
    }

}

// On refresh invokes this function, to check whether user has logged in and displays Log-out option
// to user depending on the values from local storage.
function showLogOut() {
    let logOutData = localStorage.getItem("loggedInUser");
    let logOutDisplay = document.getElementById("logout");
    logOutDisplay.style.display = logOutData ? "display" : "none";

}
showLogOut();
onRefreshForNotification();