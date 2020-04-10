import React from 'react'
import ReactDom from 'react-dom'

import PropsTypes from 'prop-types'


import Titile from '@/components/practice/practice01.jsx'

/*let nameArr = [
	'程咬金',
	'孙悟空',
	'典韦'
]

let colors = ['red','blue','green']

let jsxArr = nameArr.map((item, index) => {
	return <li key={index} style={ {color: colors[index], backgroundColor: 'lightblue', 'marginTop': 10 + 'px'} }>{item}</li>
})

let ul = <ul>{jsxArr}</ul>

ReactDom.render(<div>
		{ ul }

		{
			['中国','美国','俄罗斯'].map((item, index) => {

				return <p key={index}>{item}</p>
			})
		}


	</div>,document.getElementById('app'))
*/


function P (props) {
	return <p>
		<span style={ {color: props.color} }>{ props.name }</span>
		<span style={ {color: props.color} }>{ props.type }</span>
	</p>
}

class Name extends React.Component {
	constructor () {
		super()

		this.state = {
			name: 'hello'
		}
	}

	render () {
		return <div>{this.state.name}
			<p>{this.props.name}</p>
			<p>{this.props.type}</p>
		</div>
	}
}


class List extends React.Component {
	constructor () {
		super()
	}
	render () {
		let list = null
		if (this.props.dataList && this.props.dataList.length) {
			list = this.props.dataList.map( (item, index) => {
				return <li key={index}>{item}</li>
			})
		}
		return <ul>{ list }</ul>
	}
}



let data = {
	name: '程咬金',
	type: 'tank',
	color: 'red'
}

let title = {
	title: 'today is a good day!',
	who: 'I am who I am'
}

let dataList = ['下雨','下雪','下冰雹']



class Input extends React.Component {
	constructor () {
		super()
		this.state = {
			value: 'hello'
		}

		this.show = this.show.bind(this)
	}
	render () {
		// onChange={ (e) => { this.inputChange(e) } }
		return <input type="text" value={this.state.value} onChange={  this.show  } />
	}

	inputChange (e) {

		console.log(this)

		this.setState({
			value: e.target.value
		}, () => {
			console.log(this.state.value)
		})
		console.log(this.state.value)
	}

	show (e) {
		console.log('hi')
		console.log(this)
		console.log(e.target.value)
	}
	

}


class Pop extends React.Component {
	constructor () {
		super()
		this.state = {
			name: 'lucy'
		}
	}

	render () {

		return <div>
			<h3>{ this.state.name }</h3>
			<button onClick= { this.changeName } >更改值</button>

			<PopChild name={ this.state.name } ></PopChild>
		</div>
	}

	changeName = () => {
		this.setState({
			name: 'robert'
		})
	}

}

class PopChild extends React.Component {
	constructor () {
		super()
	}

	render () {
		return <p>{ this.props.name }</p>
	}

	componentWillReceiveProps (nextProps) {
		console.log(1111)
		console.log(1111)
		console.log(nextProps)
	}
}


// 组件逐层传值

class Grandpa extends React.Component {
	constructor () {
		super ()

		this.state = {
			name: 'Buck'
		}
	}


	changeSelf () {
		console.log(9999)

		this.setState({
			name: this.state.name + 'dogs'
		})
	}

	// 设置要传递给后代组件的值
	
	getChildContext () {
		return {
			name:  this.state.name,
			changeSelf: this.changeSelf.bind(this) //绑定 this
		}
	}

	// 设置要传递数据的类型
	static childContextTypes = {
		name: PropsTypes.string,
		changeSelf: PropsTypes.func
	}


	render () {
		return <div>
			<h3>grandpa</h3>
			<Father></Father>
		</div>
	}
}

class Father extends React.Component {

	constructor () {
		super ()

	}

	//校验一下父组件传递过来的值类型是否正确
	static contextTypes = {
		name: PropsTypes.string
	}

	render () {

		return <div>
			{/*通过 context 获取传递过来的值 */}
			<h3>father----- <span>{ this.context.name }</span></h3>

			<Son></Son>
		</div>
	}
}


class Son extends React.Component {

	constructor () {
		super()

	}

	//校验一下父组件传递过来的值类型是否正确
	static contextTypes = {
		name: PropsTypes.string,
		changeSelf: PropsTypes.func,
	}


	render () {
		return <div>
			<h3>son-----<span>{ this.context.name }</span></h3>
			<button onClick={ this.context.changeSelf }>更改</button> // 修改父组件的值
		</div>
	}
}








ReactDom.render(<div>
	<P {...data}></P>
	<Titile {...title}></Titile>
	<Name {...data}></Name>

	<List dataList={dataList}></List>
	<Input></Input>

	<Pop></Pop>

	<Grandpa></Grandpa>

</div>, document.getElementById('app'))
