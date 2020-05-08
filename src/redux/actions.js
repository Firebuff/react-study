import {PLUS, MINUS } from './actionTypes'

export const plusCreater = (number) => {
	return {
		type: PLUS,
		data: number
	}
}

export const minusCreater = (number) => {

	return {
		type: PLUS,
		number: number
	}
}

