import React, { useState } from 'react';
import '../style/Formulario.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';


function Formulario({onSubmit}){

    const [input, setInput] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const nuevaTarea = {
            id: uuidv4(),
            texto : input,
            completada: false
        }
        onSubmit(nuevaTarea)
        setInput('')

    }

    
    return (
        <form onSubmit={handleSubmit} className='form-contain'>
            <input
            className='task-input'
            type='text'
            placeholder='Agregar tarea'
            name='texto'
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            />

            <button className='button-task'>
            <AiFillPlusCircle className='input-icon' />
            </button>
        </form>
    )
}

export default Formulario;
