import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form/1" element={<Form />} />
      </Routes>
    </BrowserRouter>
    
  );
}

/*OBS:
/* 1 - Navbar está solto dentro do BrowserRouter, pois ele será fixo em todas as páginas.
/* 2 - Não é possivel comentar dentro das tags filho do node, pois é um no comment habilitado.
*/

export default App;
