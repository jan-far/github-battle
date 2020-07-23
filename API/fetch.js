//To get specific github user
const getUser = async (user)=>{
    var url = `https://api.github.com/users/${user}`;
    const response = await fetch(url);
    const data =  await response.json;
    console.log(data)
}