import React from 'react'
import ReactDOM from 'react-dom'


//创造组件的方式 1: 构造函数，第一个字母大写：
function Hello (props) {

	//函数内必须要返回一个jsx虚拟dom元素，如果没有返回则写 return null
	// return null
	return <div>我是组件 {props.name}</div>
}

const dog = {
	name: 'sala',
	age: 23,
	gender: 'male'
}


ReactDOM.render(<div>

	{/*直接把组件丢在页面就可以了*/}
	<Hello age={dog.age}></Hello>
	<hr/>

	{/*组件传值*/}
	<Hello name={dog.name}></Hello>
	<hr/>

	{/*使用扩展运算符组件传值*/}
	<Hello {...dog}></Hello>


</div>,document.getElementById('app'))








