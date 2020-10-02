function sq()
{
    var num=parseInt( document.getElementById("num").value);
    var sq=num*num;
    console.log(sq);
    document.getElementById("sqa").innerHTML="<h1>Square: "+sq+"</h1>";

}