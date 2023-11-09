import React, { useEffect } from 'react'
import axios from 'axios'

const PutApi = () => {
    useEffect(()=>{
        axios.put('http://127.0.0.1:8000/students/5/',  {
            "f_name": "Mohammad",
            "l_name": "Israr",
            "stream": "mca"
        })
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)})
    })
  return (
    <div>
      
    </div>
  )
}

export default PutApi
