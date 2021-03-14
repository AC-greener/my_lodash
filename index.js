// Array API

function first(array, n) {
  // console.log(array.slice(0, n) )
  return n === undefined ? array[0] :  array.slice(0, n) 
}
first([1,3,4], 2)
first([1,3,4], 3)


function initial(array, n) {
  // console.log(array.slice(0, array.length - (n === undefined ? 1 : n)))
  return array.slice(0, array.length - (n === undefined ? 1 : n))
}
initial([1,3,4,1,4,5])
initial([1,3,4,1,4,5], 4)
initial([1,3,4,1,4,5], 5)


function last(array, n) {
  let res = []
  n ? res = array.slice(array.length - n) : res = array[array.length - 1]
  // console.log(res)
  return res
}
last([1,3,4,5,6], 4)
last([1,3,4,5,6], 3)
last([1,3,4,5,6])

function rest(array, n) {
  // console.log(array.slice(n ? n : 1))
  return array.slice(n ? n : 1)
}
rest([1,23,3])
rest([1,23,3,4], 2)
rest([1,23,3,4,5], 2)

function flatten(array) {
  const res = []
  array.forEach(item => {
    if(item.constructor === Array) {
      res.push(flatten(item))
    } else {
      res.push(item)
    }
  })
  // console.log(res)
  return res
}
function flatten(input, output = []) {
  let index = output.length
  for(let i = 0; i < input.length; i++) {
    let value = input[i]
    if(value.length) {
      flatten(value, output)
      index = output.length
    } else {
      output[index++] = value
    }
  }
  return output
}
// console.log(flatten([1, [2, [44]], [3, [[4]], 5, [[4]]]]))

// function without1(array, ...value) {
//   value.forEach(item => {
//     array = array.filter(v => v !== item)
//   })
//   return array
// }
function without(array, ...value) {
  return array.filter(item => {
    return !value.includes(item)
  })
}

// console.log(without([1,2,3,4], 1,2,3))
// console.log(without([1,2,3,4,1,2,1,3,4,5], 1,2,3))

function union(...value) {
  return Array.from(new Set(flatten(value)))
}
function union1(...value) {
  return flatten(value).filter((e,i,arr)=>{
    return  arr.indexOf(e) == i;
})
}
// function union3(...value) {
//   return [...new Set(flatten(value))]
// }
function union2(...value) {
  const res = []
  const x = flatten(value)
  x.forEach(value => {
    if(!res.includes(value)) {
      res.push(value)
    }
  })
  return res
}
// console.log(union([1, 2, 3], [101, 2, 1, 10], [2, 1]))
// console.log(union1([1, 2, 3], [101, 2, 1, 10], [2, 1]))
// console.log(union2([1, 2, 3], [101, 2, 1, 10], [2, 1]))

//找出多个数组中的交集
function intersection(array) {
  const res = []
  for(let i = 0; i < array.length; i++) {
    let item = array[i]
    if(res.includes(item)) continue
    let j
    for(j = 1; j < arguments.length; j++) {
      if(!arguments[j].includes(item)) break
    }
    if(j === arguments.length) {
      res.push(item)
    }
  }
  return res
}
// console.log(intersection([1, 2, 3], [101, 2, 1, 10,3], [2, , 0,3]))

//已排序的数组去重
function uniq(array, sorted = true) {
  let result = []
  let seen = undefined
  for(let i = 0; i < array.length; i++) {
    let value = array[i]
    if(!i || seen !== value) {
      result.push(value)
    }
    seen = value
  }
  return result
}

function zip(array) {
  const result = []
  array.forEach((item, index) => {
    let v = []
    for(let i = 0; i < arguments.length; i++) {
      v.push(arguments[i][index])
    }
    result.push(v)
  })
  return result
}
function unzip(array) {
  const result = []
  array.forEach((item, index) => {
    let v = []
    for(let i = 0; i < item.length; i++) {
      v.push(array[i][index])
    }
    result.push(v)
  })
  return result
}

// console.table(zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]))
// console.log(unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]))
// compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]

function compact(array) {
  const res = []
  array.forEach(item => {
    if(!!item) {
      res.push(item)
    }
  })
  return res
}
// _.chunk(array, length)
// 将 array 分成多个数组，每个数组包含 length 或更少的项。
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

function chunk(array, length) {
  let l = length
  let tmp = [],  result = []
  for(let i = 0; i < array.length; i++) {
    tmp.push(array[i])
    if(--l === 0 || i === array.length - 1) {
      result.push(tmp)
      l = length
      tmp = []
    }
  }
}
chunk([1,2,3,4,5,6,7,9], 2)

function chunk2(array, length) {
  let  result = []
  for(let i = 0; i < array.length; i += length) {
    result.push(array.slice(i, i + length))
  }
}
chunk2([1,2,3,4,5,6,7,9], 2)

// sortedIndex([10, 20, 30, 40, 50], 35) 使用二分查找确定 value 在 list 中的位置序号

function sortedIndex(array, target) {
  let low = 0, high = array.length
  while(low < high) {
    let mid = Math.floor((low + high) / 2)
    if(array[mid] > target) {
      high = mid
    }  else if(array[mid] < target) {
      low = mid + 1
    } else {
      return mid
    }
  }
  return low
}
// console.log(sortedIndex([1,2,3,4,5,6], 3))
// console.log(sortedIndex2([1,2,3,4,5,6], 3))
function sortedIndex1(array, target) {
  let low = 0, high = array.length
  while(low < high) {
    let mid = Math.ceil((low + high) / 2)
    if(array[mid] > target) {
      high = mid - 1
    }  else if(array[mid] < target) {
      low = mid
    } else {
      return mid
    }
  }
  return low
}
sortedIndex1([1,2,3,4,5,6], 3)

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

{
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
}