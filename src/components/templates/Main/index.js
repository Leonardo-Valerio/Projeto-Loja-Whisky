import { useEffect } from "react"
import redLabelImage from '../../../imagens/red-label.png';
import chivasImage from '../../../imagens/chivas.png';
import blackLabelImage from '../../../imagens/black-label.jpg';
import ballantinesImage from '../../../imagens/whisky-ballantines.png';
import glenfiddichImage from '../../../imagens/glenfiddich.webp';
import whiteHorseImage from '../../../imagens/whiteHorse.png';
import Card from "../../atoms/Card"
import './main.css'
const Main=(props)=>{
    useEffect(() => {
        
        props.setWhisky([
            {
                'nome': 'Red Label',
                'preco': 109.99,
                'imagem': redLabelImage
            },
            {
                'nome': 'Chivas Regal',
                'preco': 119.99,
                'imagem': chivasImage
            },
            {
                'nome': 'Black Label',
                'preco': 209.99,
                'imagem': blackLabelImage
            },
            {
                'nome': 'Ballantines',
                'preco': 159.99,
                'imagem': ballantinesImage
            },
            {
                'nome': 'Glenfiddich',
                'preco': 179.99,
                'imagem': glenfiddichImage
            },
            {
                'nome': 'White Horse',
                'preco': 39.99,
                'imagem': whiteHorseImage
            }
        ]);
    }, []);
   
    return(
        <main className="principal">
            <h1>Os Mais Procurados</h1>
            <section className="whiskys">
                {props.whisky.map((item,index)=>(
                    
                    <div className="cardWhisky" key={index}> 
                        {console.log(props.imagem)}
                        <Card  nome={item.nome} preco={item.preco} imagem={item.imagem}/>
                    </div>
                ))}
            </section>
        </main>
    )
}
export default Main