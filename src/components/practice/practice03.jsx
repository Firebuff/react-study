import React  from 'react'

import ReactDom from 'react-dom'


class Father extends React.Component {

	constructor () {
		super()
		this.state = {
			name: 'father',
			gift: 'a car'
		}
	}

	render () {
		console.log('render')
		return <div>
			<p ref="hoo">hoo</p>
			<h3>{ this.state.name }</h3>
			<Son gift={ this.state.gift } changeHandle = { this.changeGift.bind(this) } ></Son>

			<button onClick={ this.changeVal.bind(this) }>更改值</button>
		</div>
	}

	getName () {
		console.log(this.state.name)
	}

	changeVal () {
		this.setState({
			name: this.state.name + 'hehe'
		})
	}
	changeGift () {
		this.setState({
			gift: 'a gun'
		})
	}



	/* 这里是生命周函数开始 */

	UNSAFE_componentWillMount () {

		// 此处除了不可获取节点外，其他的操作均可

		console.log(this.state)

		this.getName ()

		console.log('willMount')

		console.log(this.refs.hoo)


	}

	componentDidMount () {
		// 此处可以进行节点操作，发起网络请求获取数据
		console.log('didMount')

		console.log(this.refs.hoo)
	}

	shouldComponentUpdate () {

		// 当修改 state 里面的值时， 会触发这个函数； 此周期函数内要返回一个 false 或者 true
		console.log('should update')
		return true
		
	}

	UNSAFE_componentWillUpdate () {
		console.log('will update')
	}


	componentDidUpdate () {
		console.log('did upate')
	}

	UNSAFE_conponentWillRecieveProps () {
		console.log('will recieve props')
	}
}







class Son extends React.Component {
	constructor () {
		super()
	}

	render () {

		return <div>
			<h3>son</h3>

			<p>{ this.props.gift }</p>

			<button onClick = {this.props.changeHandle } >son button </button>
		</div>
	}
	
	UNSAFE_componentWillMount () {

		

		// 此处除了不可获取节点外，其他的操作均可

		// console.log(this.state)

		console.log('son--> willMount')

	}

	componentDidMount () {
		// 此处可以进行节点操作，发起网络请求获取数据
		console.log('son--> didMount')

		// console.log(this.refs.hoo)
	}

	shouldComponentUpdate () {

		// 当修改 state 里面的值时， 会触发这个函数； 此周期函数内要返回一个 false 或者 true
		console.log('son--> should update')
		return true
		
	}

	UNSAFE_componentWillUpdate (nextProps, nextState) {

		console.log(nextProps)
		console.log('son--> will update')
	}


	componentDidUpdate () {
		console.log('son--> did upate')
	}



	UNSAFE_componentWillReceiveProps (nextProps) {

		console.log(nextProps) // 可以获取到更改后的 props
		console.log('son--> will recieve props')
	}

}


ReactDom.render(<div>
		<Father></Father>
	</div>, document.getElementById('app')) 






/*
	执行顺序： (父组件)

	初次加载页面时： willMount => render => didMount

	页面中的 state 更改时： shouldUpdate => willUpdate => render => didUpdate

	


	在父组件中更改传递到子组件中 props 时候


	should update => will update => render => son--> son-- will recieve props=> son-- should update => son-- will update => son-- did upate => did upate

	也就是说，在父组件中 执行 render 时，就会执行子组件的一系列周期函数；等 子组件的 周期函数执行完毕再执行 父组件的 diUpdate 
	

 */