import { useState } from 'react';
import './ToDoList.css'

function ToDoList(){


    

    return(
        <div className='body-todo'>
        <h1>To-Do List</h1>

        <input  type="text" placeholder='Enter New Task To Do' />
        <button className='add-button'>Add</button>
        <div>
            <ol>
                <li>
                    
                    <input type="checkbox" />
                    <p>taskdksssssssssssskadssssssssadjfffffffffffffffffffffff</p>

                    <div className='li-buttons'>
                        <button className='edit-button'>EDIT</button>
                        <button className='up-button'>UP</button>
                        <button className='down-button'>DOWN</button>
                        <button className='delete-button'>DELETE</button>
                    </div>

                </li>
            </ol>
        </div>
        </div>
    )
}

export default ToDoList;