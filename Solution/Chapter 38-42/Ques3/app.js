function S(a,b,c)
{
    var s=(a+b+c)/2;
    return s;
}
function Area(a,b,c)
{
    var s= S(a,b,c);
     var area = s*(s-a)*(s-b)*(s-c);
     console.log(area);
     document.write("<h2>Area of the triangle = "+area+"</h2>");
}
var a=parseInt(prompt("Enter side a:"));
var b=parseInt(prompt("Enter side b:"));
var c=parseInt(prompt("Enter side c:"));
Area(a,b,c);