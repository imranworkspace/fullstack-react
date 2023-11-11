import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetApi = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/students/')
    .then(res=>{setData(res.data)})
    .catch(err=>{console.log(err)})

  })
  return (
    <div>
      <h3>Get By Axios Using Django api</h3>
      {
        data.map((d,i)=>{
          return <p key={i}>{d.f_name}</p>
        })
      }
    </div>
  )
}

export default GetApi
