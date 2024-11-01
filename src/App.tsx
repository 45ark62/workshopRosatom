
import { Routes,Route } from 'react-router-dom'
//import classes from 'styl es/App.module.scss'

function App() {
 

  return (
    <Routes>
<Route path='/login' />
<Route path='courses' >
<Route path='index' />
<Route path=':courseId' />
</Route>
    </Routes>
  )
}

export default App
