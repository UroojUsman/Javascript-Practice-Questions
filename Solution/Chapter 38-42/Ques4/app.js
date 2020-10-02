function Main_func(sub1,sub2,sub3)
{
    var avg=Average(sub1,sub2,sub3);
    var p= Percentage(avg);
    document.write("<h2>Marks of Subject 1 = "+sub1+"</h2>");
    document.write("<h2>Marks of Subject 2 = "+sub2+"</h2>");
    document.write("<h2>Marks of Subject 3 = "+sub3+"</h2>");
    document.write("<h2>Average = "+avg+"</h2>");
    document.write("<h2>Pecentage = "+p+"%</h2>");
}

function Average(sub1,sub2,sub3)
{
    var avg=(sub1+sub2+sub3)/300;
    return avg;
}
function Percentage(avg)
{
    var percent= avg*100;
    return percent;
}
var Sub1=parseInt(prompt("Enter marks of 1st Subject:"));
var Sub2=parseInt(prompt("Enter marks of 2nd Subject:"));
var Sub3=parseInt(prompt("Enter marks of 3rd Subject:"));
Main_func(Sub1,Sub2,Sub3);

