import React, { useState } from "react";
import "../style/Formulario.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks";
import { useNavigate, Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";

function Formulario() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuidv4(),
      })
    );
    navigate("/TaskApp");
  };

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
      />

      <input
        className="task-input"
        type="text"
        name="description"
        onChange={handleChange}
        required
        placeholder="Agregar descripcion"
      />

      <button className="add-button">Agregar tarea</button>
    </form>
  );
}

export default Formulario;
