window.addEventListener("load", () => {
    var x = localStorage.getItem("color");
    if(x=1){
        red();
    } else if(x=2){
        orange();
    } else if(x=3){
        yellow();
    } else if(x=4){
        green();
    } else if(x=5){
        cyan();
    } else if(x=6){
        blue();
    } else if(x=7){
        purple();
    }
});

function red(){
    document.getElementById("red").disabled = false;
    document.getElementById("orange").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("green").disabled = true;
    document.getElementById("cyan").disabled = true;
    document.getElementById("blue").disabled = true;
    document.getElementById("purple").disabled = true;
    localStorage.setItem("color", 1);
}

function orange(){
    document.getElementById("red").disabled = true;
    document.getElementById("orange").disabled = false;
    document.getElementById("yellow").disabled = true;
    document.getElementById("green").disabled = true;
    document.getElementById("cyan").disabled = true;
    document.getElementById("blue").disabled = true;
    document.getElementById("purple").disabled = true;
    localStorage.setItem("color", 2);
}

function yellow(){
    document.getElementById("red").disabled = true;
    document.getElementById("orange").disabled = true;
    document.getElementById("yellow").disabled = false;
    document.getElementById("green").disabled = true;
    document.getElementById("cyan").disabled = true;
    document.getElementById("blue").disabled = true;
    document.getElementById("purple").disabled = true;
    localStorage.setItem("color", 3);
}

function green(){
    document.getElementById("red").disabled = true;
    document.getElementById("orange").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("green").disabled = false;
    document.getElementById("cyan").disabled = true;
    document.getElementById("blue").disabled = true;
    document.getElementById("purple").disabled = true;
    localStorage.setItem("color", 4);
}

function cyan(){
    document.getElementById("red").disabled = true;
    document.getElementById("orange").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("green").disabled = true;
    document.getElementById("cyan").disabled = false;
    document.getElementById("blue").disabled = true;
    document.getElementById("purple").disabled = true;
    localStorage.setItem("color", 5);
}

function blue(){
    document.getElementById("red").disabled = true;
    document.getElementById("orange").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("green").disabled = true;
    document.getElementById("cyan").disabled = true;
    document.getElementById("blue").disabled = false;
    document.getElementById("purple").disabled = true;
    localStorage.setItem("color", 6);
}

function purple(){
    document.getElementById("red").disabled = true;
    document.getElementById("orange").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("green").disabled = true;
    document.getElementById("cyan").disabled = true;
    document.getElementById("blue").disabled = true;
    document.getElementById("purple").disabled = false;
    localStorage.setItem("color", 7);
}