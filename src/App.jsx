import './App.css'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <MyFooter />
    </div>
  )
}

export default App
