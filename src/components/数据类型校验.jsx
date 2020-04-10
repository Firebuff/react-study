import React from 'react'

// prop-types 的职能很单一， 里面只是提供了一些常见的数据类型，用来进行类型校验
import ReactType from 'prop-types'


class Money extends React.Component {
	constructor (props) {
		super(props)

		this.state = {

		}
	}
	/*	在创建组件时候，在组件内部有些数据是必须，
		但是用户使用时又没有传递过来, 这时候需要在组件内部设置 一个默认的值，
		防止报错

		在react 中使用静态的 defaultProps 属性来设置 组件的默认属性值

	*/

	static defaultProps = {

		initCount: 0 //这里表示如果外界没有传递数值 initCount，就将 initCount 初始化为 0
	}

	//	这是创建一个静态的 propTypes 对象， 在这对象中可以吧外界传递过来的数据进行数据类型校验
	//  若为传递过来的数据进行类型校验，必须要安装第三方的包，叫 prop-types

	// 这个包在 v.15 版本之前是没有从 react.js 单独抽离出来的，以后的版本就已经抽离出来了
	static propTypes = {
		initCount: ReactType.number // 使用prop-types包来指定传递过来的数据的类型 为number类型，如果类型不正确，则会在控制台报错
	}


	render () {
		return <div>
			<h3>这里是计数器组件</h3>
			<input type="button" value="+1"/>
			<h5>当前的数量是: {this.props.initCount}</h5>
		</div>
	}
}

export default Money