
//构造函数创建对象

function Person (name,age) {
	this.name = name
	this.age = age
}

//实例共用的方法一般挂载在构造函数的原型上 prototype

Person.prototype.sayHi = function() {console.log('实例访问的原型上的方法' + this.name)}



/*
	new 一个构造函数的时候，有3步动作：
 	1. 从内存中开辟一块空间 2. 将传递的参数写入开辟出来的空间上
 	3. 将这块空间的指针指向 要赋值的变量， 如p1
*/


const p1 = new Person ('Robert',18)

console.log(p1) 


p1.sayHi() //输出Robert：实例访问的原型上的方法




// p1.name p1.age 都是 实例属性
console.log(p1.name, p1.age)


/*
	概念---静态属性：
	
	通过构造函数直接访问到的属性,实例无法访问
*/

Person.id = '985'

console.log(Person.id) //id是构造函数的属性
console.log('p1.id: ' + p1.id)  //输出undefined   由于id是构造函数的属性，因而无法通过实例来访问 ，如 p1.id 就访问不到


//静态方法

Person.fuck = function () {
	console.log('I want to make food!')
}

// p1.fuck() //实例无法访问构造函数的fuck方法

Person.fuck()










//使用关键字class创建对象

class Animal {

	//每一个类中都有一个构造器constructor， 用来接收new 创建实例时候传递的参数，如上面的this.age this.name
	//如果创建类时候没有 写 或 指定 构造器constructor，则默认这个类内存在一个空的构造器，constructor() {}
	//在new实例时候，会首先执行constructor里面的代码
	constructor (name,age) {
		//也是使用this关键字来指向new 出来的实例，实例属性
		this.name = name
		this.age = age
	}

	//创建类的静态属性 使用关键字 static ，只有类Animal 能够访问，实例dog1无法访问

	static catagory = '属于动物'

	//在类中定义实例的方法
	run () {
		console.log(this.name + 'can run very fast!')
	}
	//使用关键字创建类的静态方法（只有类Animal 能够访问，实例dog1无法访问）
	static love () {
		console.log('i want to fly')
	}


	
}

const dog1 = new Animal('大金毛', 20)

console.log(dog1)


// dog1.anme 和 dog1.age 都是 实例属性

console.log(dog1.name, dog1.age)


console.log(Animal.catagory)  // 属于动物


console.log(dog1.catagory) //undefined 实例无法访问 类 的静态属性

dog1.run()

// dog1.love() //实例无法访问类的静态方法 love

Animal.love()

/*

注意，在类的大括号{}内只能写构造器，实例方法，实例属性 ， 静态方法（要使用关键字static声明）

 ，静态属性（要使用关键字static声明）

 */


//class类 创建实例对象的方法还是使用原来构造函数的方法实现的，只不过书写的形式改变而已，是一种语法糖