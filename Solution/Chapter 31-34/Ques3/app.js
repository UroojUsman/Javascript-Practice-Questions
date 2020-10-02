var dt=new Date();
if(dt.getDay()==1)
{
    document.write("<h1>Current day: Mon</h1>");
}
else if(dt.getDay()==2)
{
    document.write("<h1>Current day: Tues</h1>");
}
else if(dt.getDay()==3)
{
    document.write("<h1>Current day: Wed</h1>");
}
else if(dt.getDay()==4)
{
    document.write("<h1>Current day: Thurs</h1>");
}
else if(dt.getDay()==5)
{
    document.write("<h1>Current day: Fri</h1>");
}
else if(dt.getDay()==6)
{
    document.write("<h1>Current day: Sat</h1>");
}
else if(dt.getDay()==0)
{
    document.write("<h1>Current day: Sun</h1>");
}