var base=parseInt(prompt("Enter the Base of the triangle:"));
var perp=parseInt(prompt("Enter the perpendicular of the triangle:"));
function hypotenus(base,perp)
{
  function sq(vari)
  {
      return (vari*vari);
  }
  var result=sq(base)+sq(perp);
  result= Math.pow(result, 0.5);
  document.write("<h2>Base = "+base+"</h2>");
  document.write("<h2>Perpendicular = "+perp+"</h2>");
  document.write("<h2> Formula => Hypotenuse^2= Base^2 + perpendicular^2");
  document.write("<h2>Hypotenuse = "+result+"</h2>");
}
hypotenus(base,perp);