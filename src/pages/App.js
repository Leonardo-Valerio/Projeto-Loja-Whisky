import '../App.css';
import { useState } from "react"
import Header from '../components/templates/Header';
import Main from '../components/templates/Main';
import Footer from '../components/templates/Footer';
function App() {
  const [whisky, setWhisky] = useState([]);
  return (
    <body>
      
      <Header/>
      <Main whisky={whisky} setWhisky={setWhisky}/>
      <Footer/>
    </body>
  );
}

export default App;
