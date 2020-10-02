function myfunc(){
 var maths=parseInt(document.getElementById("maths").value);
 var phys=parseInt(document.getElementById("phys").value);
 var chem=parseInt(document.getElementById("chem").value);
 var tm=maths+phys+chem;
 var avg=tm/300;
 var per=avg*100;
 var grade;
 var remarks;
 if(per>=80){
   grade="A-one";
   remarks="Excellent";
 }
  if(per>=70){
    grade="A";
    remarks="Good";
  }
  if(per>=60){
    grade="B";
    remarks="You need to improve";
  }
  if(per<60){
    grade="Fail";
    remarks="Sorry";
  }
document.write("<h1>Mark Sheet</h1><br><br>");
document.write("Total marks: 300<br>");
document.write("Marks obtained: "+tm+"<br>");
document.write("Percentage: "+per+"%<br>");
document.write("Grade: "+grade+"<br>");
document.write("Remarks: "+remarks+"<br>");
}