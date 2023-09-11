"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle]=useState("")
  const [description,setdescription]=useState("")
  const [mainTask,setmainTask]=useState([])
  const submitHandler = (e)=>{
      e.preventDefault()
      // console.log(title)
      // console.log(description)
      setmainTask([...mainTask,{title, description} ])
      settitle("")
      setdescription("")
      console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask= <h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=> {
      return (
        <li key={i} className='flex items-center justify-between mb-9'>
      <div className='flex justify-between mb-6 w-2/3'>
        <h3 className='text-3xl font-semibold'>{t.title}</h3>
        <h4 className='text-lg font-semibold'>{t.description}</h4>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-300 text-white rounded-full font-bold p-3'>Delete</button>
        </li>
      )
  })
  }
  return (
    <>
    <h1 className='bg-violet-600 text-white p-9 text-9xl font-bold text-center'>To-do List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-3xl bg-violet-100 border-zinc-900 border-3 m-6 px-6 py-3' placeholder='Enter your task here' value={title} onChange={(e)=> {
        // console.log(e.target.value)
           settitle(e.target.value)
      }}></input>
      <input type='text' className='text-3xl bg-blue-100 border-zinc-900 border-3 m-6 px-6 py-3' placeholder='Enter description of the task here' value={description} onChange={(e)=> {
           setdescription(e.target.value)
      }}></input>
      <button className='bg-black text-white px-6 py-3 text-3xl font-bold rounded-full'>Add Task</button>
     
    </form>
    <hr></hr>
    <div className='p-9 bg-slate-300'>
        <ul>
          {renderTask}
        </ul>
    </div>
    </>
  )
}

export default page
