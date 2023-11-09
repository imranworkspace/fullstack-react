import React, { useEffect } from 'react'
import axios from 'axios'

const GetApi = () => {
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/students/')
    .then(res=>{console.log(res.data)})
    .catch(err=>{console.log(err)})

  })
  return (
    <>
      
    </>
  )
}

export default GetApi
