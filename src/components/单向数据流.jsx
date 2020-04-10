import React from 'react'

class Plant extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			msg: 'what are doing?',
			hello: 'hello, are you ok?'
		}
	}
	render () {
		return <div>
			{/* input输入框里面要么定义一个 readOnly 属性，要么定义一个 onChange事件 ，否则会报错*/}

			{/* 设置readOnly 属性后文本框不能操作了，不能输入, 只能读取 */}
			<input type="text" value={this.state.msg} readOnly/>

			{/* 如果设置了 onChange 事件，可以通过改变this.state 里面的值来实现改变文本框的值（react没有直接 vue的 v-model功能），要自己去实现 */}

			{/* 只要在文本框内输入，就会触发 onChange事件*/}

			<input className="input" style={{display:'block',marginTop:'20px'}} type="text" value={this.state.hello} onChange={this.changeInput} ref="input"/>
		</div>
	}
	changeInput = (e) => {
		// e.target 表示触发这个事件的事件源对象，得到是是一个原生的 JS DOM 对象

		console.log(e.target)


		/*
			获取input里面的值的方式有
			1. 通过 document.getElementsByClassName(className) 或者 id来
			2. 通过ref 
			3. 通过事件 e

		*/
		console.log(1111)

		// var k = document.getElementsByClassName('input')[0].value

		// var k = this.refs.input.value

		var k = e.target.value
		
		//将获取到的 value设置回到 this.state 中来实现数据的双向绑定

		console.log(k)
		this.setState({
			hello: k
		})

	}
}

export default Plant