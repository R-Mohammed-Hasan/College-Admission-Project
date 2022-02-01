let allStudentDetails = [];

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

// Gets all the data entered by user and stores it for later use. Also checks the cut-off marks
// of user and validates it.

function onSubmitHandler(event) {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("phone_number").value;
    const state = document.getElementById("state").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const cutoff10 = parseInt(document.getElementById("cutoff10").value);
    const cutoff12 = parseInt(document.getElementById("cutoff12").value);
    if (cutoff10 < 40 || cutoff12 < 40) {
        document.getElementsByClassName("error")[0].style.display = "inline";
        document.getElementsByClassName("error")[0].innerHTML = `Sorry, you do not match our required Cut-off `;
        return
    }
    const studentDetails = {
        "name": username,
        "dob": dob,
        "email": email,
        "contactNumber": contact,
        "state": state,
        "course": course,
        "cutoff10": cutoff10,
        "cutoff12": cutoff12,
        "address": address
    }
    allStudentDetails.push(studentDetails);
    localStorage.setItem("studentDetails", JSON.stringify(allStudentDetails));
    window.location.href = "final.html";
}

// Stores if there are any already existing students who applied and adds present user details.
// If no users applied, then keeps empty array

function onPageLoadFunction() {
    const studDetails = JSON.parse(localStorage.getItem("studentDetails"));
    allStudentDetails = studDetails ? studDetails : [];

}
setDynamicAgeLimit();
onPageLoadFunction();