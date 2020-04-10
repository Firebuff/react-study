// import React, {Component} from 'react'  // 也可以直接使用Component： 
// class 组件名称 extends Component {render() {return <div></div>}}


import React from 'react'




//使用class类 创建react组件
// 基本使用方式： 继承 React.Component

/*	class 组件名称 extends React.Component {

		render () { //render函数必须不可少 

			return <div>这是 使用class类关键字创建的组件</div>   //render函数中必须要返回jsx虚拟dom 结构，或者null
		}
	}
*/

const movie01 = class Movie extends React.Component {
	constructor () {
		super() //因为继承了React.Component这个父类，所以自定义的构造器中，必须先调用super()
		this.state = { //this.state相当于vue中的data
			msg: 'hello,are you ok?'
		}
	}



	//render 函数的作用是 渲染当前组件对应的DOM元素
	render () {
		this.state.msg = '厉害了，居然修改了我！' //state里面的数据都是可读可写的
		
		//在class类关键字创建的组件中，如果要使用外界传递过来的数据，不需要用形参接收，可以直接使用this.props.xxx来读取
		return <div>123 + {this.props.name} ---{this.props.age}---{this.props.gender}---{this.state.msg}</div>
		// return null
	}
}

export default movie01