function hasLoggedIn(pathOfNextPage) {
    let storedMail = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedMail) {
        window.location.href = `./${pathOfNextPage}`;
    } else {
        window.location.href = "./errorPage.html";
    }
}

function adminError(pathOfNextPage) {
    let isAdmin = JSON.parse(localStorage.getItem("loggedInUser"));
    if (isAdmin) {
        if (isAdmin[1] == "admin") {
            window.location.href = `./${pathOfNextPage}`;
        } else {
            window.location.href = `./adminError.html`;
        }
    } else {
        window.location.href = "./errorPage.html";
    }

}