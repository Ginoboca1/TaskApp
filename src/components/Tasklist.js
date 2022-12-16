import "../style/Tasklist.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasks";
import { useDispatch } from "react-redux";


function Tasklist() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };



  return (
    <div className = 'container'>
      <h1 className="tasklist-title">Tareas ({tasks.length})</h1>
      <div className="tasklist-contain">
        {tasks.map((task) => (
          <div className = 'task' key={task.id}>
            <div className="task-text">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>

            <button className="deleteButton" onClick={() => handleDelete(task.id)}>delete</button>
            <button className="editButton">
              <Link to={`/TaskApp/${task.id}`}>Edit</Link>
            </button>
          </div>
        ))}
      </div>

      <Link to='/TaskApp/create'>
        <button className="button-tasklist">Añadir Tarea</button>
      </Link>
    </div>
  );
}

export default Tasklist;
