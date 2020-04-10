import React from 'react'

class Plant extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			msg: '我是父组件的值'
		}
	}

	render () {
		return <div>
			<h1>这是父组件</h1>
			<hr/>
			<Tree msg={this.state.msg}></Tree>
			<button className="btn" onClick={this.changeMsg}>修改父组件中要传递给子组件的值</button>
		</div>
	}

	changeMsg = () => {
		this.setState({
			msg: '被修改了'
		})
	}

}

class Tree extends React.Component {

	constructor (props) {
		super(props)
		this.state = {

		}
	}

	render () {
		return <div>
			<h1>这是子组件</h1>
			<p>{this.props.msg}</p>
		</div>
	}

	// 周期函数 componentWillReceiveProps： 组件将要接收外界传递过来的新的props属性值
	 componentWillReceiveProps (nextProps) {

		console.log('我被触发了')

		// 当子组件第一次渲染到页面上的时候，不会触发这个周期函数

		// 只有在 当父组件中，通过某个事件重新修改了要传递给子组件的值时，才会触发这个函数

		// 这个周期函数被触发的时候，如果使用 this.props.xxx 来获取外界传递过来的值，读取到的是旧的值，不是事件触发时候改变的最新的值
		
		// 如果要获取最新的值，需要通过 componentWillReceiveProps 的参数列表来获取
		console.log(this.props.msg)
		console.log(nextProps.msg)
	}

}

export default Plant