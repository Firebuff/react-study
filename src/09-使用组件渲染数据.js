import React from 'react'

//使用构造函数创建无状态组件

function ItemCom (props) {

	return <div>
		<h4>评论人: {props.user}</h4>
		<div>评论内容: {props.content}</div>
	</div>
}


//使用class关键字创建父组件

const listCom = class listCom extends React.Component {
	constructor () {
		super()
		this.state = {
			listData:[ // 评论列表数据
        		{ id: 1, user: '张三', content: '哈哈，沙发' },
        		{ id: 2, user: '李四', content: '哈哈，板凳' },
        		{ id: 3, user: '王五', content: '哈哈，凉席' },
        		{ id: 4, user: '赵六', content: '哈哈，砖头' },
        		{ id: 5, user: '田七', content: '哈哈，楼下山炮'}
      		]
		}
	}

	render () {
		return <div>
			<h1>评论列表</h1>
			{this.state.listData.map((item,index) => {
				return <ItemCom key={index} {...item}></ItemCom>
			})}
		</div>
	}
}

export default listCom