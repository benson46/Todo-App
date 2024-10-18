import { useState } from 'react';
import './ToDoList.css'

function ToDoList(){

    const [task,setTask] = useState("");

    const [tasks,setTasks] = useState([]);


    const newTask = (event)=>{
        setTask(event.target.value)
    }

    const addTask = ()=>{
        if(task.trim() !== ""){
            setTasks(prevTasks => [...prevTasks, {text:task,checkedValue:false,flag:false}]);
            setTask("")
        }
    }

    const checkMarkCheck = (index)=>{
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, checkedValue: !task.checkedValue } : task
            )
        );
    };



    const editTask = (index) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, flag: !task.flag } : task
            )
        );
    };

    const changeTask = (event,index) =>{
       const update = event.target.value;
       setTasks(prevTasks => 
        prevTasks.map((task,i)=>
        i === index? {...task,text:update} : task
        ))
    }

    

    return(
        <div className='body-todo'>
            <h1>To-Do List</h1>

            <input  type="text" placeholder='Enter New Task To Do' value={task} onChange={newTask}/>
            <button className='add-button' type='button' onClick={addTask}>Add</button>
            <div>
                <ol>
                    {tasks.map((task,index) =>(

                        <li key={index}>
                            <input type="checkbox" checked={task.checkedValue}  onChange={()=>checkMarkCheck(index)}/>
                            {task.flag === true ? (<p>{task.text}</p>) : <input type="text" value={task.text} onChange={(event)=>changeTask(event,index)} />}
                            

                            <div className='li-buttons'>
                                {!task.checkedValue ? (
                                    <>
                                    {task.flag === true ? <button className='edit-button' onClick={()=>editTask(index)}>EDIT</button> : <button className='edit-button' onClick={()=>editTask(index)}>SAVE</button> }
                                        
                                        <button className='up-button'>UP</button>
                                        <button className='down-button'>DOWN</button>
                                        <button className='delete-button'>DELETE</button>
                                    </>
                                ):"completed"}
                            </div>
                        </li>  

                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList;