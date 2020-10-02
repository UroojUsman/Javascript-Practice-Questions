function cal()
{
    var num1=parseInt( document.getElementById("num1").value);
    var num2=parseInt( document.getElementById("num2").value);
    var op=document.getElementById("op").value;

    if(op=='+')
    {
        document.write("<h1>Addition: "+(num1+num2)+"</h1>");
    }
    else if(op=='-')
    {
        document.write("<h1>Subtraction: "+(num1-num2)+"</h1>");
    }
    else if(op=='/')
    {
        document.write("<h1>Division: "+(num1/num2)+"</h1>");
    }
    else if(op=='*')
    {
        document.write("<h1>Multiplication: "+(num1*num2)+"</h1>")
    }
    else{
        document.write("<h1>Error! Try Again</h1>");
    }
}