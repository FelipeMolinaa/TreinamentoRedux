import {createAction, createReducer} from '@reduxjs/toolkit' 

const INITIALSTATE = {
    showMessage: false
}

export const showMessage = createAction('SHOW_MESSAGE')
export const hideMessage = createAction('HIDE_MESSAGE')

export default createReducer(INITIALSTATE, {
    [showMessage.type]: (state, action) => ({...state, showMessage: true}),
    [hideMessage.type]: (state, action) => ({...state, showMessage: false}),
})

// export default (state = INITIALSTATE, action) =>{
//     switch(action.type){
//         case showMessage.type:
//             return {...state, showMessage: true}
//         case hideMessage.type:
//             return {...state, showMessage: false}
//         default:
//             return state
//     }
// }

// export const Types = {
//     SHOW_MESSAGE: 'SHOW_MESSAGE',
//     HIDE_MESSAGE: 'HIDE_MESSAGE'
// }

// export const Creators = {
//     showMessage: () =>({
//         type: Types.SHOW_MESSAGE
//     }),
//     hideMessage: () =>({
//         type: Types.HIDE_MESSAGE
//     })
// }