// Displays and veils the password entered by user on clicking the eye-icon

function show() {
    let pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById("images").src = "../assets/images/eye.svg";

    } else {
        pass.type = "password";
        document.getElementById("images").src = "../assets/images/eye-close.svg";

    }
}

let signUpArray = [];
let loggedInUser = [];
let isExist = false;

// Gets all the values entered by user and checks whether the user has registered already; if not displays error message.
// If registered then, leads to next page depending on who is logging-in(user or admin).

function mailCheck(event) {
    event.preventDefault();
    let inputMail = document.getElementById("mail").value;
    let inputPassword = document.getElementById("password").value;
    let inputNumber = document.getElementById("phoneNumber").value;
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
    if (importingInfo != null) {
        isExist = isUserExist(inputMail, inputPassword, inputNumber);

        if (!isExist) {
            document.getElementById("errorMessage").innerHTML = "Enter valid Login Details !! ";
            return
        }
        const isAdmin = isExist.role == "admin" ? true : false;
        if (isAdmin) {
            window.location.href = "displayDetailsToAdmin.html";
        } else {
            window.location.href = "studentDetails.html";
        }
        loggedInUser = [inputMail, isExist.role];
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    } else {
        document.getElementById("errorMessage").innerHTML = "Please Sign up first";
    }
}
// Checks the mail-id, password and mobile number entered by user and checks it with registered users.
// If exists, then leads to next page; else returns not exists

function isUserExist(mail, password, number) {
    let importingInfo = JSON.parse(localStorage.getItem("signUpDetails"));
    for (let i of importingInfo) {
        if (i.mail == mail && i.password == password && i.number == number) {
            isExist = i; // returns only the matching Object only not all Objects
            break;
        } else {
            isExist = false;
        }
    }
    return isExist;
}