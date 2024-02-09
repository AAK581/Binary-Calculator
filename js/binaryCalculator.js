let screen = document.getElementById("res");

document.getElementById("btn0").onclick = function() {
    screen.innerHTML += '0';
}
document.getElementById("btn1").onclick = function() {
    screen.innerHTML += '1';
}
document.getElementById("btnClr").onclick = function () {
    screen.innerHTML = '';
}
document.getElementById("btnEql").onclick = function () {
    let end = screen.innerHTML;
    end = end.replace(/(\d+)/g, function(n){
        return parseInt(n, 2);
    })

    screen.innerHTML = Math.floor(eval(end)).toString(2);
}
document.getElementById("btnSub").onclick = function () {
    screen.innerHTML += '-';
}
document.getElementById("btnMul").onclick = function () {
    screen.innerHTML += '*';
}
document.getElementById("btnDiv").onclick = function () {
    screen.innerHTML += '/';
}
document.getElementById("btnSum").onclick = function () {
    screen.innerHTML += '+';
}
