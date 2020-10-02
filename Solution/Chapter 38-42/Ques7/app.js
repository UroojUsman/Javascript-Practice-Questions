function meter(dis)
{
    dis=dis*1000;
    return dis;
}
function feet(dis)
{
    dis=dis*3280.84;
    return dis;
}
function inch(dis)
{
    dis=dis*39370.1;
    return dis;
}
function cm(dis)
{
    dis=dis*100000;
    return dis;
}
var distance=prompt("Enter distance in KM:");
document.write("<h2>Distance in KM= "+distance+"</h2>");
document.write("<h2>Distance in Meters= "+meter(distance)+"</h2>");
document.write("<h2>Distance in feets= "+feet(distance)+"</h2>");
document.write("<h2>Distance in Inches= "+inch(distance)+"</h2>");
document.write("<h2>Distance in Centimeters= "+cm(distance)+"</h2>");