import { Route, Routes } from "react-router-dom";
import HomePage from "./componentes/layout/home/HomePage";
import CVPage from "./componentes/layout/CVPage";

function App() {
  return (
    // Enrutador principal: "/" para landing y "/cv" para la nueva vista de CV.
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cv" element={<CVPage />} />
    </Routes>
  );
}
export default App;
