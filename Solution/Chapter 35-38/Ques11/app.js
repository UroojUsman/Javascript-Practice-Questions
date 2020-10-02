var str=prompt("Enter any message to find the longest word:");
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWordl = 0;
    var longestWord="";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWordl){
      longestWordl = strSplit[i].length;
      longestWord=strSplit[i];
       }
    }
    return longestWord;
  }
var word=findLongestWord(str);
document.write("<h2>Input string is "+str+"</h2>");
document.write("<h2>Longest word in the string is "+word+"</h2>");
