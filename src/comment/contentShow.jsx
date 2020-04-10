import React from 'react'

class Content extends React.Component {



	render () {
		return <div style={{border:'1px',borderStyle:'dotted',marginBottom:'10px',marginTop:'10px'}}>
			<h3>评论人: {this.props.name}</h3>
			<p>评论内容:
				<span style={{color:'#e91e63',marginLeft:'10px'}}>{this.props.content}</span>
			</p>
		</div>
	}
}	

export default Content