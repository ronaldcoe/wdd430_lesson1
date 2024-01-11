'use client'
import { useState, useEffect } from 'react';

export default function AddTaskPage(){
    const [newTask, setNewTask] = useState<string>('')

    const [tasks, setTasks] = useState<string[]>([]);
    
    // Fecth tasks from local storage
    const fetchTasks = ():void => {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
        
    }

    useEffect(()=> {
        fetchTasks();
    },[newTask])

    // Save tasks to local storage
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        fetchTasks();
    }

    

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="shadow-md p-8 rounded-md">
                
                <div className="flex flex-col">
                    <h1 className="text-slate-800 font-bold text-xl">Tasks</h1>
                        <div className='max-h-60 overflow-scroll'>
                            {tasks.map((task, index) => (
                                <p key={index} className='w-full p-2 my-2 shadow-sm'>{task}</p>
                            ))}
                        </div>
                    <h1 className="text-slate-800 mt-8 text-sm">Add Task</h1>
                    <input type="text" className="border rounded mt-2 p-2" placeholder="Add a new task"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTask(e.target.value)}
                    />
                    <button className="bg-emerald-500 px-5 py-2 rounded-md mt-4" onClick={()=>saveTasks()}>Add task</button>
                </div>

            </div>


        </div>
    )
}