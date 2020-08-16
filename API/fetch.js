let userImg = document.getElementsByTagName("img");
let name = document.getElementsByClassName("name");
let username = document.getElementsByClassName("username");
let followers = document.getElementsByClassName("followers");
let following = document.getElementsByClassName("following");
let repo = document.getElementsByClassName("repo");


//To get specific github user
const API = {
    async getUser(user) {
        var url = `https://api.github.com/users/${user}`;
        const response = await fetch(url);
        const data = await response.json()
        return data;
    },

    datalist(info, num){
        return (
        userImg[num].src = info.img,
        name[num].innerHTML = `Name:${info.name}`,
        username[num].innerHTML =  `Username: ${info.username}`,
        followers[num].innerHTML = `Followers: ${info.followers}`,
        following[num].innerHTML = `Following: ${info.following}`,
        repo[num].innerHTML = `Public Repos: ${info.repo}`
        )
    },
    
    info(data){
        var formData = {
            img: data.avatar_url,
            name: data.name,
            username: data.login,
            followers: data.followers,
            following: data.following,
            repo: data.public_repos
        }
        return formData;
    },

    scores(info){
        
    }
}


export default API;