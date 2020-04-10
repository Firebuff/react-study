import React from 'react'
import ReactDOM from 'react-dom'

/*// 组件分离后引入组件Hello
import Hello from "./components/Hello.jsx"*/

/*// 组件分离后引入组件Hello, 在webpack.config.js中配置extensions后，可以不写文件名后缀 jsx
import Hello from "./components/Hello"*/

// 组件分离后引入组件Hello, 在webpack.config.js中配置alias后，@ 就相当于 '/src', 根目录下的src这一层路径
import Hello from "@/components/Hello"
import Love from "@/components/01practice.jsx"

const dog = {
	name: 'sala',
	age: 55,
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

	<Love></Love>


</div>,document.getElementById('app'))








