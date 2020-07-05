import React,{useState,useEffect} from 'react'
import { get } from 'Utils/requestUtil'
import {connect} from 'react-redux'
import { setPicUrl } from '../../store/action'
import { Button,Toast } from 'antd-mobile'
import Style from './style.module.scss'




function Recommend(props) {
	console.log(props)
	const [list,setList] = useState([])
	const getList=async ()=>{
		try{
		    Toast.loading('加载中',0)
			let res = await get('/personalized/newsong',{})
			Toast.hide()
			if(res.code===200){
			    setList(res.result)
			}
		}catch (e) {
		    Toast.fail('加载失败')
			console.log('获取列表错误')
		}
	}
	const jumpPlayer=(id,albumId)=>{
		props.history.push({pathname:`/player/${id}/${albumId}`})
	}
	useEffect(()=>{
		getList()
	},[])
	return <div>
		<ul className={Style.songList}>
			{list.map((item,index)=>{
			    return <li key={index} onClick={jumpPlayer.bind(this,item.id,item.song.album.id)}>
					<div>
						<span className={'songName'}>{item.name}</span>
						<span className={'singer'}>{item.song.artists[0].name}</span>
					</div>
					<span className={'iconfont icon-play'}></span>
				</li>
			})}
		</ul>
	</div>
}

export default (Recommend)
