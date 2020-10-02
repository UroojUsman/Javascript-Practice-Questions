function myfunc(){
    var fc=parseInt(document.getElementById("rf").value);
    if(fc<0.25)
    {
        alert("Please refill the fuel in your car");
    }
    else
    {
        alert("your fuel is above the 0.25 liters");
    }
}