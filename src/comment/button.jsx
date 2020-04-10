import React from 'react'

class Button extends React.Component {

	render () {
		return <div>
			<label htmlFor="">评论人</label>
			<input type="text" style={{display:'block'}} ref="name"/>
			<label htmlFor="">评论内容</label>
			<textarea name="" id="" cols="30" rows="10" style={{display:'block'}} ref="content"></textarea>
			<button onClick={this.publish}>发布评论</button>
		</div>
	}

	getValue () {
		//获取到文本框的值
		var name = this.refs.name.value
		var content = this.refs.content.value

		//获取 localStorage里面 之前发表的评论内容
		var comment = { name:name, content:content}
		var pastComment = JSON.parse(localStorage.getItem('comments')) || []

		//插入新的评论内容, 并储存到 localStorage里面
		pastComment.unshift(comment)
		localStorage.setItem('comments',JSON.stringify(pastComment))

		//清空文本框的值

		this.refs.name.value = this.refs.content.value = ''

		// console.log(JSON.parse(localStorage.getItem('comments')))

		// 调用一下父组件传过来的函数 getStorage 来更新 父组件 this.state 里面的数据，从而实现 页面和数据的响应

		this.props.reload()
		

	}
	publish = () => {
		this.getValue()
	}
}	

export default Button