//length of last word in string with edge case 

var lengthOfLastWord = function(s) {
    let currentString = "";
     let array = [];
     for(let i = 0; i < s.length; i++){
         if (s[i] != ' '){
             currentString += s[i];
         }else {
             if (currentString.length > 0) {array.push(currentString);}
             currentString = "";
         }
     }
          if (currentString.length > 0) {array.push(currentString);}
     if(array.length === 0){return 0;}
     return array[array.length - 1].length;
 };