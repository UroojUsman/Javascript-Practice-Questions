var fnum= parseInt(prompt("Enter a starting number"));
var lnum=parseInt(prompt("Enter last number:"));
document.write("<h2>Starting Number: "+fnum+"</h2>");
document.write("<h2>Ending Number"+lnum+"</h2>");
count(fnum,lnum);
function count(fnum,lnum)
{
    for(var i=fnum;i<=lnum;i++)
    {
        document.write("<h2>"+i+"</h2>");
    }
}