import { useParams } from "react-router-dom"
import { whiskyList } from 'data/bebidas';
const Teste = ()=>{
    const referencia = useParams();
   
    const garrafa = whiskyList.find((whisky)=>{
        return whisky.id === referencia.id
    })
    
    return(
        <>

            
            <h1>{garrafa.preco}</h1>
            
        </>
    )
}

export default Teste