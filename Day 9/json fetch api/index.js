// for locally accessing json data use fetch('data.json')
// data can be accessed only on live server, so run live-server.
fetch('https://jsonplaceholder.typicode.com/users')
.then(function (response){
    return response.json();
}).then(function (data){
    for(var i = 0; i < data.length; i++){
        document.getElementById("data").innerHTML += 
        data[i].id + "=> " + data[i].name + ", " + data[i].username + ", " + data[i].email +"<br/>";
    }
}).catch(function (err){
    console.log(err);
});