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
      {/* {
        data.map((d,i)=>{
          return <p key={i}>{d.f_name}</p>
        })
      } */}


      <table align='center'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Stream</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((d,i)=>(
              <tr key={i}>
                <td>{d.f_name}</td>
                <td>{d.l_name}</td>
                <td>{d.stream}</td>
              </tr>  
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default GetApi
