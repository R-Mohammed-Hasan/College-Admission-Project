let date = new Date().toDateString().substr(4, );
let commentsArray = [{ comment: "This is the best college in basis of Food Facilities and Cultural activities", name: "Annapoorni", date: date, likes: 0 }, { comment: "Remarks : Placements are excellent. The standard of education is very good as all the teachers are well-experienced.The campus is maintained well and the food is good.The other factors are they offer all facilities i.e from bus to books to food, everything is taken care of.", name: "Ismail", date: date, likes: 0 }, { comment: "Food inspector one of the best college in state the infrastructure were awesome more extra curricular activities. Library were extrodinary to know more abt food tech and to learn more about foood tech and to work hard in ma careers", name: "Mahalakshmi", date: date, likes: 0 }];
var showall = true;
let getcomments = JSON.parse(localStorage.getItem("comments"));


function addComments(event) {
    event.preventDefault();
    let comment = document.getElementById("comment").value;
    let name = document.getElementById("name").value;
    let comments = {
        comment: comment,
        name: name,
        date: date,
        likes: 0
    }
    commentsArray.push(comments);
    localStorage.setItem("comments", JSON.stringify(commentsArray));
    let parsedData = JSON.parse(localStorage.getItem("comments"));
    getAndDisplay(parsedData);
}

function showingAll() {
    if (showall) {
        document.getElementsByClassName("showing")[0].innerHTML = "..show more";
        showall = false;
    } else {
        document.getElementsByClassName("showing")[0].innerHTML = "..show less";
        showall = true;
    }
    return showall

}

function getAndDisplay(object = getcomments) {
    let text = '';
    if (object) {
        commentsArray = object;
        if (showingAll()) {
            for (let i = 0; i < commentsArray.length; i++) {
                text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${commentsArray[i].name} &nbsp;&nbsp;| ${commentsArray[i].date} </div></dt><br><dd><span> ${commentsArray[i].comment} </span></dd></dl>
                <i class="fas fa-thumbs-up" data-index="${i}" onclick="increaseLikes(event)"></i>&nbsp;${commentsArray[i].likes}`
            }
        } else {
            for (let j = 0; j < 3; j++) {
                text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${object[j].name} &nbsp;&nbsp;| ${object[j].date} </div></dt><br><dd><span> ${object[j].comment} </span></dd></dl>
                <i class="fas fa-thumbs-up" data-index="${j}" onclick="increaseLikes(event)"></i>&nbsp;${object[j].likes}`

            }
        }
        document.getElementById("addingComment").innerHTML = text;
    } else {
        commentsArray = [{ comment: "This is the best college in basis of Food Facilities and Cultural activities", name: "Annapoorni", date: date, likes: 0 }, { comment: "Remarks: Placements are excellent. The standard of education is very good as all the teachers are experienced.The campus and the food is good.The other factors are they offer all facilities i.e from bus to books to food, everything is taken care of", name: "Ismail", date: date, likes: 0 }, { comment: "Food inspector one of the best college in state the infrastructure are awesome; more extra curricular activities. Library is extrodinary to know more abt food tech and to work hard in careers", name: "Mahalakshmi", date: date, likes: 0 }];
        localStorage.setItem("comments", JSON.stringify(commentsArray));
    }
}
getAndDisplay(getcomments);

function filter() {
    let filterBy = document.getElementById("filterApplied").value;
    switch (filterBy) {
        case "All Reviews":
            console.log("all");
            break;
        case "Recently Posted":
            console.log("recent");

            break;
        case "Positive Reviews":
            console.log("positive");
            break;
        default:
            console.log("negative");
            break;
    }
}

function increaseLikes(event) {
    const dataSet = event.target.dataset;
    let text = '';
    const index = dataSet.index;
    getcomments[index].likes += 1;
    console.log(getcomments[index].likes);
    console.log(getcomments);
    localStorage.setItem("comments", JSON.stringify(getcomments));
    for (let i = 0; i < getcomments.length; i++) {
        text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${getcomments[i].name} &nbsp;&nbsp;| ${getcomments[i].date} </div></dt><br><dd><span> ${getcomments[i].comment} </span></dd></dl>
        <i class="fas fa-thumbs-up" data-index="${i}" onclick="increaseLikes(event)"></i>&nbsp;${getcomments[i].likes}`
    }
    getAndDisplayComments(getcomments);
}

function getAndDisplayComments(object = getcomments) {
    let text = '';
    commentsArray = object;
    for (let i = 0; i < commentsArray.length; i++) {
        text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${commentsArray[i].name} &nbsp;&nbsp;| ${commentsArray[i].date} </div></dt><br><dd><span> ${commentsArray[i].comment} </span></dd></dl>
        <i class="fas fa-thumbs-up" data-index="${i}" onclick="increaseLikes(event)"></i>&nbsp;${commentsArray[i].likes}`
    }
    document.getElementById("addingComment").innerHTML = text;
    document.getElementsByClassName("showing")[0].innerHTML = "..show less";

}

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
    widget.style.display = "none";
    post.style.display = "block";
    editBtn.onclick = () => {
        widget.style.display = "block";
        post.style.display = "none";
    }
    return false;
}