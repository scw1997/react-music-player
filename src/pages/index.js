import React , {useEffect} from  'react'
import { Tabs } from 'antd-mobile'
import {Route} from 'react-router-dom'
import Header from 'Components/Header'


function Main(props) {
	// console.log('xxxx',props)
	useEffect(()=>{
		if(props.location.pathname!=='/index/recommend'){
			props.history.push({pathname:'/index/recommend'})
		}

	},[])

	const tabs = [
		{ title: '推荐音乐'},
		{ title: '搜索'},

	]
	const tabChange=(tab,index)=>{
		if(index===0){
			props.history.push({pathname:'/index/recommend'})
		}else if(index===1){
			props.history.push({pathname:'/index/search'})
		}
	}
	return <div>
		<Header/>
		<Tabs tabs={tabs} initialPage={0} swipeable onChange={(tab, index) => { tabChange(tab,index) }} >
			{props.child.map((child,index)=>
				<Route  key={index} exact={child.exact} path={child.path} component={child.component}/>)}
		</Tabs>
	</div>
}

export default Main
