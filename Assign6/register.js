window.onload = pageLoad;
function pageLoad(){
	var clickRegister = document.getElementById("myForm");
    clickRegister.onsubmit = validateForm;
    
}

function validateForm(){
	var password = document.forms["myForm"]["password"];
    var retypePassword = document.forms["myForm"]["retypePassword"];

    if (password.value != retypePassword.value ) {
        document.getElementById("errormsg").innerHTML = "Plese Recheck Password.";
        document.getElementById("errormsg").style.color = "red";
        alert("Password ไม่ตรงกัน!!!");
        return false;
    }
    else
    {
		return true; 
    }
   }
