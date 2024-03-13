import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Watch from './Pages/Watch'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Watch' element={<Watch/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
