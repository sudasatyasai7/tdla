import React,{useState} from 'react'
import Td from './td'
const App = () => {
  const[work,setWork]=useState("")
  const[todos,setTodos]=useState([])
  const event=e=>{
    setWork(e.target.value)
  }
  const submit=a=>{
    a.preventDefault();
    const newTodos=[...todos,work]
    setTodos(newTodos)
    setWork("")
  }
  const del=(indexValue)=>{
    const newTodos=todos.filter((to,index)=>index!==indexValue);
    setTodos(newTodos)
  }

  return (
    <div>
      <center>
        <h1>TODO MANAGEMENT APP</h1> <br></br>
        <form onSubmit={submit}>
          <input type='txt' placeholder='enter text' onChange={event} value={work} className='satya' name="chang"></input> &nbsp; &nbsp;
          <input type='submit' className='ajay' name="sub"></input>
        </form>
        <br></br>
        <br></br>
        <div>
        <Td tl={todos} dd={del}/>
        </div>
      </center>

    </div>
    
  )
}

export default App