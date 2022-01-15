const details = JSON.parse(localStorage.getItem("studentDetails"));

function getAndDisplay(objects) {
    let len = objects.length;
    let table = document.querySelector('table');
    let template = '';
    let i;
    for (i = 0; i < len; i++) {
        template += "<tr><td>" + (i + 1) + "</td>";
        template += "<td>" + objects[i].name + "</td>";
        template += "<td>" + objects[i].dob + "</td>";
        template += "<td>" + objects[i].email + "</td>";
        template += "<td>" + objects[i].contactNumber + "</td>";
        template += "<td>" + objects[i].cutoff10 + "</td>";
        template += "<td>" + objects[i].cutoff12 + "</td>";
        template += "<td>" + objects[i].course + "</td>";
        template += "<td>" + objects[i].state + "</td>";
        template += "<td >" + objects[i].address + "</td></tr>";

    }
    table.innerHTML = `
<tr>
    <th scope="col">S.No</th>
    <th scope="col">Name</th>
    <th scope="col">D.O.B</th>
    <th scope="col">E-Mail Address</th>
    <th scope="col">Phone Number</th>
    <th scope="col">10th Cut-off</th>
    <th scope="col">12th Cout-off</th>
    <th scope="col">Course</th>
    <th scope="col">State</th>
    <th scope="col">Address</th>

</tr>
     ${template}`;
}
getAndDisplay(details);

function filtering(event) {
    const elem = event.target;
    const filter = elem.value;
    console.log(filter);
    if (filter == "new") {
        getAndDisplay(details.reverse());
    } else {
        const details2 = JSON.parse(localStorage.getItem("studentDetails"));
        const sortedList = details2.sort(function(a, b) {
            return b[filter] - a[filter]
        })
        console.log(sortedList);
        getAndDisplay(sortedList);
    }
}