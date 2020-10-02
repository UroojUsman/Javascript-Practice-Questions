function calCircumference(radius)
{
    var circumference=2*Math.PI*radius;
    document.write("<h2>The circumference of the circle is "+circumference+"</h2>");
}

function calArea(radius)
{
    var Area =Math.PI*radius*radius;
    document.write("<h2>The Area of the circle is "+Area+"</h2>");
}
var r=parseInt(prompt("Enter radius:"));
document.write("<h2>Radius is "+r+"</h2>");
calCircumference(r);
calArea(r);