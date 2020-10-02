var dropBox=document.getElementById("drop_box");
var company=["Mobile Companies","Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<h1>Array:</h1>");
document.write(company+"<br><br>");

for(var i=0;i<company.length;i++)
{
    dropBox.options.add(new Option(company[i]));
}