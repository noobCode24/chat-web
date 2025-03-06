import { Route, Routes } from "react-router"
import Messages from "./pages/Messages"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Verification from "./pages/auth/Verification"

function App() {

  return (
    <Routes>
      <Route index element={<Messages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  )
}

export default App
