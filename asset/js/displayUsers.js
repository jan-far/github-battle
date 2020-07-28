import User from "../../API/fetch.js";
import calculate from "./scores.js"

var body = document.querySelector("body");
var view = document.querySelector(".view");
var preload = document.querySelector(".preload");
var loading = 0;
var id = setInterval(frame, 70);
var battle = document.querySelector(".battle");

var input1 = localStorage.getItem("input1");
var input2 = localStorage.getItem("input2");

view.style.visibility = "hidden";

function frame() {

    if (loading == 100) {
        clearInterval(id);
        // window.open("../../UI/displayUsers.html", "_self");
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
                    frame()
                }
            }
            body.style.background = "none"
            preload.style.visibility = "hidden"
            view.style.visibility = "visible"
        })
        .catch((e) => {
            return e
        })
}

function usersInfo() {
    retrieve(input1, 0)
    retrieve(input2, 1)
}

usersInfo();

var ply1 = document.querySelector(".ply1")

battle.addEventListener("click", () => {
    preload.style.visibility = "visible"
    view.style.visibility = "hidden"
    body.style.background = "#333"

    let in1 = calculate.calculateScores(input1)
    let in2 = calculate.calculateScores(input2)
    let p = document.createElement("p")

    if(in1 > in2){
        document.onreadystatechange = () => {
            if (document.readyState !== "complete") {
                frame()
            }
        }
    }
})