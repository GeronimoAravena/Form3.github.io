import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from'./components/Registro'
import './styles/App.css';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='App container'>
        <Registro/>
      </div>
    </>
  )
}

export default App
