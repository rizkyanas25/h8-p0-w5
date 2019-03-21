function changeVocals (str) {
  //code di sini
  var result = ''
  var check = 'aiueoAIUEO'
  var change = 'bjvfpBJVFP'
  for (var i = 0; i < str.length; i++) {
    var flag = false
    for (var j = 0; j < check.length; j++) {
      if (str[i] === check[j]) {
        result += change[j]
        flag = true
      } 
    }
    if (flag === false) {
      result += str[i]
    }
  }
  // console.log('changeVocals = ' + result)
  return result
}

function reverseWord (str) {
  //code di sini
  var result = ''
  for (var i = 0; i < str.length; i++) {
    result = str[i] + result
  }
  // console.log('reverseWord = ' + result)
  return result
}

function setLowerUpperCase (str) {
  //code di sini
  // var result = str.toUpperCase()
  result = ''
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase()
    } else if (str[i] === str[i].toLowerCase()) {
      result += str[i].toUpperCase()
    }
  }
  // console.log('setLowerUpperCase = ' + result)
  return result
}

function removeSpaces (str) {
  //code di sini
  if (str.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var result = ''
  for (var i = 0; i < str.length; i++) {
    if(str[i] !== ' ') {
      result += str[i]
    }
  }
  // console.log('removeSpaces = ' + result)
  return result
}

function passwordGenerator (name) {
  //code di sini
  var changeVoc = changeVocals(name)
  var reverse = reverseWord(changeVoc)
  var setLUC = setLowerUpperCase(reverse)
  var remSpace = removeSpaces(setLUC)
  // return removeSpaces(setLowerUpperCase(reverseWord(changeVoc(name)))) 
  return remSpace
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'