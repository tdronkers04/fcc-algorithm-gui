// 01. SUM-ALL-NUMBERS-IN-A-RANGE

function sumAll() {
    let num1 = parseInt(document.getElementById('01-a').value);
    let num2 = parseInt(document.getElementById('01-b').value);
    let arr = [num1, num2];

    let sorted = arr.sort(function(a, b){return b-a});
    let upper = sorted[0];
    let lower = sorted[1];
    let newArray = [];
    
    for(let i = upper; i >= lower; i--) {
      newArray.push(i);
    }
  
    let sum = newArray.reduce((sum, item) => sum + item)
    
    document.getElementById('01-result').innerHTML = sum;
  };
  
  