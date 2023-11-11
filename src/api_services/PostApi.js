import axios from 'axios'

const PostApi = () => {
    
  const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/students/',{
        'f_name':'sohail',
        'l_name':'khan',
        'stream':'mca'
      })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }

  return (
    <>
      <h3>Insert from</h3>
      <input type='submit' value={'insert'} onClick={handleSubmit} /> 
    </>
  )
}

export default PostApi
