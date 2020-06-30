import { combineReducers } from 'redux'

function age(state=23,action) {
	switch (action.type) {
	case 'addAge':
		return state+1
	case 'decAge':
		return state+1
	default:
		return state

	}
}
function money(state=10000,action) {
	switch (action.type) {
	case 'addMoney':
		return state+100
	case 'decMoney':
		return state+100
	default:
		return state

	}
}
export default combineReducers({
	age,
	money
})
