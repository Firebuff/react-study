import React from 'react'

 export default class Inputs extends React.Component {

	constructor() {
		super()
		this.state = {
			value: 'I am value'
		}

		this.getInputVal = this.getInputVal.bind(this) //绑定this


	}

	render () {
		return <div>
			{/* 
				如果文本框的 value 值绑定了 state的状态 ，如果不提供 onChange 函数 ，
				那么文本框只能读取state的值，文本框无法输入文字 （设置了readOnly属性也一样）
			*/}
			{/*<input type="text" value={this.state.value} style={ {width: '50%'} } readOnly/>*/}


			{/*  onClick={ 这里是一个函数或函数引用 }, 这里的箭头函数就是一个匿名函数  */}

			<input type="text" value={this.state.value} style={ {width: '50%'} } onChange={ (e) => { this.textChanged(e)}} ref='input'/>

			<input type="text" value={this.state.value} style={ {width: '50%'} } onChange={ this.show } ref='input'/>

			<div style={ {'marginTop':'20px'} }>
				<button onClick={ () => { this.changeValue() }}>改变值</button>
			</div>
			<div style={ {'marginTop':'20px'} }>{this.state.value}</div>
		</div>
	}

	changeValue () {
		this.setState({
			value: 'value has been changed'
		})
	}
	//在react没有类似 vue 那样的数据双向绑定的功能，数据只能单向绑定到文本框input上，却不能自动从文本框同步到state中（单向流）
	textChanged = (e) => {

		console.log('vlue is changed')
		/*
			要获取文本框的值有 方法1.通过监听 输入框的事件对象 e 来获取
			console.log(e.target.value)
			var newVlue = e.target.value
		*/
		//要获取文本框的值有 方法2. input 上设置 ref="xxx" 属性，然后通过 this.refs.xxx.value 获取input的值
		var newVlue = this.refs.input.value

		//拿到文本框的最新的值后通过 this.setState 将最新的值设置回state中，完成双向绑定的需求 this.setState 是异步的，要想拿到最新的 this.state.value 要在回调里面获取
		this.setState({
			value: newVlue
		}, () => {
			console.log(this.state.value) //最新的值
		})
	}


	show = (e) => {

		// 箭头函数是没有 this 的，里面的this指向谁只有在运行的时候才能确定 （被谁调用就指向谁）
		
		// 如果这里不使用箭头函数，里面的this 是不会绑定 事件的触发者（输入框） 的this
		
		console.log('hi')
		console.log(this)
		console.log(e.target.value)
	}


	getInputVal (e) {
		console.log(this)
		console.log(e)
	}
	
}