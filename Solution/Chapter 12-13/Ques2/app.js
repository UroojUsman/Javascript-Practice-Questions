function fun() {
    var fn= parseInt(document.getElementById("fn").value);
    var sn=parseInt(document.getElementById("sn").value);
    if(fn>sn)
    {
        document.write("<h1>"+fn+" is greater than "+sn+"</h1>");
    }
    else if(sn>fn)
    {
        document.write("<h1>"+sn+" is greater than "+fn+"</h1>");
    }
    else if(sn==fn)
    {
        document.write("<h1>Both numbers are equal</h1>");
    }
    
}