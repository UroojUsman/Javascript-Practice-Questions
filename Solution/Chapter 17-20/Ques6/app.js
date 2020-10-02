var num=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var num2=num;
document.write("<h2>Counting:</h2>");
document.write(num);

document.write("<h2>Reverse Counting:</h2>");
document.write(num2.reverse());
document.write("<h2>Even:</h2>");

for(var i=0;i<=20;i++){
    document.write((num[i]*2)+", ");
}
document.write("<h2>Odd:</h2>");
for(var i=0;i<=20;i++)
{
    if(num[i]%2 !=0)
    {
        document.write(num[i]+", ");
    }
}
document.write("<h2>Series:</h2>");
for(var i=0;i<=20;i++){
    document.write(num[i]*2+"k, ");
}
