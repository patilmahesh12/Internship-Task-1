import './App.css'
import Header from './components/Header'
import Foot from './components/Foot'
import Hero from './components/Hero'
import Blog from './components/Blog'
import OriBlog from './components/OriBlog'
function App() {
  

  return (
    <>
    <Header/>
    <Hero/>
    {/* After Mapping */}
    <Blog/> 
    {/* Before Mapping   */}
        {/* <OriBlog/> */}
    <Foot/>
    </>
  )
}

export default App
