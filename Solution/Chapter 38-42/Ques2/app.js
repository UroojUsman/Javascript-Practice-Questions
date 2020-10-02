function leap_year(year)
{
    if(year % 4==0)
    {
        if(year% 100==0)
        {
            if(year%400==0)
            {
                document.write("<h2>"+year+" is a leap year<h2>");
            }
            else
            {
                document.write("<h2>"+year+" is not a leap year<h2>");
            }
        }
        else
        {
            document.write("<h2>"+year+" is a leap year<h2>");
        }
    }
    else
    {
        document.write("<h2>"+year+" is not a leap year<h2>");
    }
}
var yr=parseInt(prompt("Enter year:"));
leap_year(yr);

