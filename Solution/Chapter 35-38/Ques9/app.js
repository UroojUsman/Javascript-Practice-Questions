var strg=prompt("Enter any string to check the palindrome:");
function palindrome(strg) {
    var re = /[\W_]/g;
    var lowRegStr = strg.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  if(palindrome(strg)==true)
  {
      document.write("<h2>Input string "+strg+" is a palindrome</h2>");
  }
  else{
    document.write("<h2>Input string "+strg+" is not a palindrome</h2>");
  }