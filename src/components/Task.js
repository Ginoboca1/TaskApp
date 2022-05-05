import React from 'react';
import '../style/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task ({ id, texto, completada, completarTarea, eliminarTarea }){
    return(
        <div className= {completada ? 'task-contenedor completada' : 'task-contenedor'} >
          
          <div
          onClick={() => completarTarea(id)} 
          className='task-text'>
            {texto}
          </div>

          <div
          onClick={() => eliminarTarea(id)}
          className='contenedor-task-icon'>
            <AiOutlineCloseCircle className='task-icon' />
          </div>
        </div>
    )
}

export default Task;