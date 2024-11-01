import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import classes from 'styl es/App.module.scss'

function App() {
 

  return (
    <Routes>
<Route path='/login' element={<Login/>}/>
<Route path='courses' element={<Courses/>}>
<Route path='index' element={<Index/>}/>
<Route path=':courseId' />
</Route>
    </Routes>
  )
}

export default App
