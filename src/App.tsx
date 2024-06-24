import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import  {Layout}  from "./Pages/Layout"
import { Home } from './components/Home'
import SignUp from './components/SignUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='*' element={<Home/>}/>
        </Route>
      </Routes>
      
    </div>
  )     
}

export default App
