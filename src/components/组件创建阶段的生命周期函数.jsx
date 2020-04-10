import React from 'react'
import ReactType from 'prop-types'


class Money extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			msg: 'hello, how are you doing today?'
		}
	}
	

	static defaultProps = {

		initCount: 0 
	}

	static propTypes = {
		initCount: ReactType.number 
	}

	//生命周期函数 componentWillMount: 组件尚未挂载到页面中，虚拟dom也没有在内存中生成

	componentWillMount () {

 		// 输出null，因为虚拟dom和页面都没有开始渲染，无法读取页面上的节点
 		console.log(document.getElementById('h3'))

 		// 输出10 ，可以获取外界传递过来的 数据
 		console.log(this.props.initCount)

 		// 可以获取 state 里面的数据
 		console.log(this.state)

 		// 可以调用自定义的函数
 		this.myfunction()

 		// 总结： 这个生命周期内，除了不能获取dom节点外，数据和函数方法皆可读取，相当于 vue 的 created 周期函数
	}

	// 生命周期函数 render：虚拟dom在内存中创建生成，但是尚渲染到页面上
	render () {


		// 输出null，虽然虚拟 dom 在内存中准备好了，但是虚拟 dom 还没有渲染到页面上，页面是空的
		console.log(document.getElementById('h3'))

		return <div>
			<h3 id="h3">这里是计数器组件</h3>
			<input type="button" value="+1"/>
			<h5>当前的数量是: {this.props.initCount}</h5>
		</div>
	}

	myfunction () {
		console.log('我是自定义的函数哦')
	}

	// 生命周期函数 componentDidMount：内存中的虚拟dom已经渲染到页面上了，组件已经挂载到页面上了
	componentDidMount () {

		// 输出： <h3 id="h3">这里是计数器组件</h3> 
		console.log(document.getElementById('h3'))

		// 总结： 这个生命周期内，可以对页面进行 dom 操作了， 相当于 vue 的 mounted 周期函数

		// 如果相对页面进行 dom 操作，最早应该在 componentDidMount 这个周期函数内
	}



}

export default Money