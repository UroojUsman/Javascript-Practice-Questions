function fun(){
var num= parseInt(document.getElementById("num").value);
    if(num%2==0)
    {
        document.write("<h1>"+num+" is even</h1>");
    }
    else{
        document.write("<h1>"+num+" is odd</h1>");
    }
}