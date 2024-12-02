import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { Page1 } from './pages/page1/Page1'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page1 />} />
      <Route path="/page3" element={<Page1 />} />
      <Route path="/page4" element={<Page1 />} />
      <Route path="/page5" element={<Page1 />} />
    </Routes>
  )
}

export default App
