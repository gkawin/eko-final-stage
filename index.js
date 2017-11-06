

var inputs = [ 44, 2, 29, 455, 28, 2, 12, 34, 29, 3 ,44, 66,912,219,28]

function dup (inputs) {
  var result = []
  inputs.sort()
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i+1] === inputs[i]) {
      result.push(inputs[i])
    }
  }
  return result
}

console.log(`====${inputs}=====`, dup(inputs))
