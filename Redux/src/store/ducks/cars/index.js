import {createAction, createReducer} from '@reduxjs/toolkit'

const INITIALSTATE = []

export const addCar = createAction('ADD_CAR')
export const addCars = createAction('ADD_CARS')


export default createReducer(INITIALSTATE, {
	[addCar.type]: (state, action) => [...state, action.payload],
	[addCars.type]: (state, action) => [...action.payload]
})