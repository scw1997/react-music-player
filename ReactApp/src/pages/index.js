import React, {Component} from 'react'


class Index extends Component {
	constructor(props){
		super(props)
		this.state={
			count:1
		}
	}

	// componentWillReceiveProps(nextProps, nextContext) {
	// 	console.log('componentWillReceiveProps')
	// }
	// componentWillMount() {
	// 	console.log('componentWillMount')
	// }



	static getDerivedStateFromProps(nextProps,prevState){
		console.log('getDerivedStateFromProps',nextProps,prevState)

		return null
	}
	render() {
		return (
			<div>
				<span>{this.state.count}</span>
				<button onClick={()=>{this.setState({count:this.state.count+1})}}>点我</button>
			</div>
		)
	}
}


export default Index
