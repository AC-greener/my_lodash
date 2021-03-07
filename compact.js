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

// console.log(compact([0, 1, false, 2, '', 3]))