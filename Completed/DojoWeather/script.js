console.log("page loading...")

var cookies = document.querySelector(".cookiePolicy");

function accept() {
    cookies.remove();
}

function cf(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function fc(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for (var i = 1; i < 9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "°C") {
            tempSpan.innerText = fc(tempVal);
        } else {
            tempSpan.innerText = cf(tempVal);
        }
    }
}