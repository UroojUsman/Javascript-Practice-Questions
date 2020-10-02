function removeVowels( input ){
    return input.replace(/[aeiou]/gi, "");
}

var txt=prompt("Enter your text:");
document.write("<h2>Text: "+txt+"</h2>");
document.write("<h2>Without vowels: "+removeVowels(txt)+"</h2>");