function area(width,height)
{
    var area =width*height;
    document.write("<h2>Area = "+area+"</h2>");
}
var w=parseInt(prompt("Enter width: "));
var h=parseInt(prompt("Enter height: "));
document.write("<h1>Call By variable</h1>");
area(w,h);
document.write("<h1>Call By value: width=5 , height=6</h1>");
area(5,6);

