function receipt()
{
  var p1=parseInt( document.getElementById("P1").value);
  var q1=parseInt( document.getElementById("Q1").value);
  var p2=parseInt( document.getElementById("P2").value);
  var q2=parseInt( document.getElementById("Q2").value);
  var sc=parseInt( document.getElementById("sc").value);
  var tp1= p1*q1;
  var tp2=p2*q2;
  var t=tp1+tp2+sc;   
  document.write("<h1>Shopping cart</h1>");
  document.write("price of item 1: "+p1+"<br>");
  document.write("quantity of item 1: "+q1+"<br>");
  document.write("price of item 2: "+p2+"<br>");
  document.write("quantity of item 2: "+q2+"<br>");
  document.write("Shipping charges: "+sc+"<br>");
  document.write("<br><br><br>");
  document.write("Total cost of your order is: "+t);
  
}