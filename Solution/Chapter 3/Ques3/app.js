function order(){
    var name= document.getElementById("Name").value;
    var title= document.getElementById("title").value;
    var quantity=document.getElementById("Quantity").value;
    document.write(name+"ordered "+title+" "+quantity+" on XYZ clothing");
}