import { useParams } from "react-router-dom"
import { whiskyList } from 'data/bebidas';
import Button from "components/atoms/Button";
import './mainBebida.css'
import Input from "components/atoms/Input";
import { useState } from "react";

const Garrafa = ()=>{
    const referencia = useParams();
   
    const garrafa = whiskyList.find((whisky)=>{
        return whisky.id === referencia.id
    })

    const [numero, setNumero] = useState(1)

   const aoEnviar =(e)=>{
    e.preventDefault()
    console.log(garrafa)
   }
    
    return(
        <main className="mainGarrafa">
            <section className="garrafa">
                <div className="garrafa-img" style={{ background: `url(${garrafa.imagem})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                <div className="garrafa-info">
                    <h1>{garrafa.nome}</h1>
                    <h2>R$ {garrafa.preco}</h2>
                    <form onSubmit={aoEnviar}>
                        <Input valor = {numero}  tipo = 'number' label = 'Quantidade' aoMudar = {(e)=>setNumero(e.target.value)}></Input>
                        <Button>Adicionar ao carrinho</Button>
                    </form>
                    
                </div>
            </section>
        </main>
    )
}

export default Garrafa