function fun(){
    var ch= document.getElementById("ch").value;
    if(ch=="a" || ch=="A" || ch=="e" || ch=="E" || ch=="i" || ch=="I" || ch=="o" || ch=="O" || ch=="u" || ch=="U")
    {
        document.write("<h1>True</h1>");
    }
    else{

        document.write("<h1>False</h1>");
    }
}