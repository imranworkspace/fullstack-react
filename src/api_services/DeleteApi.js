import React, { useEffect } from 'react'
import axios from 'axios'

const DeleteApi = () => {
    useEffect(()=>{
        axios.delete('http://127.0.0.1:8000/students/10/')
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)})
    })
  return (
    <div>
      
    </div>
  )
}

export default DeleteApi
