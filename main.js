var string;
var numbersArr;

function printText(array) {
  var text = '';
  console.log(array.length)
  for(let i = 0; i<array.length; i++){
    if(i===0){
      text += `Участок №${i+1} - ${array[i]} га, `;
    }
    else if(i===array.length-1){
      text += `участок №${i+1} - ${array[i]} га. `;
    }
    else{
      text += `участок №${i+1} - ${array[i]} га, `;
    }
  }
  console.log(text);
  return text;
}

function test(){
  string = document.querySelector('textarea').value;
  console.log(string);
  numbersArr = string.split('-');

  document.querySelector(".text").textContent = printText(numbersArr);
}