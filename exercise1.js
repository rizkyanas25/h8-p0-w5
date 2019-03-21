function sorting(arrNumber) {
  // code di sini
  var done = false
  while (!done) {
    done = true
    for (var i = 1; i < arrNumber.length; i++) {
      if(arrNumber[i-1] > arrNumber[i]) {
        done = false
        var temp = arrNumber[i-1]
        arrNumber[i-1] = arrNumber[i]
        arrNumber[i] = temp
      }
    }
  }
  // console.log(arrNumber)
  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  console.log(arrNumber)
  var result = arrNumber
  if (result.length === 0) {
    return ''
  }
  if (result.length === 1) {
    return 'angka paling besar adalah ' + result[0][0] + ' dan jumlah kemunculan sebanyak ' + result[0][1] + ' kali'
    } 

  var max = result[result.length-1]
  var count = 0
  for (var i = 0; i < result.length; i++) {
    if (result[i] === max) {
      count++
    }
  }
  
  return 'angka paling besar adalah ' + max + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''