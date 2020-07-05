import React  from 'react'
import {NavBar,Icon} from 'antd-mobile'
import Style from './style.module.scss'
import iconMusic from './icon/iconMusic.png'

function Header(props) {
	const Title = ()=>{
		return <>
			<img className={Style.iconMusic} src={iconMusic} alt="" width={20}/>
			<span>&nbsp;小蚊子音乐播放器</span>
		</>
	}
	return <div className={Style.NavBar}>
		<NavBar mode="dark" leftContent={<Title/>}></NavBar>
	</div>

}
export default Header
