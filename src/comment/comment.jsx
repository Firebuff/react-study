import React from 'react'
import Content from '@/comment/contentShow'
import Button from '@/comment/button'

class Father extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
			list: [
				{name: 'rober', content: '电影的剧情很不错'},
				{name: '小明', content: '女猪脚很漂亮额，很喜欢'},
				{name: '你妈叫你回家吃饭', content: '这是五毛钱特效吧'},
				{name: '暴君', content: '烂片，没啥看头'}
			],
			arr: [2,3,3]
		}
	}

	getStorage = () => {

		// 获取本地存储里面的数据
		var localList = JSON.parse(localStorage.getItem('comments')) || []

		// 本地存储里面的数据 和 this.state里面的数据进行合并 组成新的数组
		var newList = [...localList,...this.state.list]

		for (let i=0; i<newList.length; i++) {
			for (let j=i+1; j<newList.length; j++) {
				if (newList[i].name == newList[j].name && newList[i].content == newList[j].content) {
					newList.splice(j,1)
					j--
				}
			}
		}

		// 新的数组 设置回到this.state里面
		this.setState({
			list: newList
		})
	}
	// 数组去重
	unique = (arr) => {            
	    for(var i=0; i<arr.length; i++){
	    	console.log('i=>'+ arr[i],i)
	        for(var j=i+1; j<arr.length; j++){
	        	console.log('j=>'+ arr[j],j)
	            if(arr[i]==arr[j]){  //第一个等同于第二个，splice方法删除第二个

	                arr.splice(j,1);

	                j--;
	            }
	        }
	    }
		return arr;
	}

	componentWillMount () {
		this.getStorage()
		this.unique(this.state.arr)
	}

	render () {
		return <div>
			<h1>这是评论列表</h1>

			{/* vue 中，父组件给子组件传递数据是通过props传递的，但是子组件如果要调用父组件的方法，
				要使用 this.$emit(自定义事件，参数) 的方式使用
			*/}


			{/* react 中，无论是方法或者是普通数据都可以通过props传递给子组件，可以通过this.props.xxx 读取数据 或者
				通过 this.props.xxx() 调用方法
			*/}

			<Button reload={this.getStorage}></Button>

			{ 	this.state.list.map((item,index) => {
					return <Content {...item} key={index}></Content>
				})
			}
			
		</div>
	}
}	

export default Father