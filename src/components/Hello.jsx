import React from "react"


//创造组件的方式 1: 构造函数，第一个字母大写：
export default function Hello (props) {

	console.log(props)

	//函数内必须要返回一个jsx虚拟dom元素，如果没有返回则写 return null
	// return null
	return <div>我是组件 {props.name} + {props.age} + {props.gender}</div>
}


/*//把组件暴露出去
export default Hello*/