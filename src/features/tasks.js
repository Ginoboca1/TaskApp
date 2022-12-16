import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: "1",
      title: "Task 1",
      completed: false,
      description: "This is a task",
    },
    {
      id: "2",
      title: "Task 2",
      completed: false,
      description: "This is a task",
    },
  ];

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      addTask: (state, action) =>{
        state.push(action.payload)
      },
      deleteTask: (state,action) =>{
        const taskDelete = state.find((task) => task.id === action.payload)
        if(taskDelete){
          state.splice(state.indexOf(taskDelete), 1);
        }
      },
      editTask: (state, action) => {
        const {id, title, description} = action.payload
        const taskFound = state.find(task => task.id === id)
        if(taskFound){
          taskFound.title = title
          taskFound.description = description
        }
      }
    }
})

export const {addTask, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer;