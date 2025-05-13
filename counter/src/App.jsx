import { useState } from "react";










function App() {
  let [counter,setcounter] = useState(10)

  
function addvalue() {
 
  setcounter(counter + 1)
}
function devalue() {
  if(counter > 0)
  setcounter(counter - 1)
  else
  alert("invalid")
}


 

  return (
    <>
     <h1>abhilash</h1>
     <h2>counter : {counter}</h2>
     <br />
     <button 
     onClick={
      addvalue
     }
     >increase</button>
     <br />
     <br />
     <button
     onClick={devalue}
     >decrease</button>

    </>
  )
}

export default App
