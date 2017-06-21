//function gets user input and converts as integers into array//
function integersInArray () {
  let arr = (prompt("Enter numbers separated by commas here:").split(","));
  let intArr = arr.map(function (num) {
    return parseInt(num);
  });
  return intArr;
}

//function converts integer into corresponding UPPERCASE letter//
function toUpperCase (int) {
  let upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  return upperAlphabet[int - 1];
}

//function converts integer into corresponding LOWERCASE letter//
function toLowerCase (int) {
  let lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  return lowerAlphabet[int - 1];
}

//function converts integer into corresponding punctuation//
function toPunctuation (int) {
  let punctuation = ["!","?",",","."," ",";","\"","'"];
  
  return punctuation[int - 1];
}

//final function that takes arr of integers and decodes them according to mode//
function changeMode(arr) {
  let currentMode = "upperCaseMode";
  let translatedArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 27 === 0 && currentMode === "upperCaseMode") {
      currentMode = "lowerCaseMode";
    } else if (arr[i] % 27 === 0 && currentMode === "lowerCaseMode") {
      currentMode = "punctuationMode";
    } else if (arr [i] % 9 === 0 && currentMode === "punctuationMode") {
      currentMode = "upperCaseMode";
    } else if (currentMode === "upperCaseMode") {
      translatedArr.push(toUpperCase((arr[i] % 27)));
    } else if (currentMode === "lowerCaseMode") {
      translatedArr.push(toLowerCase((arr[i] % 27)));
    } else if (currentMode === "punctuationMode") {
      translatedArr.push(toPunctuation((arr[i] % 9)));
    }
  }
  
  return translatedArr.join("");
}

changeMode(integersInArray());

//test case, use these numbers to get the final string "Right? Yes!": 18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10//