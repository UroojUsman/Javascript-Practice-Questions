function fun(){
    var password="maryum";
    var pass=document.getElementById("pass").value;
    if(pass==""){
        alert("Please enter the password");
    }
    if(pass==password)
    {
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("incorrect password");
    }
}