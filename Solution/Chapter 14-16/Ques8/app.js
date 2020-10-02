var names =new Array("Urooj","Aimon","Areeba");
var marks=[320,230,480];
var total=500;
for(i=0;i<3;i++){
    document.write("score of "+names[i]+" is "+marks[i]+". Percentage : "+((marks[i]/total)*100)+"% <br>");
}