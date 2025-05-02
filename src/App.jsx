// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Propos } from './pages/Propos'
import { Projet } from './pages/Projet'
import { Contact } from './pages/Contact'
import { Service } from './pages/Service'

function App() {
  return (
    <BrowserRouter>
          <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
