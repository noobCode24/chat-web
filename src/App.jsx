import { Route, Routes } from "react-router"
import Messages from "./pages/Messages"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Verification from "./pages/auth/Verification"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const colorMode = JSON.parse(window.localStorage.getItem('color-theme'))

    const className = 'dark'
    const bodyClass = window.document.body.classList
    colorMode === 'dark' ? bodyClass.add(className) : bodyClass.remove(className)
  }, [])

  return (
    <Routes>
      <Route index element={<Messages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Verification />} />
    </Routes>
  )
}

export default App
