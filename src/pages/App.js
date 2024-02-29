import '../App.css';
import Header from 'components/templates/Header';
import Main from 'components/templates/Main';
import Footer from 'components/templates/Footer';
import Sobre from 'components/templates/Sobre';
import{BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <body>
      
        <Header/>
      
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='sobre' element={<Sobre/>}/>
          </Routes>
      
      
        <Footer/>
      </body>
    </BrowserRouter>
  );
}

export default App;
