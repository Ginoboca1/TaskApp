import React, { useState } from 'react';
import '../style/Formulario.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';


function Formulario(props){

    const [input, setInput] = useState('')

    const handleChange = (e) =>{
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const nuevaTarea = {
            id: uuidv4(),
            texto : input,
            completada: false
        }

        props.onSubmit(nuevaTarea)
    }

    

    return (
        <form
        onSubmit={handleSubmit}
         className='form-contain'>
            <input
            className='task-input'
            type='text'
            placeholder='Agregar tarea'
            name='texto'
            onChange={handleChange}
            />

            <button className='button-task'>
            <AiFillPlusCircle className='input-icon' />
            </button>
        </form>
    )
}

export default Formulario;
