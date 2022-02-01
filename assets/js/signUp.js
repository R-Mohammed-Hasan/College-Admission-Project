let signUpArray = [];

// Sets the attribute of date input dynamically by getting present date

function setDynamicAgeLimit() {
    var max;
    let presentYear = new Date().getFullYear();
    let presentMonth = new Date().getMonth();
    let maxDate = new Date().getDate();
    let maxMonth = (presentMonth + 1).toString();
    let maxYear = presentYear - 18;
    if (maxMonth.length < 2) {
        max = `${maxYear}-0${maxMonth}-${maxDate}`;
    } else {
        max = `${maxYear}-${maxMonth}-${maxDate}`;
    }
    document.getElementById("dob").setAttribute("max", max);
}

// Shows the password by getting input id and image id to change the password image icon

function show(inputId, imageId) {
    let pass = document.getElementById(inputId);
    if (pass.type === "password") {
        pass.type = "text";
        document.getElementById(imageId).src = "../assets/images/eye.svg";
    } else {
        pass.type = "password";
        document.getElementById(imageId).src = "../assets/images/eye-close.svg";
    }
}

// Gets the details, entered by user and stores it for verification later

function signUpDataGetting() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mail = document.getElementById("mailid").value;
    let dob = document.getElementById("dob").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;
    let role = document.getElementById("role").value;
    const userDetails = {
        fName: fname,
        lName: lname,
        mail: mail,
        dob: dob,
        password: password,
        number: number,
        role: role
    }
    signUpArray.push(userDetails);
    localStorage.setItem("signUpDetails", JSON.stringify(signUpArray));
}

// Checks whether user has already registered; if already registered, then displays an error message
// Also checks whether password and confirm passwords are identical

function checkValidations(event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cPassword").value;
    let mail = document.getElementById("mailid").value;
    let signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
    if (signUpDetails == null) {
        localStorage.setItem("signUpDetails", JSON.stringify([]));
    } else {
        let isMatch = false;
        for (let i of signUpDetails) {
            let mailid = i.mail;
            if (mail == mailid) {
                isMatch = true;
                break;
            }
            if (password !== cpassword) {
                isMatch = true;
                break;
            }
        }
        if (isMatch) {
            document.getElementById("errorMessage").innerHTML = "<font color=red> E-mail Id already exists or incorrect password details !! </font>";
        } else {
            signUpDataGetting();
            window.location.href = "login.html";
        }
    }
}

// Invokes on refresh, and replaces the empty signed up users array with existing users data if it exists

function signUpRefresh() {
    const signUpDetails = JSON.parse(localStorage.getItem("signUpDetails"));
    signUpArray = signUpDetails ? signUpDetails : [];
}
signUpRefresh();
setDynamicAgeLimit();