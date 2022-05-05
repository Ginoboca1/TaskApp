import React, { useState} from 'react';
import '../style/Tasklist.css';
import Formulario from './Formulario';
import Task from './Task';


function Tasklist(){

  const [tareas,setTareas] = useState([])

  const agregarTarea = tarea =>{
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [tarea,...tareas]
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map(tarea =>{
      if(tarea.id ===id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas);
  }

    return (
        <div>
          <h1 className = "tasklist-title">Tareas</h1>
          <Formulario onSubmit = {agregarTarea}/>
          
          <div className='tasklist-contain'>
              {
                tareas.map((tarea) =>
                  <Task
                  key={tarea.id}
                  id = {tarea.id} 
                  texto = {tarea.texto}
                  completada = {tarea.completada}
                  completarTarea = {completarTarea}
                  eliminarTarea = {eliminarTarea} />
                )
              }
          </div>
        </div>
    )
}

export default Tasklist;