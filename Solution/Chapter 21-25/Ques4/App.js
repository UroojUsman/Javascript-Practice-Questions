var str="Hello World";
document.write(str+"<br>");
var b= str.length;
for(var i=b-1;i>0;i++)
{
    if(str[i]=='l')
    {
        document.write("Last Index  : "+i);
        break;
    }
   
}