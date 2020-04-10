import React from 'react'

export default class Event01 extends React.Component {
	constructor () {
		super()
		this.state = {
			msg: 'hello'	
		}
	}
	render () {
		return <div>
			<h3>点击事件练习</h3>
			{/*<button onClick={function(){console.log(122)}}>click me!</button>*/}
			<button onClick={ () => { this.clickMe() } }>click me!</button>
			<div>{this.state.msg}</div>
		</div>
	}

	clickMe () {
		console.log(this)

		//this.setState({})是一个异步函数方法，如果想拿到更改后最新的值要调用他的回调函数
		this.setState({
			msg: 'hi'
		},function() {
			console.log(this.state.msg)
		})
	}
}