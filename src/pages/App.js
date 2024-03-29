import '../App.css';
import Header from 'components/templates/Header';
import Main from 'components/templates/Main';
import Footer from 'components/templates/Footer';
import Sobre from 'components/templates/Sobre';
import{BrowserRouter, Route, Routes} from "react-router-dom";
import Teste from 'components/templates/MainBebida';

function App() {
  
  return (
    <BrowserRouter>
      <body>
      
        <Header/>
      
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='sobre' element={<Sobre/>}/>
            <Route path='teste/:id'element={<Teste/>}/>
          </Routes>
      
      
        <Footer/>
      </body>
    </BrowserRouter>
  );
}

export default App;
