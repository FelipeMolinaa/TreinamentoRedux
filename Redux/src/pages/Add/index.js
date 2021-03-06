import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import {hideMessage, showMessage} from '../../store/ducks/layout'

import {addCarFetch} from '../../store/ducks/fetchActions'

export default function Add() {

	const [form, setForm] = useState({name: '', url: ''})
	const dispatch = useDispatch()

	function formChange(e){
		setForm({...form, [e.target.name]: e.target.value})
	}

	function onSubmit(e){
		e.preventDefault()

		dispatch(addCarFetch(form))

		setForm({name: '', url: ''})

		dispatch(showMessage())

		setTimeout(()=>{
			dispatch(hideMessage())
		}, 2000)
	}

	return (
		<form onSubmit={onSubmit} className="container mt-5">
			<div className="form-group">
				<label>Nome</label>
				<input onChange={formChange} type="text" name="name" className="form-control" placeholder="Nome..." value={form.name}/>
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={formChange} type="text" name="url" className="form-control" placeholder="URL:https://cars" value={form.url}/>
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
