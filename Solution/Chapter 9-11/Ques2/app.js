function myfunc()
{
    var gen= document.getElementById("gen").value;
    if(gen=="male" || gen=="Male" || gen=="MALE")
    {
        alert("Good Morning, Sir");
    }
    else if(gen=="Female" || gen=="female")
    {
        alert("Good Morning, Madam");
    }
}