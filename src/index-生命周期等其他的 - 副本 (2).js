import React from 'react'
import ReactDOM from 'react-dom'

// import ListCom from '@/components/listCom01' //引入有状态组件 ListCom

// import Event01 from '@/components/01-event'

// import Input from '@/components/bindinput'

// import Test01 from '@/components/test-01'

// import Sea from '@/components/test-02'

// import Money from '@/components/数据类型校验'

// import Money from '@/components/组件创建阶段的生命周期函数'

// import Money from '@/components/组件运行阶段的生命周期函数'


// import Money from '@/components/componentWillReceiveProps'


// import Tree from '@/components/单向数据流'


// import Comment from '@/comment/comment'


import Grandfather from '@/components/context传值'


const dog = {
	name: 'sala',
	age: 23,
	gender: 'male'
}

// 数据类型校验

// ReactDOM.render(
// 	<div>
// 		<Money initCount={20}></Money>
// 		<hr/>
// 		{/*不传值的情况 */}
// 		<Money></Money>
// 		<hr/>

// 		{/*传特殊值的情况*/}
// 		<Money initCount="传个特殊值"></Money>
// 		<hr/>
// 	</div>
// ,document.getElementById('app'))



// 组件创建阶段的生命周期函数

// ReactDOM.render(
// 	<div>
// 		<Money initCount={10}></Money>
// 		<hr/>
// 	</div>
// ,document.getElementById('app'))



// 组件运行阶段的生命周期函数
// ReactDOM.render(
// 	<div>
// 		<Money initCount={10}></Money>
// 		<hr/>
// 	</div>
// ,document.getElementById('app'))





// componentWillReceiveProps
// ReactDOM.render(
// 	<div>
// 		<Money initCount={10}></Money>
// 		<hr/>
// 	</div>
// ,document.getElementById('app'))


//this传参的方式

// ReactDOM.render(
// 	<div>
// 		<Tree></Tree>
// 	</div>
// ,document.getElementById('app'))



// 单项数据流 react 不支持双向绑定

/*ReactDOM.render(
	<div>
		<Tree></Tree>
	</div>
,document.getElementById('app'))*/





// 评论列表展示

// ReactDOM.render(
// 	<div>
// 		<Comment></Comment>
// 	</div>
// ,document.getElementById('app'))




// context传值

ReactDOM.render(
	<div>
		<Grandfather></Grandfather>
	</div>
,document.getElementById('app'))









