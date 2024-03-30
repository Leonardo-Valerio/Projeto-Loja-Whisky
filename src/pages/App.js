import '../App.css';
import Header from 'components/templates/Header';
import Main from 'components/templates/Main';
import Footer from 'components/templates/Footer';
import Sobre from 'components/templates/Sobre';
import{BrowserRouter, Route, Routes} from "react-router-dom";
import Garrafa from 'components/templates/MainBebida';
import MainCarrinho from 'components/templates/MainCarrinho';

function App() {
  
  return (
    <BrowserRouter>
      <body>
      
        <Header/>
      
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='sobre' element={<Sobre/>}/>
            <Route path='garrafa/:id'element={<Garrafa/>}/>
            <Route path='carrinho' element={<MainCarrinho/>} />
          </Routes>
      
      
        <Footer/>
      </body>
    </BrowserRouter>
  );
}

export default App;
