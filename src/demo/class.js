//1. 构造函数法
function Cat() {
  this.name = '大毛'
}
var cat1 = new Cat()
alert(cat1.name) //大毛

Cat.prototype.makeSound = function() {
  alert('喵喵喵')
}

//2. Object.create()法
var Cat = {
  name: '大毛',
  makeSound: function() {
    alert('喵喵喵')
  }
}
var cat1 = Object.create(Cat)
alert(cat1.name) //大毛
cat1.makeSound() //喵喵喵
//新式浏览器

//3. 极简主义法
var Cat = {
  createNew: function() {
    //some code here
    var cat = {}
    cat.name = '大毛'
    cat.makeSound = function() {
      alert('喵喵喵')
    }
    return cat
  }
}
var cat1 = Cat.createNew()
cat1.makeSound() //喵喵喵
//继承
var Animal = {
  createNew: function() {
    var animal = {}
    animal.sleep = function() {
      alert('睡懒觉')
    }
  }
}
var Cat = {
  createNew: function() {
    //some code here
    var cat = {}
    cat = Animal.createNew() //继承
    cat.name = '大毛' //私有
    cat.makeSound = function() {
      alert('喵喵喵')
    }
    return cat
  }
}
var cat1 = Cat.createNew()
cat1.sleep()
//私有属性和方法，只要不定义在cat上属性和方法都是私有的
//数据共享
var Cat = {
  sound: '喵喵',
  createNew: function() {
    var cat = {}
    cat.makeSound = function() {
      alert(Cat.sound)
    }
    cat.changeSound = function(x) {
      Cat.sound = x
    }
    return cat
  }
}
