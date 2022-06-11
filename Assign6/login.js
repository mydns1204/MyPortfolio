window.onload = loginLoad;
function loginLoad(){
    var Login = document.getElementById("myLogin");
    Login.onsubmit = checkLogin;
}

function checkLogin(){
    //search หา แหน่งและข้อมูลที่กรอก
    const queryString = window.location.search;
    const url = new URLSearchParams(queryString);
    const username = url.get('username');
    const password = url.get('password');

    var id = document.forms["myLogin"]["username"].value;
    var pass = document.forms["myLogin"]["password"].value;

    if(id == username && pass == password){
        //LoginSuccess();
        alert("Login Sucessful.");
        
    }
    else {
        alert("Username or Password Incorrected!!!");
        // console.log(id);
        // console.log(pass);
        return false;
    }
}
