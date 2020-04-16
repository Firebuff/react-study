import React, { Component } from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

import Name from './router01.jsx'
import Play from './router02.jsx'
import Go from './router03.jsx'

console.log(Router)

// 使用默认的确认函数
const getConfirmation = (message, callback) => {
  	const allowTransition = window.confirm(message)
  	callback(allowTransition)
}


class Root extends Component {
	constructor (props) {
		super(props)

	}

	render () {
		return <Router getUserConfirmation={getConfirmation}>
				<p>
					<Link to="/">Name</Link>
				</p>
				<p>
					<Link to="/play">Play</Link>
				</p>
				<p>
					<Link to="/go">Go</Link>
				</p>
				<Switch>
					<Route path="/" exact component={ Name }></Route>
					<Route path="/play" exact component={ Play }></Route>
					<Route path="/go" component={ Go }></Route>
				</Switch>
			</Router>
		
	}
}

ReactDom.render(<Root></Root>, document.getElementById('app'))