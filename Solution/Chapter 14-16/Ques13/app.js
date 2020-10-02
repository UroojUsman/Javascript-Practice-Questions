var hardware= ["Keyboard","Mouse","Printer","Monitor"];
document.write("<h1>Devices:</h1>");
document.write(hardware+"<br><br>");
var a;
for(var i=0; i<4;i++)
{
    a=hardware.shift();
    document.write("<h1>OUT:</h1>");
    document.write(a+"<br>");
    
}
    