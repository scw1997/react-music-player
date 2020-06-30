import React, {PureComponent,useState,useEffect,memo} from 'react'
import page1 from '../pages/page1'
function asyncComponent (importComponent) {

	function AsyncComponent (props) {
		const [componentObj, setComponentObj] = useState({})
		useEffect(() => {
			const fun = async () => {
				const res = await importComponent()
				return res
			}
			fun().then(res => {
				//useState不可直接存储一个函数组件（有坑），所以存到对象的一个属性中
				setComponentObj({component: res.default})
			})

		},[])
		const Component = componentObj.component
		return <>{Component && <Component {...props}/>}</>


	}

	return memo(AsyncComponent)

	// class AsyncComponent extends PureComponent {
	// 	constructor(props){
	// 		super(props)
	// 		this.state={
	// 			Component:null
	// 		}
	// 	}
	// 	async componentDidMount() {
	// 		const {default:Component} = await importComponent()
	// 		this.setState({
	// 			Component
	// 		})
	// 	}
	//
	// 	render() {
	// 		const { Component } = this.state
	// 		return (
	// 			<div>
	// 				{Component?<Component/>:<div></div>}
	// 			</div>
	// 		)
	// 	}
	// }
	//
	// return AsyncComponent



}

export default asyncComponent
