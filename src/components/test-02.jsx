import React from 'react'

import seaStyle from '@/css/style02.scss'

console.log(seaStyle)


class Sea extends React.Component {
	constructor (props) {
		super (props)

		this.state = {
			name: '我是海洋'
		}
	}

	render () {
		return <div>
			<h3 className={seaStyle.sea}>{ this.state.name }</h3>
			<p className={seaStyle.name}>it rains a lot</p>
			<River className={seaStyle.river}></River>
		</div>
	}
}

function River (props) {
		return <div>
			<h3>我是河流</h3>
		</div>
}

export default Sea