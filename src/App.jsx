import { Navigate, Route, Routes } from "react-router"
import Messages from "./pages/Messages"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Verification from "./pages/auth/Verification"
import { useEffect } from "react"
import Profile from "./pages/Profile"
import Layout from "./layout"

function App() {

  useEffect(() => {
    const colorMode = JSON.parse(window.localStorage.getItem('color-theme'))

    const className = 'dark'
    const bodyClass = window.document.body.classList
    colorMode === 'dark' ? bodyClass.add(className) : bodyClass.remove(className)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Signup />} />
      <Route path="/auth/verify" element={<Verification />} />

      <Route path="dashboard" element={<Layout />}>
        <Route index element={<Messages />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
