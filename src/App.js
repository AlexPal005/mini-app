import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main/Main'
import { Page1 } from './pages/page1/Page1'
import { useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <IoMdArrowRoundBack
        onClick={() => {
          navigate(-1)
        }}
        className="back-button"
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page1 />} />
        <Route path="/page3" element={<Page1 />} />
        <Route path="/page4" element={<Page1 />} />
        <Route path="/page5" element={<Page1 />} />
      </Routes>
    </>
  )
}

export default App
