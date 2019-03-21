function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (angka <10) {
    return angka
  } else {
    var result = 1
    var arr = angka.toString().split('')
    for (var i = 0; i < arr.length; i++) {
      result = result * arr[i]
    }
  }
  // console.log(arr)
  // console.log(result)
  return kaliTerusRekursif(result) 
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6