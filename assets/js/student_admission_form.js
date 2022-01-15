function printing_all() {
    let studDetails = JSON.parse(localStorage.getItem("studentDetails"));
    console.log(studDetails);
    const studentDetail = studDetails[studDetails.length - 1];

    const name = studentDetail.name;
    console.log(name);
    const dob = studentDetail.dob;
    const email = studentDetail.email;
    const contact = studentDetail.contactNumber;
    const state = studentDetail.state;
    const courses = studentDetail.course;
    const address = studentDetail.address;
    const cutoff10 = studentDetail.cutoff10;
    const cutoff12 = studentDetail.cutoff12;

    console.log(document.getElementById("displayName"));

    document.getElementById("displayName").innerHTML = name;
    document.getElementById("displayDob").innerHTML = dob;
    document.getElementById("displayEmail").innerHTML = email;
    document.getElementById("displayContact").innerHTML = contact;
    document.getElementById("displayState").innerHTML = state;
    document.getElementById("displayCourse").innerHTML = courses;
    document.getElementById("displayCutoff10").innerHTML = cutoff10;
    document.getElementById("displayCutoff12").innerHTML = cutoff12;
    document.getElementById("displayAddress").innerHTML = address;

}
printing_all();