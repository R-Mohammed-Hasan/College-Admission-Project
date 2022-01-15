const paramsString = window.location.search;
let searched = new URLSearchParams(paramsString);
let nameOfCourse = searched.get("name");
let parsedData = JSON.parse(localStorage.getItem("allCourses"));
for (let i of parsedData) {
    if (i.name == nameOfCourse) {
        document.getElementById("courseName").value = i.name;
        document.getElementById("image").value = i.image;
        document.getElementById("caption").value = i.caption;
        document.getElementById("detailsOfCourse").innerHTML = i.details;
        document.getElementById("courseDepartment").value = i.department;
    }
}

function onSubmitHandler(event) {
    event.preventDefault();
    for (let i of parsedData) {
        if (i.name == nameOfCourse) {
            i.name = document.getElementById("courseName").value;
            i.image = document.getElementById("image").value;
            i.caption = document.getElementById("caption").value;
            i.details = document.getElementById("detailsOfCourse").innerHTML;
            i.details += "<p>" + document.getElementById("detail").value + "</p>";
            i.department = document.getElementById("courseDepartment").value;
        }
    }
    localStorage.setItem("allCourses", JSON.stringify(parsedData));
}