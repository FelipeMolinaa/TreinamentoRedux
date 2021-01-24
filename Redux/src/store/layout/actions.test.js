import {hideMessage, showMessage} from './index'

describe('Layout actions', ()=>{
    describe('ActionTypes', ()=>{
        test('deve retornar a action type SHOW_MESSAGE', ()=>{
            expect(showMessage.type).toEqual('SHOW_MESSAGE')
        });

        test('deve retornar a action Type HIDE_MESSAGE', ()=>{
            expect(hideMessage.type).toEqual('HIDE_MESSAGE')
        })
    })

    describe('ActionsCreators', ()=>{
        test('deve retornar SHOW_MESSAGE', ()=>{
            expect(showMessage()).toEqual({type: 'SHOW_MESSAGE'})
        });

        test('deve retornar HIDE_MESSAGE', ()=>{
            expect(hideMessage()).toEqual({type: 'HIDE_MESSAGE'})
        })
    })
})