import User from "../../API/fetch.js";
import calculate from "./scores.js"

var body = document.querySelector("body");
var view = document.querySelector(".view");
var preload = document.querySelector(".preload");
let score = document.getElementsByClassName("score")
let player = document.getElementsByClassName("players")
let head = document.getElementsByClassName("header")
var battle = document.querySelector(".battle");
var battleBtn = document.querySelector(".battleBtn");
let start = document.querySelector(".re-play")

var input1 = localStorage.getItem("input1");
var input2 = localStorage.getItem("input2");

view.style.visibility = "hidden";

var loading = 0;
var id = setInterval(frame, 70);
function frame() {
    preload.style.visibility = "visible"
    view.style.visibility = "hidden"
    body.style.background = "#333"

    if (loading == 100) {
        clearInterval(id);
        body.style.background = "none"
        preload.style.visibility = "hidden"
        view.style.visibility = "visible"
    }
    else {
        loading = loading + 1;
        if (loading == 90) {
            preload.style.animation = "fadeout 5s ease"
        }
    }
}

function retrieve(user, num) {
    User.getUser(user)
        .then(data => {
            User.datalist(User.info(data), num)
            document.onreadystatechange = () => {
                if (document.readyState !== "complete") {
                    view.style.visibility = "hidden"
                } else {
                    window.addEventListener("load", () => {
                        // frame()
                        body.style.background = "none"
                        preload.style.visibility = "hidden"
                        view.style.visibility = "visible"
                    })
                }
            }
            document.onreadystatechange()
        })
        .catch((e) => {
            return e
        })
}

usersInfo();



function usersInfo() {
    // start.style.visibility = "visible"
    // head[0].innerHTML = "Confirm Players"
    // battleBtn.textContent = "Reselect Players"
    retrieve(input1, 0)
    retrieve(input2, 1)
}

function result() {
    // frame()

    start.style.visibility = "hidden"
    head[0].innerHTML = "WINNER"
    battleBtn.textContent = "Start Over"
    battleBtn.addEventListener("click", () => {
        start.style.visibility = "visible"
        head[0].innerHTML = "Confirm Players"
        battleBtn.textContent = "Reselect Players"
        sessionStorage.clear()
        localStorage.clear()
        window.open("../../UI/searchUser.html", "_self")
    })

    let in1 = parseInt(sessionStorage.getItem("in1"))
    let in2 = parseInt(sessionStorage.getItem("in2"))

    // preload.style.visibility = "visible"
    // view.style.visibility = "hidden"
    // body.style.background = "#333"
    // head[0].innerHTML = "WINNER"

    if (in1 > in2) {
        // frame()
        player[0].innerHTML = "Winner"
        player[1].innerHTML = "Loser"
        score[0].innerHTML = ` SCORE: ${in1}`
        score[1].innerHTML = ` SCORE: ${in2} `

    } else if (in2 > in1) {
        player[0].innerHTML = "Loser"
        player[1].innerHTML = "Winner"
        score[0].innerHTML = ` SCORE: ${in1}`
        score[1].innerHTML = ` SCORE: ${in2} `

        // frame()
    } else {
        player.innerHTML = `
        <h3>IT'S A TIE</h3>
        `
        console.log("A TIE")
    }
}
calculate()
battle.addEventListener("click", () => {
    // frame()
    result()

    // start.style.visibility = "hidden"
    // head[0].innerHTML = "WINNER"
    // battleBtn.textContent = "Start Over"
    // battleBtn.addEventListener("click", () => {
    //     window.open("../../UI/searchUser.html", "_self")
    //     sessionStorage.clear()
    //     localStorage.clear()
    // })

})