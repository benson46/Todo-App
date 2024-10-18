import React, { useState } from "react";
import './To-Do-List.css'


function ToDoList(){

    // Enter New Task
    const [newTask,setNewTask] = useState("");
    
    // Tasks Storing
    const [tasks, setTasks] = useState([
        { text: "elesisk", isEditable: false,isDone:false},
        { text: "did", isEditable: false, isDone:false }
    ]);


    // Handiling Enter New Task
    const handlingTask = (events)=>{
        setNewTask(events.target.value)
    }

    // Adding New Task
    const addList = ()=>{
        if(newTask.trim() !== ""){
            setTasks(t=>([...t,{text:newTask,isEditable:false,isDone:false}]))
            setNewTask("")
        }
        
    }

    // Delete Task
    const deleteTask = (index)=>{
        setTasks((tasks) => tasks.filter((_,i) => i!==index));
    }

    // Edit Task

    const editTask = (index) =>{
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, isEditable: !task.isEditable }; // Toggle editable state
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    const handleInputChange = (index, event) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, text: event.target.value }; // Update task text
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    // Move Task Up
    const moveUp = (index) =>{
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    
    // Move Task Down
    const moveDown = (index) =>{
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index+1],updatedTasks[index]] = [updatedTasks[index],updatedTasks[index+1]]
            setTasks(updatedTasks)
        }
    }


    const doneTask = (index)=>{
        const updatedTasks = [...tasks];
        updatedTasks[index].isDone = !updatedTasks[index].isDone
        setTasks(updatedTasks);
    }

    

return(
    <>
        <h1 className="header">TODO LIST</h1>
        <input type="text" className="input-new" placeholder="add item..." value={newTask} onChange={handlingTask} />
        <button className="add-button" onClick={addList}>ADD</button>

        <div className="center-container">
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <div className="spanText">
                            <input type="text" className="task-text" value={task.text} readOnly={!task.isEditable} onChange={(e) => handleInputChange(index, e)}/>
                        </div>
                        <div className="li-buttons">
                            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                            <button className="edit-button" onClick={()=>editTask(index)}>
                            {task.isEditable ? "Save" : "Edit"} {/* Change button text */}
                            </button>
                            <button className="moveUp-button" onClick={()=>moveUp(index)}>Up</button>
                            <button className="moveDown-button" onClick={()=>moveDown(index)}>Down</button>
                            <button className="done-button" onClick={()=>doneTask(index)} >
                                {!task.isDone? ` Did ` : `Undo`}</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    </>
)
}

export default ToDoList;