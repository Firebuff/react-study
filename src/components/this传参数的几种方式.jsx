import React from 'react'

class Tree extends React.Component {

	constructor (props) {
		super(props)
		this.state = {

			msg: '我说傻逼'
		}
		// 用bind 绑定this除了可以在注册点击事件时进行绑定外，还可以在constructor内部对该事件进行绑定，如下

		// 当为一个函数调用bind来改变this 的指向时，调用后的结果会有一个返回值，这个值就是改变this指向后的原函数的一个引用

		// bind 不会改变原函数的指向

		this.change03 = this.change03.bind(this,'no','money') // 返回一个改变this指向后的原函数的引用，然后this这个引用赋值给this.change03，那么这change03的this就指向实例了
	}



	render () {
		return <div>
			<h2>this传参的方式</h2>
			
			<hr/>
			<input type="button" className="button" value="改变值01" onClick={this.change01}/>

			{/* bind的作用是：修改前面的函数（change02） 的that 的指向，让函数内部的this指向bind参数列表中的第一个参数 */}

			{/* call 和 apply 也可以修改this 的指向，但是他们修改完指向后，会立调用这个函数，但是bind修改完this指向后不会立即调用函数 */}

			{/* this.change02.bind(this) 中第一个参数是用来修改指向用的， 之后的第二个，第三个等等的参数可以用来传递其他的参数 */}

			<input type="button" className="button" value="改变值02" onClick={this.change02.bind(this,'love','you')}/>

			<input type="button" className="button" value="改变值03" onClick={this.change03}/>
			{/* 在注册事件时候使用箭头函数： 因为箭头函数有个特性： 他会使外部的this和箭头函数内部的this绑定在一起，保持一致 */}

			<input type="button" className="button" value="改变值04" onClick={() => {this.change04('hello','hello')}} />

			<input type="button" className="button" value="打印this" onClick={ console.log(this) } />

			<input type="button" className="button" value="不用点击自动执行dg" onClick={ console.log(this) } />


			{/* 当react 解析到这行代码是，发现  this.change05('1','03') 是一个函数的调用，他会立即计算执行这个函数 */}

			{/*<input type="button" className="button" value="不用点击自动执行" onClick={ this.change05('1','03') } />*/}

			<input type="button" className="button" value="不用点击自动执行" onClick={ () => {this.change05('1','03')} } />



			<h2>{this.state.msg}</h2>
		</div>
	}
	change01 (){
		console.log(this) // 输出undefined， 这个是一个普通的方法，所以在触发的时候输出undefined
	}
	change02 (arg1,arg2){
		console.log(this) //
		this.setState({
			msg: '傻逼说谁呢？'
		})
		console.log(arg1 + arg2)
	}
	change03 (arg1,arg2){
		console.log(this) //
		this.setState({
			msg: '傻逼说谁呢？'
		})
		console.log(arg1 + arg2)
	}

	change04 (arg1,arg2){
		console.log(this) //
		this.setState({
			msg: '傻逼说谁呢？'
		})
		console.log(arg1 + arg2)
	}
	change05 =  (arg1,arg2) => {
		console.log(this) //
		this.setState({
			msg: '傻逼说谁呢？'
		})
		console.log(arg1 + arg2)
	}

}

export default Tree