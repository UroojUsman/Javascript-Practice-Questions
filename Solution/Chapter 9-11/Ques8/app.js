function fun(){
    var num= parseInt(document.getElementById("num").value);
    if(num%3==0)
    {
        document.write("<h1>Yes! "+num+" is divisible by 3</h1>");
    }
    else{
        document.write("<h1>"+num+" is not divisible by 3</h1>");
    }
}