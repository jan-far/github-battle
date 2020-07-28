import User from "../../API/fetch.js";

var input1 = localStorage.getItem("input1");
var input2 = localStorage.getItem("input2");
let body = document.querySelector("body");

const calculate = {
    calculateScores(user) {
        User.getUser(user)
            .then(data => {
                data.followers + data.following + data.public_repos
            })
            .catch((e) => {
                return e
            })
    }
}
export default calculate;