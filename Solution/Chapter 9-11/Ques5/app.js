function myfunc(){
     var a = 4;
      if (++a === 5)
      {
        alert("given condition for variable a is true");
      }
      else{
          alert("given condition for variable a is false")
      }
}

function b(){
     var b = 82;
      if (b++ === 83)
      { 
          alert("given condition for variable b is true");
     }
     else
     { 
        alert("given condition for variable b is false");
   }
}
function c(){
    var c = 12;
     if (c++ === 13)
     { 
         alert("condition 1 is true"); 
        } 
        if (c === 13)
        {
             alert("condition 2 is true");
         }
        if (++c < 14)
        {
            alert("condition 3 is true");
         }
          if(c === 14)
          {
            alert("condition 4 is true");
         }
    }
    function d(){
     var materialCost = 20000;
      var laborCost = 2000;
       var totalCost = materialCost + laborCost; 
       if (totalCost === laborCost + materialCost)
       {
            alert("The cost equals"); 
       }
    }
function e(){
    if (true)
    {
        alert("True");
     }
      if (false)
      {
        alert("False");
     }
    }
    function f(){
        if("car" < "cat")
        {
            alert("car is smaller than cat");
         }
    }