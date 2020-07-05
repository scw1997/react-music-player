import React,{useState,useEffect,useRef} from 'react'
import { get } from 'Utils/requestUtil'
import { Button,Toast } from 'antd-mobile'
import Style from './style.module.scss'
import {connect} from 'react-redux'
import {setPicUrl} from '../../store/action'


function Player(props) {
	console.log('props',props)
	const [id] = useState(props.match.params.id?props.match.params.id:'')
	const [albumId] = useState(props.match.params.albumId?props.match.params.albumId:'')
	const [picUrl,setPicUrl] = useState('')
	const [url,setUrl] = useState('')
	const [playState,setPlayState] = useState(false)
	const player=useRef()
	const iconPlay = useRef()
	const [songMsg,setSongMsg] = useState({})
	const getSongUrl = async ()=>{
		try {
			Toast.loading('加载中',0)
			let res = await get('/song/url',{id:id})
			Toast.hide()
			if(res.code===200){
				setUrl(res.data[0].url)
			}
		}catch (e) {
			Toast.fail('获取歌曲信息失败')
			console.log(e,'获取歌曲信息失败')
		}
	}

	const getAlbumMsg = async ()=>{
		try {
			Toast.loading('加载中',0)
			let res = await get('/album',{id:albumId})
			Toast.hide()
			if(res.code===200){
				setPicUrl(res.album.picUrl)
				console.log('res.songs.find(item=>item.id===id)',res.songs.find(item=>item.id===Number(id)))
				let songMsg = res.songs.find(item=>item.id===Number(id))
				setSongMsg(songMsg?{
					songname:songMsg.name,
					singer:songMsg.ar[0].name
				}:{})
			}
		}catch (e) {
			Toast.fail('获取专辑信息失败')
			console.log(e,'获取专辑信息失败')
		}
	}
	useEffect(()=>{
		getSongUrl()
		getAlbumMsg()
	},[])
	const handlePlay=()=>{
		// console.log('player',player)
		if(playState){
			iconPlay.current.classList.add('icon-play')
			iconPlay.current.classList.remove('icon-pause')
			player.current.pause()
		}else{
			iconPlay.current.classList.add('icon-pause')
			iconPlay.current.classList.remove('icon-play')
			player.current.play()
		}
		setPlayState(!playState)
	}
	return <div className={Style.playerMain}>
		<div className={'picBg'}>
			<img src={picUrl} alt="" />
			<span ref={iconPlay} className={'iconfont icon-play'} onClick={handlePlay}></span>
		</div>
		<p className={'songname'}>{songMsg.songname}</p>
		<p className={'singer'}>{songMsg.singer}</p>
		<audio ref={player} src={url} autoPlay={false}></audio>
	</div>
}

export default  (Player)
