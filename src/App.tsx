import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import CapitalHumano from "./pages/CapitalHumano";
import TI from "./pages/TI";
import Juridica from "./pages/Juridica";
import Retail from "./pages/Retail";
import Ecommerce from "./pages/Ecommerce";
import Administrativos from "./pages/Administrativos";
import Documentos from "./pages/Documentos";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="capital-humano" element={<CapitalHumano />} />
          <Route path="ti" element={<TI />} />
          <Route path="juridica" element={<Juridica />} />
          <Route path="retail" element={<Retail />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="administrativos" element={<Administrativos />} />
          <Route path="documentos" element={<Documentos />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;