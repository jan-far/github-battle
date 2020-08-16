import User from "../../API/fetch.js";
import calculate from "./scores.js"

var body = document.querySelector("body");
var view = document.querySelector(".view");
var preload = document.querySelector(".preload");
let score = document.getElementsByClassName("score")
let players = document.querySelector(".players")
let player = document.getElementsByClassName("winner")
let head = document.getElementsByClassName("header")
var battle = document.querySelector(".battle");
var battleBtn = document.querySelector(".battleBtn");
let start = document.querySelector(".re-play")

var input1 = localStorage.getItem("input1");
var input2 = localStorage.getItem("input2");

(() => {
    usersInfo();
    calculate();
    frame()
})();

function frame() {
    view.style.visibility = "hidden"
    preload.style.visibility = "visible"
    body.style.background = "#333"

    document.onreadystatechange = () => {
        if (document.readyState == 'loading') {
            preload.style.visibility = "visible"
        } else {
            body.style.background = "none"
            preload.style.visibility = "hidden"
            view.style.visibility = "visible"
        }
    }
}

function retrieve(user, num) {
    User.getUser(user)
        .then(data => {
            if (data.message == "Not Found") {
                alert(`Invalid Github username for User: ${user} or doesn't exist `)
                return window.open("../../UI/searchUser.html", "_self", '', true)
            } else {
                User.datalist(User.info(data), num)
                document.onreadystatechange = () => {
                    if (document.readyState !== "complete") {
                        view.style.visibility = "hidden"
                    } else {
                        body.style.background = "none"
                        preload.style.visibility = "hidden"
                        view.style.visibility = "visible"
                    }
                }
                document.onreadystatechange()
            }

        })
        .catch((e) => {
            return e
        })
}

function usersInfo() {
    retrieve(input1, 0)
    retrieve(input2, 1)
}

function reload() {
    players.scrollIntoView()

    start.style.visibility = "hidden"
    head[0].innerHTML = "RESULT"
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

    if (in1 && in2) {
        if (in1 > in2) {
            player[0].innerHTML = "Winner"
            player[1].innerHTML = "Loser"
            score[0].innerHTML = ` SCORE: ${in1}`
            score[1].innerHTML = ` SCORE: ${in2} `

        } else if (in2 > in1) {
            player[0].innerHTML = "Loser"
            player[1].innerHTML = "Winner"
            score[0].innerHTML = ` SCORE: ${in1}`
            score[1].innerHTML = ` SCORE: ${in2} `

        } else {
            players.innerHTML = `
        <h3>IT'S A TIE</h3>
        `
            players.style.color = "green"
            players.style.fontSize = "1.5em"
        }
    }
}

battle.addEventListener("click", () => {
    reload()
})