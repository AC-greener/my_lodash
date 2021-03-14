{
  function mapObject(obj, fn) {
    for(var k in obj) {
      let value = fn(obj[k], k)
      obj[k] = value
    }
    return obj
  }
  obj = {
    x: 1,
    y: 10
  }

  // console.log(mapObject(obj, (value, k) => value + 5))
}

{
  // create(prototype, props) 创建具有给定原型的新对象，可选附加 props 作为 own 的属性。

  function create(prototype, props) {
    var f = function() {}
    f.prototype = prototype
    var result = new f()
    // f.prototype = null
    result.name = 1
    return result
  }
  function a() {
    this.name = 'a'
  }
  // a.prototype.age = '18'

  b = create(a.prototype)
  // console.log(b)
  // console.log(b.constructor === a)
  // console.log(a.constructor === Function)
}
{
  // _.extend(destination, *sources)
// 将 source 对象中的所有属性简单地覆盖到 destination 对象上，

  function extend(destination, obj) {
    for(let key in obj) {
      destination[key] = obj[key]
    }
    return destination
  }
  var triangle = {a: 1, b: 2, c: 3};

  function ColoredTriangle() {
    this.color = 'red';
  }
  
  ColoredTriangle.prototype = triangle;
  
  var x = new ColoredTriangle();
  x.age = 18
  console.log(extend({name: 'moe'}, x))
}

{
  function isArray(x) {
    return Object.prototype.toString.call(x) === '[object Array]'
  }
/*
   Object.prototype.toString.call(function(){})
   "[object Function]"
   Object.prototype.toString.call(null)
   "[object Null]"
   Object.prototype.toString.call(a)
  "[object Symbol]"
  Object.prototype.toString.call(new Map())
  "[object Map]"

*/
}