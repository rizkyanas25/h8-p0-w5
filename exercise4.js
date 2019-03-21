function totalDigitRekursif(angka) {
  // you can only write your code here!
  if (angka > 0) {
    var arr = angka.toString().split('')
    var num = parseInt(arr[0])
    var newArr = parseInt(arr.slice(1).join(''))
  } else {
    return 0
  }
  // console.log(arr)
  // console.log(num)
  // console.log(newArr)
  return  num + totalDigitRekursif(newArr)
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5