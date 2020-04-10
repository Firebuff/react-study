import React from 'react'

import style from '@/css/style02.scss'
console.log(style)

class Css extends React.Component {
	constructor () {
		super()
		this.state = {}
	}
	render () {

		return <div className={style.sea}>
			hello
			<p>爽肤水</p>
			<p className={style.name}>佛山的房价</p>

			<p className={style.river}>
				I am a river
				<span className={style.name}>别抢人头好吗</span>
			</p>
		</div>
	}
}
export default Css