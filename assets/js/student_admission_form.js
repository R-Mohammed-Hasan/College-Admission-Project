// This function is to show the details of student who applied

function printingAll() {
    //1. Get Student Details
    let studDetails = JSON.parse(localStorage.getItem("studentDetails"));
    //2. Find Student Detail 
    const studentDetail = studDetails[studDetails.length - 1];
    // Assigns object's properties values to same name as property
    let { dob, email, contactNumber, name, state, course, cutoff10, cutoff12, address } = studentDetail;
    //3. Setting data to html page
    document.getElementById("displayName").innerHTML = name;
    document.getElementById("displayDob").innerHTML = dob;
    document.getElementById("displayEmail").innerHTML = email;
    document.getElementById("displayContact").innerHTML = contactNumber;
    document.getElementById("displayState").innerHTML = state;
    document.getElementById("displayCourse").innerHTML = course;
    document.getElementById("displayCutoff10").innerHTML = cutoff10;
    document.getElementById("displayCutoff12").innerHTML = cutoff12;
    document.getElementById("displayAddress").innerHTML = address;
}
printingAll();