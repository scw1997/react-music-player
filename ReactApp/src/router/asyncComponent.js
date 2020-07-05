import React, {PureComponent,useState,useEffect,memo} from 'react'
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




}

export default asyncComponent
