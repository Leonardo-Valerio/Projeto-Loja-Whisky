import { useParams } from "react-router-dom"
import { whiskyList } from 'data/bebidas';
import Button from "components/atoms/Button";
import './mainBebida.css'

const Teste = ()=>{
    const referencia = useParams();
   
    const garrafa = whiskyList.find((whisky)=>{
        return whisky.id === referencia.id
    })
    
    return(
        <main className="mainGarrafa">
            <section className="garrafa">
                <div className="garrafa-img" style={{ background: `url(${garrafa.imagem})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                <div className="garrafa-info">
                    <h1>{garrafa.nome}</h1>
                    <h2>R$ {garrafa.preco}</h2>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </section>
        </main>
    )
}

export default Teste