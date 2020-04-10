import React from 'react'
import ReactType from 'prop-types'


class Money extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			msg: 'hello, how are you doing today?',
			/*
				在state里面定义一个属性 count，来接收外界传递过来的值，做为 加减操作的基数
				因为外界传递过来的值能读，不能写入

				在constructor里面不能直接通过 this.props 来读取外界传递过来的值，要自定义一个变量来接收
			*/
			count: props.initCount 
		}
	}
	

	static defaultProps = {

		initCount: 0 
	}

	static propTypes = {
		initCount: ReactType.number 
	}

	
	render () {

		// 组件在创建阶段时候会执行一次 render，组件更新时候也会执行render， 所以要使用短路运算，
		// 因为创建阶段时页面还是空白的，所以读取不到 这个元素； 但是运行阶段，组件更新时会读取到这个元素

		// 组件运行阶段，组件更新时候，render周期函数中读取到的dom是旧的
		console.log(this.refs.state && this.refs.state.innerHTML)
		return <div>
			<h3 id="h3">这里是计数器组件</h3>
			<input type="button" value="+1" id="btn" onClick={this.add}/>
			<h5 id="state" ref="state">当前的数量是: {this.state.count}</h5>
		</div>
	}

	myfunction () {
		console.log('我是自定义的函数哦')
	}

	// 定义一个加减操作函数

	/*add (that) {
		console.log(that) // undefined
		console.log(that.state) // undefined
		that.setState({
			count: 1000
		})
	}*/

	// 把箭头函数赋值给一个变量
	add = () =>  {
		// console.log(this) 
		this.setState({
			// count: ++this.state.count 
			count: this.state.count + 1
		})
	}

	// 创建阶段额最后一个周期函数
	componentDidMount () {
		/*
			使用操作 dom 的方法实现点击按钮 +1， 因为function 里面的 this 指向 button这个节点元素，
			不是react组件实例，所以要使用箭头函数代替 function（）{...}
		*/
		/*document.getElementById('btn').onclick = () => {
			console.log('我被点击了')
			// console.log(this)
			// this.props.initCount++ // 外界传递过来的值只能读，不能写，所以不能直接操作

			this.setState({
				count: this.state.count + 1
			})
		}*/

		// 通过在按钮上定义一个事件来实现加减操作
	}




	/* 运行阶段的周期函数 */



	// 周期函数 shouldComponentUpdate： 判断组件是否需要更新
	shouldComponentUpdate (nextProps,nextState) {
		// console.log(888)
		/*
			1. 这个周期函数中必须要返回一个布尔值 true 或者 false， 如果什么都不写，默认返回一个 true

			2. 如果返回值是 false， 组件直接退回运行中状态，则后续的 render等周期函数都不会继续执行，
				即使state 里面的数据被修改，也不会触发 虚拟dom 和 页面的更新
		*/
		// return false

		// 需求： 如果count的是偶数就是更新， 奇数则不更新页面

		// 测试发现， 在 shouldComponentUpdate 周期函数里面，拿到的 this.state.count 的值是上一次的值，不是最新的值
		// console.log(this.state.count)

		// 这个周期函数提供了 nextProps,nextState 这个两个参数，可以获取最新的 props 和 state 的值
		// console.log(this.state.count + '-----' + nextState.count)

		// return this.state.count % 2 === 0 ? true : false //不能实现需求  因为 this.state.count 不是最新的值

		// return nextState.count % 2 === 0 ? true : false //能实现需求  因为 nextState.count 是最新的值

		return true
	}


	// 周期函数 componentWillUpdate： 组件将要更新， 此时内存中的虚拟dom是旧的，页面上的内容也是旧的

	componentWillUpdate () {
		// 经测试， 页面上的 dom 都是旧
		// console.log(document.getElementById('state').innerHTML)
		console.log(this.refs.state.innerHTML) // 也可以通过 ref 的方式获取页面上的节点，跟vue $refs.xxx 很相似，只不过vue多了一个 $ 符号，其他都一样
	}

	//  componentWillUpdate 后面接着是 执行render周期函数，render周期函数中读取到的dom是旧的



	//  render周期函数 后面接着是 执行componentDidUpdate周期函数，c此时内存中的虚拟dom 和 页面上的dom都是最新的，与数据已经同步，可以进行dom操作了
	componentDidUpdate () {
		console.log(this.refs.state.innerHTML) 
	}

}

export default Money