import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Propos } from './pages/Propos'
import { Projet } from './pages/Projet'
import { Contact } from './pages/Contact'
import { Service } from './pages/Service'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { LenisProvider } from './components/LenisProvider'

function App() {
  return (
    <div className='bg-[#F5F5F0]'>

    <LenisProvider >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/:serviceName" element={<Service />} /> {/* Dynamic Service Page */}
        <Route path="/projet" element={<Projet />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </LenisProvider>
    </div>
  )
}

export default App
