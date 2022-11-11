console.log ("loading website....")

function remove(el){
    var element = el;
    element.remove();
}

var pets = [3, 5, 8];
var spans = [
    document.querySelector("#count1"),
    document.querySelector("#count2"),
    document.querySelector("#count3")
];

function pet(id){
    pets[id]++;
    spans[id].innerHTML = pets[id] + " petting(s)"
}

function animal(element){
    alert("You are looking for a: " + element.value);
}