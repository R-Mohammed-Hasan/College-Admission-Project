let searched = new URLSearchParams(location.search);
let rollNo = searched.get("rollNo");
console.log(rollNo);
let parsedData = JSON.parse(localStorage.getItem("studentDetails"));