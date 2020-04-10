import React from 'react'
import ReactDOM from 'react-dom'
 
let a = 10

let hello = 'hello'

let boo = true

//字符串
let title = 'bullshit'

//单个jsx 对象
let h5 = <h5>I am h5</h5>

//jsx数组
let h4s = [
	<h4 key={1}>h41</h4>,
	<h4 key={2}>h42</h4>,
	<h4 key={3}>h43</h4>,
	<h4 key={4}>h44</h4>,
	<h4 key={5}>h45</h4>	
]

//字符串数组
let arr = [
	'程咬金',
	'甄姬',
	'孙悟空',
	'公孙离'
]

//把数组塞进去标签，然后循坏遍历到页面上
let newArr = []


arr.forEach((item,index) => {
	let temp = <h3 key={index}>{item}</h3>
	newArr.push(temp)
})



let heros = arr.map( (item,index) => {
	return <h2 key={index}>{item}</h2>
})


const style = {
	color: 'blue',
	backgroundColor: 'pink'

}


// ReactDOM.render(<div>{a}</div>,document.getElementById('app'))

ReactDOM.render(<div>

	{a + 10} + {hello}
	<hr/>

	<br/>
	{ boo? 'hi' : 'go'}
	<hr/>

	<div title={title} className="fuck">I like it</div>h5
	<hr/>

	{h5}
	<hr/>

	{h4s}
	<hr/>

	{newArr}
	<hr/>


	{heros}
	<hr/>

	{
		arr.map((item,index) => {
			return <div key={index} style={style}>{item}</div>
		})
	}
	{
		['one','two','three'].map((item,index) => {
			return <div key={index} style={{color:'red',fontSize:'50px'}}>{item}</div>
		})
	}


	</div>,document.getElementById('app'))

