import { combineReducers } from 'redux'

function picUrl(state='',action) {
	switch (action.type) {
	case 'SetPicUrl':
		return action.data
	default:
		return state

	}
}

export default combineReducers({
	picUrl
})
