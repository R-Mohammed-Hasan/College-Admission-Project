let userDetail = JSON.parse(localStorage.getItem("forgotPassword"));
let mailId = userDetail[0];
document.querySelector("#resendOtp").click = sendMail(mailId);

// Makes user as logged in if user enters correct OTP and then gives a message to user

function onSubmitHandler() {
    localStorage.setItem("loggedInUser", JSON.stringify(userDetail));
    window.location.href = "./home.html";
    alert("You have been logged in");
    sendMail(mailId);
}

// Sends mail to user's mail-id entered from our website and gives a message to user
function sendMail(mailId) {
    Email.send({
        Host: "tendots.univ@gmail.com",
        Username: "ten dots",
        Password: "HasanTheDON7.",
        To: mailId,
        From: "Ten Dots Admin",
        Subject: "This is your 6 digit code for password reset",
        Body: "Please do not share this code with anyone else for security reasons",
    }).then(function() { alert("Mail sent successfully"); });
}