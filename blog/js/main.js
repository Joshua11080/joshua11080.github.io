let oDiv = document.querySelector('#div1')
let span = document.querySelector('#span')
let a = 0
arr()
span.onclick = function () {
    if (a % 2 == 0) {
        open()
        a++
    } else {
        close()
        a++
    }
}
let timer = null
function open() {
    clearInterval(timer)
    timer = setInterval(function () {
        if (oDiv.offsetLeft == 0) {
            clearInterval(timer)
        } else {
            oDiv.style.left = oDiv.offsetLeft + 10 + 'px'
        }
    }, 10)
}
function close() {
    clearInterval(timer)
    timer = setInterval(function () {
        if (oDiv.offsetLeft == -200) {
            clearInterval(timer)
        } else {
            oDiv.style.left = oDiv.offsetLeft - 10 + 'px'
        }
    }, 10)
}

let note = document.querySelector('.note').innerHTML
let cell = document.querySelector('.cell').innerHTML

function moveCellUp(node) {
    let tmp = node.children[0].innerText
    node.children[0].innerText = node.previousElementSibling.children[0].innerText
    node.previousElementSibling.children[0].innerText = tmp
}
function moveCellDown(node) {
    let tmp = node.children[0].innerText
    node.children[0].innerText = node.nextElementSibling.children[0].innerText
    node.nextElementSibling.children[0].innerText = tmp
}
function addCellUp(node) {
    node.insertAdjacentHTML('beforebegin', note)
    arr()
}
function addCellDown(node) {
    node.insertAdjacentHTML('afterend', note)
    arr()
}
function delCell(node) {
    node.remove()
    arr()
}
function mdToHtml(node) {
    node.innerHTML = marked.parse(node.innerText);
}
function dbClick(node) {
    const turndownService = new TurndownService();
    node.innerText = turndownService.turndown(node.innerHTML);
}
function arr() {
    let array = document.getElementsByClassName("cell");
    for (let i = 0; i < array.length; i++) {
        array[i].children[2].innerHTML = i + 1;
    }
}