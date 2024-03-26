import { useParams } from "react-router-dom"

const Teste = ()=>{
    const referencia = useParams();
    return(
        <h1>{referencia.id}</h1>
    )
}

export default Teste