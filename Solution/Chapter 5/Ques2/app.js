function addition(){
    var first=parseInt( document.getElementById("fnum").value);
    var second=parseInt( document.getElementById("snum").value);
    var add=first+second;
    document.write("Sum of "+first+" and "+second+" is "+add);
}

function sub(){
    var first=parseInt( document.getElementById("fnum").value);
    var second=parseInt( document.getElementById("snum").value);
    var add=second-first;
    document.write("Sum of "+first+" and "+second+" is "+add);
}

function mul(){
    var first=parseInt( document.getElementById("fnum").value);
    var second=parseInt( document.getElementById("snum").value);
    var add=first*second;
    document.write("Sum of "+first+" and "+second+" is "+add);
}

function div(){
    var first=parseInt( document.getElementById("fnum").value);
    var second=parseInt( document.getElementById("snum").value);
    var add=first/second;
    document.write("Sum of "+first+" and "+second+" is "+add);
}
function mod(){
    var first=parseInt( document.getElementById("fnum").value);
    var second=parseInt( document.getElementById("snum").value);
    var add=first%second;
    document.write("Sum of "+first+" and "+second+" is "+add);
}