import './App.css'
import Header from './components/layout/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Portfolio from './pages/Portfolio'
import Calculator from './pages/Calculator'
import Risk from './pages/Risk'
import Insights from './pages/Insights'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/risk" element={<Risk />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
      <div>
        <Header></Header>
      </div>
    </BrowserRouter>
    
  )
}

export default App
