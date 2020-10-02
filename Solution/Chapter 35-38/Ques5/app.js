
function factorialize() {
    var num=parseInt( document.getElementById("num").value);
    var result = num;
    if (num == 0 || num == 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
   document.getElementById("fac").innerHTML="<h1>Factorial: "+result+"</h1>";
  }
