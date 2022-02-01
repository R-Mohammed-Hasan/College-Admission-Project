const details = JSON.parse(localStorage.getItem("studentDetails"));
getAndDisplay(details);

// Displays all student details to admin by passing "total student details", from local storage, as argument

function getAndDisplay(objects) {
    let len = objects.length;
    let table = document.querySelector('table');
    let template = '';
    let i;
    for (i = 0; i < len; i++) {
        template += `<tr><td> ${(i + 1)}</td>
            <td>${objects[i].name}</td>
            <td>${objects[i].dob}</td>
        <td> ${objects[i].email}</td>
        <td>${objects[i].contactNumber}</td>
        <td>${objects[i].cutoff10}</td>
        <td>${objects[i].cutoff12}</td>
        <td>${objects[i].course}</td>
        <td>${objects[i].state}</td>
        <td>${objects[i].address}</td>
        <td> <a href = "./status.html?rollNo=${i+1}"> View Status </a></td></tr>`;
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
    <th>Status</th>

</tr>
     ${template}`;
}

// Filters the available student details displaying, based on the option choosed

function filtering(event) {
    const elem = event.target;
    const filter = elem.value;
    if (filter == "new") {
        getAndDisplay(details.reverse());
    } else {
        const details2 = JSON.parse(localStorage.getItem("studentDetails"));
        const sortedList = details2.sort(function(a, b) {
            return b[filter] - a[filter]
        })
        getAndDisplay(sortedList);
    }
}