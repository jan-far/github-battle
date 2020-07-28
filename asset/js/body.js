var body = document.querySelector("body");

const PlayerOne = () => {
    body.innerHTML = `
    <h1>Player One</h1>
        <input type="text" id="input1" placeholder="Github Username">
        <button type="submit" class="proceed1">Continue</button>
        `
    var proceed1 = document.querySelector(".proceed1");
    return proceed1;
}

const PlayerTwo = () => {
    body.innerHTML = `
            <h1>Player  Two</h1>
                <input id="input2" placeholder="Github Username">
                <button type="submit" class="proceed2">Continue</button>
            `
    var proceed2 = document.querySelector(".proceed2")
    return proceed2;
}

const play = () => {
    PlayerOne().addEventListener("click", () => {
        var input1 = document.querySelector("#input1").value;

        if (input1 == "") {
            alert("Please enter a github username!");
        }
        else {
            PlayerTwo().addEventListener("click", () => {
                var input2 = document.querySelector("#input2").value;

                if (input2 == "") {
                    alert("Please enter a github username!");
                } else {
                    localStorage.setItem("input1", input1)
                    localStorage.setItem("input2", input2)
                    window.open("../../UI/displayUsers.html", "_self");
                }
            })
        }
    })
};

play();