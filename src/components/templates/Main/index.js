import {useState } from "react"

import './main.css'
import ExibirCards from "../../organisms/ExibirCards";

const Main=()=>{
    const [whisky, setWhisky] = useState([]);
    return(
        <main className="principal">
            <ExibirCards whisky={whisky} setWhisky={setWhisky} titulo={'Os mais procurados'} condicao={(item)=>item.publicada && item.topico ==='os mais procurados'}/>
            <ExibirCards whisky={whisky} setWhisky={setWhisky} titulo={'12 anos'} condicao={(item)=>item.publicada && item.idade===12}/>
            
        </main>
    )
}
export default Main