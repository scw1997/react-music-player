import React from 'react'
import { Tabs } from 'antd-mobile'
import Header from 'Components/Header'


function Main(props) {
	console.log('xxxx',props)
	const tabs = [
		{ title: '推荐音乐'},
		{ title: '搜索'},

	]
	return <div>
		<Header/>
		<Tabs tabs={tabs} initialPage={1} onChange={(tab, index) => { console.log('onChange', index, tab) }} onTabClick={(tab, index) => { console.log('onTabClick', index, tab) }}>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
				Content of first tab
			</div>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
				Content of second tab
			</div>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
				Content of third tab
			</div>
		</Tabs>
	</div>
}

export default Main
