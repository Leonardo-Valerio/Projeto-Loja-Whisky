import '../App.css';
import { useState } from "react"
import Header from '../components/templates/Header';
import Main from '../components/templates/Main';
function App() {
  const [whisky, setWhisky] = useState([]);
  return (
    <body>
      
      <Header/>
      <Main whisky={whisky} setWhisky={setWhisky}/>
    </body>
  );
}

export default App;
