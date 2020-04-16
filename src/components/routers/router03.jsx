import React from 'react'

import { BrowserRouter as Router, Link, Route } from "react-router-dom"


function Hi (props) {
	return <p> say hi to me </p>
}

function Hello (props) {
	return <p> say hello to me </p>
}


function Go (props) {



	return <Router basename="/go">
		<div>go anywhere I would like</div>

		<div className="links">
			<p>
				<Link to="/hi">go to say hi to me </Link>
			</p>
			<p>
				<Link to="/hello">go to say hello to me </Link>
			</p>
			
		</div>
		<div className="components">
			<Route path="/hi" component={ Hi }></Route>
			<Route path="/hello" component={ Hello }></Route>
		</div>
	</Router>
}

export default Go 