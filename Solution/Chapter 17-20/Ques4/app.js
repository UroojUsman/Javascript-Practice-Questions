var num=prompt("Enter a number to show its multiplication table");
var len=prompt("Enter length of the multiplication table");
document.write("Multiplication table of "+num+"<br>");
document.write("Length "+len+"<br>");
for(i=1;i<=len;i++)
{
    document.write(num+"x"+i+"="+(num*i)+"<br>");
}