var A=["cake","apple pie","cookie","chips","patties"];
document.getElementById("pd").innerHTML=A;

function search(){
    var ele=document.getElementById("search").value;
    var index=A.indexOf(ele);
    if(index !=-1)
    {
        alert(ele+" Exist in array");
    }
    else{
        alert(ele+ " does not exist in array");
    }
}