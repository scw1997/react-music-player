import {AddAge,DecAge,AddMoney,DecMoney} from './actionType'

export function addAge (data) {
	return {type:AddAge,data}
}
export function decAge (data) {
	return {type:DecAge,data}
}
export function addMoney (data) {
	return {type:AddMoney,data}
}
export function decMoney (data) {
	return {type:DecMoney,data}
}
