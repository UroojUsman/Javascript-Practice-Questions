function power(base,exp)
{
    var r= 1;
    for(var i=1;i<=exp;i++)
    {
        r= r*base;
    }
    return r;
}
var b= parseInt(prompt("Enter your base:"));
var ex= parseInt(prompt("Enter power:"));
var p= power(b,ex);
document.write("<h1>Power Calculator</h1>");
document.write("<h2>Base= "+b+"</h2>");
document.write("<h2>Power= "+ex+"</h2>");
document.write("<h2>Result= "+p+"</h2>");