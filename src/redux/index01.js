
import React from 'react'

import ReactDom from 'react-dom'

import { bindActionCreators, createStore } from 'redux'

import { Provider, connect } from 'react-redux'

// 初始化数据
const initData = {count: 0}


// 对 state 的一些操作, 根据 action 的类型进行的操作
const counter = (state = initData, action) => {

	switch (action.type) {
		case 'PLUS': 
			return { count: state.count + 1 }

		case 'MINUS': 
			return { count: state.count -1 }
		default:
			break
	}

	return state
}

// 创建 store
const store = createStore(counter)


// action类型
function plus () {
	return { type: 'PLUS' }
}

function minus () {
	return { type: 'MINUS' }
}

function mapStateToProps (state) {
	return {
		count: state.count
	}
}
let a = { plus, minus } // { plus: function, minus: function }


/*
function mapDispatchToProps (dispatch) {
	// return bindActionCreators( { plus, minus }, dispatch)
	return {
		plus: () => {dispatch (plus())},
		minus: () => {dispatch(minus())}
	}
}*/


// mapDispatchToProps 既可以是一个对象也可以是一个函数， 如果是一个对象，他会自动调用 bindActionCreators 来能让你直接调用，而不用dispatch
const mapDispatchToProps = { plus, minus }


// 创建一个组件
class Counter extends React.Component {
	render () {
		console.log(this.props)
		let { minus, plus, count } = this.props
		return (
			<div>
				{/*<button onClick={ plus }>+</button>*/}
				
				<button onClick={ () => { this.props.dispatch({type: 'PLUS'}) } }>+</button>

				<span> {count} </span>

				{/*<button onClick={minus}>-</button>*/}

				<button onClick={ () => { this.props.dispatch({type: 'MINUS'}) } }>-</button>
			</div>
		)
	}
}

// 类似于高阶组件的用法; connect 方法中如果不传入 mapDispatchToProps，则子组件会接收到一个dispatch

// const ConnectCounter  = connect(mapStateToProps, mapDispatchToProps)(Counter)
const ConnectCounter  = connect(mapStateToProps)(Counter)


class ReduxSample extends React.Component {
	render () {
		return (
			<Provider store={ store }>
				<ConnectCounter></ConnectCounter>
			</Provider>
		)
	}
}


ReactDom.render (<ReduxSample></ReduxSample>, document.getElementById('app'))

