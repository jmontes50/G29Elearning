import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage"
import CreateProduct from "./pages/CreateProduct";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    // Browser Router es un contexto que conecta los componente con la history de API de JS
    <BrowserRouter>
    {/* cualquier componente que interactue con rutas necesita estar dentro de BrowserRouter */}
      <Navbar />
      <Routes>
        {/* aquí adentro podemos definir las rutas */}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/crear-producto" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
