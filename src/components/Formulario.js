import React, { useState, useEffect } from "react";
import "../style/Formulario.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks";
import { useNavigate, Link, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function Formulario() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams()
  const tasks = useSelector(state => state.tasks)


  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuidv4(),
        })
      );
    }

    navigate("/TaskApp");
  };


  useEffect(()=>{
    if(params.id){
      setTask(tasks.find(task => task.id === params.id))
    }
  }, [params, tasks])


  return (
    <form className="form" onSubmit={handleSubmit}>
      <Link to = '/TaskApp'>
        <MdArrowBackIosNew className="back-button" />
      </Link>
      <input
        className="task-input"
        type="text"
        placeholder="Agregar titulo"
        name="title"
        required
        onChange={handleChange}
        value={task.title}
      />

      <input
        className="task-input"
        type="text"
        name="description"
        onChange={handleChange}
        required
        placeholder="Agregar descripcion"
        value={task.description}
      />

      <button className="add-button">Agregar tarea</button>
    </form>
  );
}

export default Formulario;
