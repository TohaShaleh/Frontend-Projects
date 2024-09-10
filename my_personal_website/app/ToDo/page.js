"use client"

import React, { useState } from 'react'

const ToDo = () => {

  const [title, setTitle] = useState("")
  const [descrip, setDescrip] = useState("")
  const [store, setStore] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const takeTitle = (e) => {
    setTitle(e.target.value);
  }

  const takeDescrip = (e) => {
    setDescrip(e.target.value);
  }

  const addTitle = (e) => {
    e.preventDefault();

    if (isEditing) 
      {
      const updatedTasks = store.map((item, ind) => {
        return  ind === currentIndex ? { title, descrip } : item
      }
      );
      setStore(updatedTasks);
      setIsEditing(false);
      setCurrentIndex(null);
    } 
    else 
    {
      setStore([...store, { title, descrip }]);
    }

    setDescrip("");
    setTitle("");
  }


  const deleteTask = (ind) => {
    const delStore = [...store];
    delStore.splice(ind, 1);
    setStore(delStore);
  }


  const updateTask = (ind) => {
    const taskToEdit = store[ind];
    setTitle(taskToEdit.title);
    setDescrip(taskToEdit.descrip);
    setIsEditing(true);
    setCurrentIndex(ind);
  }

  return (
    <>
      <div>
        <h1 className='text-4xl md:text-6xl font-bold text-center bg-green-500 w-full h-[80px] md:h-[100px] flex justify-center items-center '>
          My ToDo List
        </h1>
      </div>

      <form onSubmit={addTitle} className='flex flex-col md:flex-row items-center justify-center gap-5 m-5 md:mt-5'>
        {/* Changed to flex-col on small screens, flex-row on medium and above */}
        <input
          type='text'
          placeholder='Enter Title Here'
          required
          value={title}
          onChange={takeTitle}
          className='w-full md:w-[400px] rounded p-3 md:p-5 text-lg md:text-xl'
          // Adjusted width, padding, and font size for responsiveness
        />

        <input
          type='text'
          placeholder='Enter Description Here'
          required
          value={descrip}
          onChange={takeDescrip}
          className='w-full md:w-[400px] rounded p-3 md:p-5 text-lg md:text-xl'
          // Adjusted width, padding, and font size for responsiveness
        />

        <button
          type='submit'
          className='w-full md:w-auto text-xl rounded bg-blue-500 p-3 md:p-5 hover:bg-yellow-400'>
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </form>

      {store.length === 0 ? (
       <div>
        <h1 className='font-bold text-2xl md:text-4xl text-center mt-10'>The List is Empty Now </h1>
        <h1 className='font-bold text-xl md:text-3xl text-center m-8'> Add New Task </h1>
        </div>
      ) : (
        <div className='mt-5 md:mt-7 bg-slate-400 p-3 rounded'>
          {store.map((item, ind) => {
            return (
              <div key={ind} className='flex flex-col md:flex-row justify-center items-center gap-5 mb-7'>
                {/* Changed to flex-col on small screens, flex-row on medium and above */}
                <h1 className='w-full md:w-[300px] text-2xl md:text-3xl text-center md:text-left'>
                  {item.title}
                </h1>
                <h1 className='w-full md:w-[300px] text-xl md:text-2xl text-center md:text-left'>
                  {item.descrip}
                </h1>

                <button onClick={() => deleteTask(ind)}
                  className='bg-red-600 rounded hover:bg-blue-800 hover:text-white p-2 md:p-3'>
                  Delete Task
                </button>

                <button onClick={() => updateTask(ind)}
                  className='bg-green-500 rounded hover:bg-blue-800 hover:text-white p-2 md:p-3'>
                  Update Task
                </button>

              </div>
            )
          })}
        </div>
      )}

    </>
  )
}

export default ToDo;