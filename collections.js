{
  function reduce(array, fn, init) {
    let accumulater, i
    if(init === undefined) {
      accumulater = array[0]
      i = 1
    } else {
      accumulater = init
      i = 0
      for(; i < array.length; i++) {
        accumulater = fn(accumulater, array[i], i, array)
      }
    }

    // console.log('acc, ', accumulater)
    return accumulater
  }

  //做filter
  reduce([1,2,3,4], (accumulater, current) => {
    if(current % 2 === 0) {
      accumulater.push(current)
    }
    return accumulater
  }, [])

  // 做 数组去重
  reduce([1,2,3,4,3,3,3,3,4,1,-1,0], (accumulater, current) => {
    if(accumulater.indexOf(current) === -1) {
      accumulater.push(current)
    }
    return accumulater
  }, [])
  //sum
  reduce([1,2,3,4], (accumulater, current) => {
    return accumulater + current
  })

  // 做flatten
  reduce([[1,2,3], [4,5], [6]], (accumulater, current) => {
    return accumulater.concat(current)
  }, [])
}

{
  // var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  // => 2
  function find(array, fn) {
    let reuslt
    for(let i = 0;  i < array.length; i++) {
      if(fn(array[i])) {
        reuslt = array[i]
        break
      }
    }
    console.log(reuslt)
    return reuslt
  }
  find([1, 2,  4, 5, 6], function(num){ return num % 3 == 0; })
}

{

  // _.shuffle(list) 返回一个随机乱序的 list 副本, 使用Fisher-Yates shuffle 来进行随机乱序.
  function randomx(min, max) {
    return min + Math.floor(Math.random() * (max - min))
  }
  function shuffle(list) {
    const length = list.length - 1
    for(let i = 0; i < length; i++) {
      const random = randomx(i, length)
      const temp = list[i]
      list[i] = list[random]
      list[random] = temp
    }
    console.log(list)
  }
  shuffle([1,2,3,4,5,6])
}
