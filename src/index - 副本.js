import React from 'react'
import ReactDOM from 'react-dom'
import Movie01 from '@/08-使用class类创建react组件'





const dog = {
	name: 'sala',
	age: 23,
	gender: 'male'
}


ReactDOM.render(<div>
		{/* 这 Movie 标签相当于new了一个 Movie01 类的实例 */}
		<Movie01></Movie01>
		<Movie01 mingzi = {dog.name}></Movie01>
		<Movie01 {...dog}></Movie01>
	</div>,document.getElementById('app'))








