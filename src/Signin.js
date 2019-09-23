import React from 'react'


class Signin extends React.Component {
	render() {
		return (
			<div>
				<h1>Signin Status</h1>
				<p> {this.props.location.search} </p>
			</div>
		)
	}
}

//console.log(this.props.match.params.redirectParam);

export default Signin
