function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){
     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}
     );

}
var str=prompt("Enter any message: ");
document.write("<h2>Before: "+str+"</h2>");
document.write("<h2>After: "+capitalize_Words(str)+"</h2>");
