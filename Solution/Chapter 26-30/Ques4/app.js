function dice(){
    var num= Math.floor(Math.random()*6)+1;
    document.getElementById("dices").innerHTML="<h2>Random dice value:"+num+"</h2>";

}