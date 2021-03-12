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
  
 // 02. DIFF-TWO-ARRAYS
 
 function diffArray() {
    let arr1 = document.getElementById('02-a').value.split(",").map(item => item.trim());
    let arr2 = document.getElementById('02-b').value.split(",").map(item => item.trim());

    let newArr = [];
    let lesserArr;
    let greaterArr;
  
    if (arr1.length > arr2.length) {
      greaterArr = arr1.slice();
      lesserArr = arr2.slice();
    } else {
      greaterArr = arr2.slice();
      lesserArr = arr1.slice();
    }
    
    for (let i = 0; i < greaterArr.length; i++) {
      if (lesserArr.includes(greaterArr[i]) === false) {
          newArr.push(greaterArr[i])
        }
    }
    for (let i = 0; i < lesserArr.length; i++) {
      console.log(lesserArr[i])
      if (greaterArr.includes(lesserArr[i]) === false) {
          newArr.push(lesserArr[i])
        }
    }
  
    let sorted = newArr.sort(function(a, b){return a-b});
    document.getElementById('02-result').innerHTML = newArr;
  };

  // SEEK-AND-DESTROY

  function destroyer(arr) {
    
    let arr1 = document.getElementById('03-a').value.split(",").map(item => item.trim());
    let arr2 = document.getElementById('03-b').value.split(",").map(item => item.trim());
    
    let filteredArr = arr1.filter(
      function(e) {
        return this.indexOf(e) < 0;
      },
      arr2
  );
    document.getElementById('03-result').innerHTML = filteredArr;
  }
  
  // WHEREFORE ART THOU

//   function whatIsInAName(collection, source) {
    
//     let arr = [];
    
//     const srcKeys = Object.keys(source);
//     console.log(srcKeys)
  
//     return collection.filter(function(obj){
//       for (let i = 0; i < srcKeys.length; i++) {
//         if (
//           !obj.hasOwnProperty(srcKeys[i]) || //check if the object in the collection doesn’t have the key 
//           obj[srcKeys[i]] !== source[srcKeys[i]] // the property value doesn’t match the value in source.
//         ) {
//           return false
//         }
//       }
//       return true;
//     })
  
//   }