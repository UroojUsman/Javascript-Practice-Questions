function coin(){
    var num= Math.floor(Math.random()*2)+1;
    if(num==1){
    document.getElementById("coin").innerHTML="<h2>"+num+"<br> Random coin value: TAILS</h2>";
    }
    else if(num==2)
    {
        document.getElementById("coin").innerHTML="<h2>"+num+"<br> Random coin value: HEADS</h2>";   
    }
}