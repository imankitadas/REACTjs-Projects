import { useState } from 'react'

import './App.css'

function App() {
    const[count, setCount] = useState(0)

   const addOnbtn = () =>{ 
      setCount(count+1)

   }

   const removebtn = () =>{ 
       setCount(count-1)
   }

  return (
    <>
       <h1>Counter</h1>
       <div className='container'>
          <div className='box'>
              <p>{count}</p>
          </div>
           <div className='counterbtns'>
              <button className='addBtn' onClick={addOnbtn}>+</button>
              
              <button className='subBtn' onClick={removebtn}>-</button>
           </div>
       </div>
    </>
  )
}

export default App
