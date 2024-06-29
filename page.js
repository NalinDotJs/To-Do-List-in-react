"use client"
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler = (e) =>{
    e.preventDefault()
    setmaintask([...maintask, {title,desc}])
    settitle("")
    setdesc("")
  }

  const deletehandler = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let rendertask = <h2>No Task Available</h2>

  if(maintask.length>0){
    rendertask = maintask.map((t,i)=>{
      return(
      <li key={i} className='flex items-center justify-between mb-5'> 
      <div className='flex justify-between px-8 py-8 w-2/3'>
        <h5 className='text-bold text-2xl ' >{t.title.toUpperCase()}</h5>
        <h6 className='text-bold text-xl'>{t.desc}</h6>
      </div>
      <button onClick={()=>{deletehandler(i)}} className='bg-red-400 px-5 py-2 text-white font-bold rounded-md'>Delete</button>
      </li>)
    })
    
  }
  
  return (
    <>
    <h1 className  = "text-gray-400 bg-black rounded text-center p-5 text-5xl font-bold">Nalin's To-Do List</h1>
    <form onSubmit={submithandler}> 
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded' placeholder='Enter Task Here' value={title}
      onChange={(e)=>{
        // console.log(e.target.value)
        settitle(e.target.value)
      }}></input>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded' placeholder='Description' value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}></input>
      <button className='bg-black text-white px-4 py-2 text-2xl rounded'>Add Task</button>
    </form>

    <hr/>

    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>
    </div>
    </>
  )
}

export default page
