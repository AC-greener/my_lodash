//chunk(array, [size=1])
// => [['a', 'b'], ['c', 'd']]

//青铜
function chunk(array, size) {
  if(size === 0) return []
  let res = []
  let temp = []
  let number = 1
 
  array.forEach((item, index) => {
    if(number > size) {
      number = 1
      res.push(temp.slice(0))
      temp = []
    }
    temp.push(item)
    number++
    if(index + 1 === array.length) {
      res.push(temp.slice(0))
    }
  })
  return res
}
//白银
function chunk2(array, size) {
  if(size <= 0) return []
  let resIndex = 0
  let index = 0 
  let length = array.length
  const res = []
  while(index < length) {
    res[resIndex++] = array.slice(index, index += size)
  }
  return res
}

// console.table(chunk2(['a', 'b', 'c', 'd'], 2))
// console.table(chunk2(['a', 'b', 'c', 'd'], 3))
// console.table(chunk(['a', 'b', 'c', 'd'], 0))