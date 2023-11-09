import React from 'react'
import GetApi from './api_services/GetApi'
import PostApi from './api_services/PostApi'
import PutApi from './api_services/PutApi'
import DeleteApi from './api_services/DeleteApi'

const App = () => {
  return (
    <div>
      <GetApi />
      <PostApi />
      <PutApi />
      <DeleteApi />
    </div>
  )
}

export default App
