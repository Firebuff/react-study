import React from 'react'

//使用构造函数创建无状态组件
export default function ItemCom (props) {

	return <div>
		<h4>评论人: {props.user}</h4>
		<div>评论内容: {props.content}</div>
	</div>
}