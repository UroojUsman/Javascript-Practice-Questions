function Indexof(str,ch)
{
    var temp;
   for(i=0;i<str.length;i++)
   {
      if(str[i]==ch)
      {    
          temp=i;
          break;
      }
   }
   return temp;
}

var txt=prompt("Enter Text:");
var char=prompt("Enter a character to find:");
document.write("<h2>Input string: "+txt+"<h2>");
document.write("<h2>Character to find: "+char+"<h2>");
document.write("<h2>Index: "+Indexof(txt,char)+"<h2>");