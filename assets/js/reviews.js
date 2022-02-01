let date = new Date().toDateString().substring(4, );
let commentsArray = [{ comment: "This is the best college in basis of Food Facilities and Cultural activities", name: "Annapoorni", date: date, likes: 0, liked: [""], mailId: "annapurani@gmail.com" }, { comment: "Remarks : Placements are excellent. The standard of education is very good as all the teachers are well-experienced.The campus is maintained well and the food is good.The other factors are they offer all facilities i.e from bus to books to food, everything is taken care of.", name: "Ismail", date: date, likes: 0, liked: [""], mailId: "ismail@gmail.com" }, { comment: "Food inspector one of the best college in state the infrastructure were awesome more extra curricular activities. Library were extrodinary to know more abt food tech and to learn more about foood tech and to work hard in ma careers", name: "Mahalakshmi", date: date, likes: 0, liked: [""], mailId: "mahalakshmi@gmail.com" }];
var showall = true;
let getcomments = JSON.parse(localStorage.getItem("comments"));
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// Adding comment by getting user's name and comment, and pushing it into an array(from storage)
// If already commented, then display error message to user

function addComments(event) {
    event.preventDefault();
    // commentsArray = JSON.parse(localStorage.getItem("comments"));
    console.log(commentsArray);
    let comment = document.getElementById("comment").value;
    let name = document.getElementById("name").value;
    let mail = loggedInUser[0];
    let confirmation = confirm("You can add only once. Are you sure to comment this");
    if (!confirmation) {
        return
    } else {
        let comments = {
            comment: comment,
            name: name,
            date: date,
            likes: 0,
            liked: [""],
            mailId: mail
        }
        if (!alreadyCommented(mail)) {
            commentsArray.push(comments);
            console.log(commentsArray);
            localStorage.setItem("comments", JSON.stringify(commentsArray));
            getAndDisplay(commentsArray);
        } else {
            alert("Sorry, You have already commented");
        }

    }
}

// Comments will be displayed only less in beginning. If user wished to read more, then he'll 
// click on "show more" option to show all the comments

function showingAll() {
    console.log("showing");
    if (showall) {
        document.getElementsByClassName("showing")[0].innerHTML = "..show more";
        showall = false;
    } else {
        document.getElementsByClassName("showing")[0].innerHTML = "..show less";
        showall = true;
    }
    return showall
}

// Checks whether user logged-in with particular mail has already commented

function alreadyCommented(mail) {
    let alreadyCommented = false;
    let i = 0;
    for (i in getcomments) {
        if (mail == getcomments[i].mailId) {
            alreadyCommented = true;
            break;
        }
    }
    return alreadyCommented
}

// Gets all comments from storage and displays it to user including likes, name and date of commented

function getAndDisplay(object = getcomments) {
    object = JSON.parse(localStorage.getItem("comments"));
    let text = '';
    if (object) {
        commentsArray = object;
        if (showingAll()) {
            for (let i = 0; i < commentsArray.length; i++) {
                text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${object[i].name} &nbsp;&nbsp;| ${object[i].date} </div></dt><br><dd><span> ${object[i].comment} </span></dd></dl>
                <i class="fas fa-thumbs-up" data-index="${i}" onclick="increaseLikes(event,'${commentsArray[i].mailId}')"></i>&nbsp;${commentsArray[i].likes}`
            }
        } else {
            for (let i = 0; i < 3; i++) {
                text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${object[i].name} &nbsp;&nbsp;| ${object[i].date} </div></dt><br><dd><span> ${object[i].comment} </span></dd></dl>
                <i class="fas fa-thumbs-up" data-index="${i}" onclick="increaseLikes(event,'${commentsArray[i].mailId}')"></i>&nbsp;${commentsArray[i].likes}`
            }
        }
        document.getElementById("addingComment").innerHTML = text;
    } else {
        commentsArray = [{ comment: "This is the best college in basis of Food Facilities and Cultural activities", name: "Annapoorni", date: date, likes: 0, liked: [""], mailId: "annapurani@gmail.com" }, { comment: "Remarks : Placements are excellent. The standard of education is very good as all the teachers are well-experienced.The campus is maintained well and the food is good.The other factors are they offer all facilities i.e from bus to books to food, everything is taken care of.", name: "Ismail", date: date, likes: 0, liked: [""], mailId: "ismail@gmail.com" }, { comment: "Food inspector one of the best college in state the infrastructure were awesome more extra curricular activities. Library were extrodinary to know more abt food tech and to learn more about foood tech and to work hard in ma careers", name: "Mahalakshmi", date: date, likes: 0, liked: [""], mailId: "mahalakshmi@gmail.com" }];
        localStorage.setItem("comments", JSON.stringify(commentsArray));
    }
    forLikesColor();
}

// Inreases the number of likes for particular comment. If already liked then another click 
// will delike the particular comment

function increaseLikes(event, commentedMailId) { // need mailId to know who liked it, need which object clicked to increase its like alone
    let allComments = JSON.parse(localStorage.getItem("comments"));
    const dataSet = event.target.dataset;
    const index = dataSet.index;
    let text = '';
    let liked;
    let likesOfComment;
    let i = 0;
    for (i in allComments) {
        if (allComments[i].mailId == commentedMailId) {
            likesOfComment = allComments[i].liked;
        }
    }
    for (i in likesOfComment) {
        if (loggedInUser[0] == likesOfComment[i]) { // User who logged has logged-in is checked with list of array of users who liked that comment
            liked = true;
            break;
        } else {
            liked = false;
        }
    }
    if (!liked) {
        allComments[index].liked.push(loggedInUser[0]);
        document.getElementsByClassName("fas fa-thumbs-up")[index].classList.add("test");
        allComments[index].likes += 1;
    } else {
        allComments[index].liked.pop();
        document.getElementsByClassName("fas fa-thumbs-up")[index].classList.remove("test");
        allComments[index].likes -= 1;
    }
    localStorage.setItem("comments", JSON.stringify(allComments));
    // window.location.reload();
    getAndDisplayComments(allComments);

}

// Displays the color of like icon permanently blue, if user has liked a comment

function forLikesColor() {
    let allComments = JSON.parse(localStorage.getItem("comments"));
    for (i in allComments) {
        for (j in allComments[i].liked) {
            if (loggedInUser[0] == allComments[i].liked[j]) {
                allComments[i].liked.push(loggedInUser[0]);
                document.getElementsByClassName("fas fa-thumbs-up")[i].classList.add("test");
            }
        }
    }
}

// Displays all comments in storage 

function getAndDisplayComments(object) {
    let text = '';
    commentsArray = object;
    for (let i = 0; i < commentsArray.length; i++) {
        text += `<dl><dt><div style='float:left;margin-left:10px;color:grey;'> ${commentsArray[i].name} &nbsp;&nbsp;| ${commentsArray[i].date} </div></dt><br><dd><span> ${commentsArray[i].comment} </span></dd></dl>
        <i class="fas fa-thumbs-up" data-index="${i}" onclick="increaseLikes(event,'${commentsArray[i].mailId}')"></i>&nbsp;${commentsArray[i].likes}`
    }
    document.getElementById("addingComment").innerHTML = text;
    document.getElementsByClassName("showing")[0].innerHTML = "..show less";
    forLikesColor();

}

// Avails a star rating option for user to rate our website

function starRating() {
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
}
starRating();
getAndDisplay(getcomments);
forLikesColor();