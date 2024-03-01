import {useState } from "react"
import './main.css'
import Banner from "components/atoms/Banner"
import ExibirCards from "components/organisms/ExibirCards";

const Main=()=>{
    const [whisky, setWhisky] = useState([]);
    return(
        <>
        <div className="bannerDiv">
            <Banner/>
        </div>
        <main className="principal">
            <ExibirCards whisky={whisky} setWhisky={setWhisky} titulo={'Os mais procurados'} condicao={(item)=>item.publicada && item.topico ==='os mais procurados'}/>
            <ExibirCards whisky={whisky} setWhisky={setWhisky} titulo={'12 anos'} condicao={(item)=>item.publicada && item.idade===12}/>
            
        </main>
        </>
    )
}
export default Main