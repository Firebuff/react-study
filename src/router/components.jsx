import React from 'react'

function Index() {

	return <div>首页</div>
}

function About(props) {
	console.log(props)

	return <div>关于</div>
}

function Log() {

	return <div>日志</div>
}

export { Index, About, Log }
