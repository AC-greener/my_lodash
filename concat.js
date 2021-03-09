// concat(array, [values])
// concat(array, 2, [3,4, [5, 6]], [[4]]);  [1, 2, 3, 4, [5, 6], [4]]

function concat(array) {
  const restValue = Array.from(arguments).slice(1)
  const length = restValue.length
  let index = 0
  while(index < length) {
    if(restValue[index].length) {
      restValue[index].map(item => array.push(item))
    } else {
      array.push(restValue[index])
    }
    index++
  }
  return array
}
// console.log(concat([1], 2, [3,4, [5, 6]], [[4]]))