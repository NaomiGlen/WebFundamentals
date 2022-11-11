console.log("page loading...");

var likes = [9, 12, 9];
var spans = [
    document.querySelector("#count1"),
    document.querySelector("#count2"),
    document.querySelector("#count3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}