var body = document.querySelector("body");

window.addEventListener("load", ()=>{
        body.innerHTML = `
    <h1>Player One</h1>
    <input type="text" id="input1" placeholder="Github Username">
    <button class="proceed1">Continue</button>
    `

    var  proceed1 = document.querySelector(".proceed1");
    proceed1.addEventListener("click", ()=>{
        const input1 = document.querySelector("#input1").value;

        if(input1 == null || ` `){
            alert("Please enter a github username!");
        }else{
            console.log(input1)
            // user1 = getUser(input1);
            body.innerHTML = `
            <h1>Player  Two</h1>
            <input type="text" id="input2" placeholder="Github Username">
            <button class="proceed2">Continue</button>
            `;

            var proceed2 = document.querySelector(".proceed2");
            proceed2.addEventListener("click", ()=>{
            var input2 = document.querySelector("#input2").value;
            user2 = getUser(input2);

            if(input2 == null || ` `){
                alert("Please enter a github username!");
            }else{
            console.log (user1, user2)}
        })
        }
        



    })
})