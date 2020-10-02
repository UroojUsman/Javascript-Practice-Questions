function fun(){
    var gnum=8;
    var num= parseInt(document.getElementById("num").value);
    if(num==gnum)
    {
        document.write("<h1>Bingo! Correct Answer</h1>");
    }
    else if(gnum == num+1)
    {
        document.write("<h1>Close enough to the correct answer</h1>");
    }
    else{
        document.write("<h1>Sorry! Better luck next time</h1>");
    }
}