import React from "react"

//引进属性校验包
import ReactTypes from "prop-types"


// 爷爷要把新年礼物送给孙子： 爷爷 => 父亲 => 孙子

class Grandfather extends React.Component {

	constructor (props01) { 
		super(props01)  
		this.state = {
			msg: '爷爷的新年礼物'
		}
	}
	
	// 使用context 传递礼物

	/*	在父组件中，定义一个function，这个function有固定的名字：getChildContext,内部要返回一个对象，

		对象里面写的数据就是要共享给子孙组件的数据
	*/

	getChildContext () {
		return {
			gift: this.state.msg
		}
	}

	/*	使用属性校验，规定一下父组件要传给子孙组件的数据类型，
		需要定义一个静态的（static）childContextTypes(这是固定名称),他是一个对象
	*/

	static childContextTypes = {
		gift: ReactTypes.string // 规定了传递给子孙组件的数据 gift 的类型是字符串类型
	}



	render () {
		return <div>
			<h3>爷爷</h3>
			<hr/>
			<Father msg={this.state.msg}></Father>
		</div>
	}
}





class Father extends React.Component {

	
	
	render () {
		return <div>
			<h3>父亲</h3>
			<p>{this.props.msg}</p>
			<hr/>
			<Son msg={this.props.msg}></Son>
		</div>
	}
}



class Son extends React.Component {

	// 使用父组件的context里面的数据前， 首先要做一个属性校验，校验一下父组件传递过的数据的类型
	static contextTypes = {
		gift: ReactTypes.string
	}
	
	render () {
		return <div>
			<h3>孙子</h3>
			<p>{this.props.msg}</p>

			<p>这是父组件通过context传递过来的数据------{this.context.gift}</p>
		</div>
	}
}

export default Grandfather