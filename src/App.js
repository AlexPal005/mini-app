import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main/Main'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<div>page1</div>} />
        <Route path="/page2" element={<div>page2</div>} />
        <Route path="/page3" element={<div>page3</div>} />
        <Route path="/page4" element={<div>page4</div>} />
        <Route path="/page5" element={<div>page5</div>} />
      </Routes>
    </div>
  )
}

export default App
