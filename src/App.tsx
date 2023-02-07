import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Loja } from "./pages/Loja"
import { Login } from "./pages/Login"
import { Navbar } from "./components/Navbar"
import { ShoppingMineiroProvider } from "./context/ShoppingMineiroContext"

function App() {
  return (
    <ShoppingMineiroProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </ShoppingMineiroProvider>
  )
}

export default App
