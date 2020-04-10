import React from 'react'

import ItemCom from '@/components/ItemCom' //引入无状态组件 ItemCom


//使用class关键字创建父组件
export default class listCom extends React.Component {
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

			{/*在jsx中使用行内样式的写法： style={{color:'red',fontSzie:'15px'}}*/}

			<h1 style={{ color:'red',fontSize:'25px',textAlign:'center'}}>评论列表</h1>
			{this.state.listData.map((item,index) => {
				return <ItemCom key={index} {...item}></ItemCom>
			})}
		</div>
	}
}
