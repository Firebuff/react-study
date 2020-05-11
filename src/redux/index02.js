
import React from 'react'

import ReactDom from 'react-dom'

import { bindActionCreators, createStore, applyMiddleware } from 'redux'

import { Provider, connect } from 'react-redux'

import thunk from 'redux-thunk'

// 使用 redux-devtool
import { composeWithDevTools } from 'redux-devtools-extension'



// 初始化数据
const initData = {count: 0, name: 'Jim', has: {car: 'motorbike'}}


// 对 state 的一些操作, 根据 action 的类型进行的操作
const counter = (state = initData, action) => {

	switch (action.type) {
		case 'PLUS': 
		console.log(action)
			// 修改数据后要保留其他的数据
			return { ...state, count: state.count + action.number }

		case 'MINUS': 
			return { ...state, count: state.count -1 }
		default:
			break
	}

	return state
}

// 创建 store, 并使用redux-devTools
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))


// action类型
function plus (val) {


	// return { type: 'PLUS', number: 20 }
	
	// 使用redux-thunk 后， action可以返回一个函数
	return function (dispatch) {
		setTimeout(() => {
			dispatch({ type: 'PLUS', number: val })
			
		}, 1000) 
	}
}

function minus () {
	return { type: 'MINUS' }
}

function mapStateToProps (state) {
	return {
		count: state.count,
		name: state.name
	}
}
let a = { plus, minus } // { plus: function, minus: function }



/*function mapDispatchToProps (dispatch) {
	// return bindActionCreators( { plus, minus }, dispatch)
	return {
		plus: () => {dispatch (plus())},
		minus: () => {dispatch(minus())}
	}
}
*/





// 创建一个组件
class Counter extends React.Component {
	render () {
		console.log(this.props)
		let { minus, plus, count } = this.props
		return (
			<div>
				<button onClick={ () => { plus(100) } }>+</button>
				
				<span> {count} </span>

				<button onClick={minus}>-</button>
				
			</div>
		)
	}
}


// const ConnectCounter  = connect(mapStateToProps, mapDispatchToProps)(Counter)

const ConnectCounter  = connect(mapStateToProps, {plus, minus})(Counter) //第二个参数也可以直接传递一个对象(对象的属性值必须是一个函数），他会自动调用 bindActionCreators



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

