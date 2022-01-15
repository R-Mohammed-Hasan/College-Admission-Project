function showDetailsInCard() {
    let cardNumber1 = document.getElementById("cardNumber1").value;
    let cardNumber2 = document.getElementById("cardNumber2").value;
    let cardNumber3 = document.getElementById("cardNumber3").value;
    let cardNumber4 = document.getElementById("cardNumber4").value;
    let cardName = document.getElementById("cardName").value;
    let expiryMonth = document.getElementById("expiryMonth").value;
    let expiryYear = document.getElementById("expiryYear").value;
    document.getElementById("displayCardNumber1").innerHTML = cardNumber1;
    document.getElementById("displayCardNumber2").innerHTML = cardNumber2;
    document.getElementById("displayCardNumber3").innerHTML = cardNumber3;
    document.getElementById("displayCardNumber4").innerHTML = cardNumber4;
    document.getElementById("displayName").innerHTML = cardName;
    document.getElementById("displayExpiry").innerHTML = `${expiryMonth} / ${expiryYear}`;



}
setInterval(showDetailsInCard, 200);