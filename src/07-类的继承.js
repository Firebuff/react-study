//因为 水果 和 花儿 都有名字和颜色，所以要创建一个父类植物 Plant， 相当于构造函数的原型对象：prototype

class Plant {
	constructor (name,color) {
		this.name = name
		this.color = color
	}

	saySome () {
		console.log('my name is ' + this.name)
	}
}




/*class Flower {
	constructor (name,color) {
		this.name = name
		this.color = color
	}
}*/


//使用关键字 extends 来继承另一个类的属性
//语法： class 要继承的类名 extends 被继承的类名 {}


class Flower extends Plant {

}






const flower01 = new Flower('sunFlower','pink')

console.log(flower01)

flower01.saySome()

/*
class Fruit {
	constructor(name,color) {
		this.name  = name 
		this.color = color
	}
}*/



// 子类继承父类时，如果要在子类内创建constructor，那么必须要在子类的constructor内部首先调用 super() (写在第一行)
// super 是一个函数，是被继承的父类的构造器的一个引用

class Fruit extends Plant {

	constructor (name,color,flavor) {

		super(name,color) //将new 创建实例时候传递的name 和 color 传给父类的构造器constructor中 (必须写在constructor内部第一行)

		this.name = 'mango' //会覆盖父类的this.name this.color
		this.color = 'red'

		this.flavor = flavor //还可以定义自己的私有属性
	}

	saySome () {
		console.log('what I want is 美女')
	}
}




const fruit01 = new Fruit('apple', 'red', 'sweet')

console.log(fruit01)

fruit01.saySome() //如果 子类 和 父类 都有相同名字的方法，那么子类在调用这个方法时，会调用子类的相同名字的方法（就近原则）


class People {
	constructor (name,age) {
		this.name = name
		this.age = age
	}
	say () {
		console.log(`${this.name}的年龄是${this.age}岁`)
	}
}


class Chinese extends People {
	constructor (name,age,gender) {
		super(name,age)
		this.gender = gender
	}
	hello () {
		console.log(`I want to say hello to all of you present`)
	}
}

var xiaohong = new Chinese('小红',12,'female')

console.log(xiaohong)
xiaohong.say()
xiaohong.hello()