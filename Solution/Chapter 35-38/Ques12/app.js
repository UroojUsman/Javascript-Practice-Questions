function letter_count(str,l)
{
    var count=0;
    var strsplit= str.split("");
    for(var i=0;i< strsplit.length;i++)
    {
        if(strsplit[i]==l)
        {
            count++;
        }
    }
    return count;
}
var str=prompt("Enter any text:");
var l=prompt("Enter a letter to find in the text:");
var c= letter_count(str,l);
document.write("<h2>Text: "+str+"</h2>");
document.write("<h2>Letter to count: "+l+"</h2>");
document.write("<h2>Total: "+c+"</h2>");