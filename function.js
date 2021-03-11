// 函数相关API

{
  // 绑定函数 function 到对象 object 上, 也就是无论何时调用函数, 函数里的 this 都指向这个 object
  function bind(fn, object, ...args) {
    return function() {
      return fn.apply(object, args.concat(Array.from(arguments)))
    }
  }
  function fn() {
    // console.log('this', this.a)
    // console.log('arguments', arguments)
  }
  bar = bind(fn, {a: 'zhang san'}, 4,5,6)
  bar(b = 1, c = 2, d = 3)
}


{
  //partial
  var subtract = function(a, b) { return b - a; }
  var subtract2 = function(a, b) { 
    return a.concat(b)
  }
  function partial(fn, ...args) {
    return function(...args2) {
      return fn(args, args2)
    }
  }
  x = partial(subtract, 5)
  // console.log(x(20))
  y = partial(subtract2, [3,5])
  // console.log( y([1,2]))
}

{
  // throttle(function, wait, [options])
  function throttle(fn, cd) {
    let timerId = undefined
    function innerFn() {
      if(!timerId) {
        timerId = setTimeout(() => {
          fn()
          clearTimeout(timerId)
          timerId = undefined
        }, cd)
      }
    }
    innerFn.cancel = function() {
      clearTimeout(timerId)
      timerId = undefined
    }
    return innerFn
  }
  function f() {
    // console.log(1)
  }
  x = throttle(f, 2000)
}


{
  function debounce(fn, cd) {
    let timerId = undefined
    function createTimer() {
      return setTimeout(() => {
        fn()
        clearTimeout(timerId)
        timerId = null
      }, cd)
    }
    return function() {
      if(timerId) {
        clearTimeout(timerId)
      }
      timerId = createTimer()
    }
  }
  function f() {
    // console.log(1)
  }
  x = debounce(f, 3000)
  x()
}

{
  function once(fn) {
    let used = false
    return function() {
      if(!used) {
        used = true
        fn()
      }
    }
  }
  function f() {
    // console.log(1)
  }

  x = once(f)
  x()
  x()
  x()
  x()
}


{
  function compose(...args) {
    return function(a) {
      let result = a
      for(let i = args.length - 1; i >= 0; i--) {
        result = args[i](result)
      }
      return result
    }
  }
  var greet2    = function(name){ return "tongtong: " + name; };
  var greet    = function(name){ return "hi: " + name; };
  var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
  var welcome = compose(greet2, greet, exclaim);
  console.log(welcome('moe'))
}