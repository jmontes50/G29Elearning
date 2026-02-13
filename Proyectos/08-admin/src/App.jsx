import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage"

const App = () => {
  return (
    // Browser Router es un contexto que conecta los componente con la history de API de JS
    <BrowserRouter>
      <Routes>
        {/* aquí adentro podemos definir las rutas */}
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
