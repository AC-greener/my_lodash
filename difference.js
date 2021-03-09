// difference(array, [values])
// difference([2, 1], [2, 3]);  => [1]
// difference([2, 1,5], [2, 3], [4]); =>[1, 5]
// Returns the new array of filtered values.

function difference(array, ...rest) {
  let v = [], result = []
  rest.forEach(item => {
    v = v.concat(item)
  })
  for(let i = 0; i < array.length; i++) {
    let f = false
    for(let j = 0; j < v.length; j++) {
      if(array[i] === v[j]) {
        f = true
        break
      }
    }
    if(!f) {
      result.push(array[i])
    }
  }
  // console.log(result)
  return result
}
difference([2, 1, 5], [2, 3], [4])
difference([2, 1, 5], [2, 3], [4, 5])