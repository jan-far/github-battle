import User from "../../API/fetch.js";

var input1 = localStorage.getItem("input1");
var input2 = localStorage.getItem("input2");

const calculate = async () => {
    let in1 = User.getUser(input1)
        .then(data => {
            sessionStorage.setItem("in1", data.followers + data.following + data.public_repos)
        })

    let in2 = User.getUser(input2)
        .then(data => {
            sessionStorage.setItem("in2", data.followers + data.following + data.public_repos) 
        })
}

export default calculate;