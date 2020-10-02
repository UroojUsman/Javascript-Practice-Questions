function fun(){
    var char= document.getElementById("an").value;
    if(char >="A" && char <="Z")
    {
        document.write("<h1>Entered key is an uppercase alphabet</h1>");
    }
    else if(char >="a" && char <="z")
    {
        document.write("<h1>Entered key is a lowercase alphabet</h1>");
    }
    else if(char>="0" && char<="0")
    {
        document.write("<h1>Entered key is a number</h1>");
    }
    
}