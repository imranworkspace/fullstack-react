import React, { useEffect } from 'react'
import axios from 'axios'

const PostApi = () => {
    useEffect(()=>{
        axios.post('http://127.0.0.1:8000/students/',  {
            "f_name": "Ahmad",
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

export default PostApi
