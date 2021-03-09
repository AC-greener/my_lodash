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

