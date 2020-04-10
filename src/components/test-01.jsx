import React from 'react'

// 没有开启 css 模块化时候， 用一个变量 testStyle 来接收导入进来的样式表，testStyle 是一个空对象
// 因为 js 的 export default 不能直接导出css样式表
import testStyle from '@/css/style01.css'

console.log(testStyle)


function Fish (props) {

	return <div>
		<p className="name">我是用构造函数创建的组件</p>
		<p>{props.msg}</p>
		<p className="div">测试css模块化以后，将私有样式 .div 暴露到全局中</p>
	</div>
}

class Tree extends React.Component {

	constructor (props01) { //props01 的名字随便定义，为了方便一般使用props

		super(props01) //创建时候也要给 super传递一份外界传递过来的数据， 
		this.state = {
			msg: 'I feel happy now, what about you?'
		}

		// console.log(this.props) //在constructor 无法这样通过this.props 来获取外界传递过来的数据; 
		// 如果要在 constructor 内来获取外界传递过来的数据， 必须要在constructor（xxx） 中定义个形参来获取
		console.log(props01)
	}
	//	在用class创建的组件中，可以直接用this.props.xxx来读取外界传递过来的数据
	// 而在 用构造函数创建的组件中， 必须要先定义 props 才能使用props.xxx来读取外界传递过来的数据

	// props 都是只读的，不管是class 创建的组件还是构造函数创建的组件，都一样
	render () {
		return <div>
			<p className={ testStyle.name }>I am a test for this moment!</p>
			<p>{this.props.name}</p>
			<p className={ testStyle.div }>我是私有css样式 .div </p>
			<p>{this.state.msg}</p>
			<Fish msg={this.state.msg}></Fish>
		</div>
	}
}

export default Tree


// class创建的组件（有状态组件） 和  构造函数创建的组件（无状态组件） 的区别

/*

	1. 构造函数创建的组件，内部没有state 私有数据属性，只有一个props 来接收外界传递过阿里的数据，
		这个props要在constructor中定义：constructor（xxx）；没有自己的生命周期函数
	
	2. class创建的组件, 内部有state 私有数据属性，可读可写； 还有一个props 来接收外界传递过阿里的数据，
		这个props可以直接使用 this.props.xxx； 有自己的生命周期函数
	
	


*/