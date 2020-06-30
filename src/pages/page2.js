import React from 'react'
import { Button } from 'antd-mobile'
import {connect} from 'react-redux'
import {addAge} from '../store/action'


const mapStateToProps=(state)=>{
	return {
		age:state.age //age为自定义的代替redux state中age的props名称,state.age对应的reducer中的某个函数
	}
}
const mapDispathToProps=(dispath)=>{
	return {
		//AddAge为自定义的进行派发action动作的方法名,从props中取
		AddAge(data){
			//addAge为action中定义的动作名称，需从action引入
			dispath(addAge(data))
		}
	}


}
function Page2(props) {
	console.log('xxxx',props)
	return <div>page2<Button onClick={()=>{props.AddAge()}}>{props.age}</Button></div>
}

export default connect(mapStateToProps,mapDispathToProps)(Page2)
