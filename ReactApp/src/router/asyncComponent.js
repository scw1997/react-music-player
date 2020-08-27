import React, {PureComponent,useState,useEffect,memo} from 'react'
function asyncComponent (importComponent) {
	function AsyncComponent (props) {
		const [componentObj, setComponentObj] = useState({})
		useEffect(() => {
			const fun = async () => {
				const res = await React.lazy(importComponent)
				return res
			}
			fun().then(res => {
				//useState不可直接存储一个函数组件（有坑），所以存到对象的一个属性中
				setComponentObj({component: res})
			})

		},[])
		const Component = componentObj.component
		return <>{Component && <React.Suspense fallback={'loading'}><Component {...props}/></React.Suspense>}</>

	}
	return memo(AsyncComponent)
}
export default asyncComponent
