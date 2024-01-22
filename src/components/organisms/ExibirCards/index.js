import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useRef } from "react"
import redLabelImage from '../../../imagens/red-label.png';
import chivasImage from '../../../imagens/chivas.png';
import blackLabelImage from '../../../imagens/black-label.jpg';
import ballantinesImage from '../../../imagens/whisky-ballantines.png';
import glenfiddichImage from '../../../imagens/glenfiddich.webp';
import whiteHorseImage from '../../../imagens/whiteHorse.png';
import jackDaniels from '../../../imagens/jack-daniels.png';
import ballantines12 from '../../../imagens/ballantines-12.png';
import buchanans from '../../../imagens/buchanans-12.png'
import oldParr12 from '../../../imagens/old-parr-12.webp'
import Card from "../../atoms/Card";
import './exibirCards.css'
const ExibirCards=(props)=>{
    useEffect(() => {
        
        props.setWhisky([
            {
                'nome': 'Red Label',
                'preco': 109.99,
                'imagem': redLabelImage,
                'idade': 12,
                'publicada': true,
                'topico': 'os mais procurados'
            },
            {
                'nome': 'Chivas Regal 12',
                'preco': 119.99,
                'imagem': chivasImage,
                'idade': 12,
                'publicada': true,
                'topico': 'os mais procurados'
            },
            {
                'nome': 'Black Label',
                'preco': 209.99,
                'imagem': blackLabelImage,
                'idade': 21,
                'publicada': true,
                'topico': 'os mais procurados'
            },
            {
                'nome': 'Ballantines 08',
                'preco': 89.99,
                'imagem': ballantinesImage,
                'idade': 8,
                'publicada': true,
                'topico': 'os mais procurados'
            },
            {
                'nome': 'Ballantines 12',
                'preco': 159.99,
                'imagem': ballantines12,
                'idade':12,
                'publicada':true,
                'topico': null 
            },
            {
                'nome': 'Glenfiddich 12',
                'preco': 179.99,
                'imagem': glenfiddichImage,
                'idade': 12,
                'publicada': true,
                'topico': null
            },
            {
                'nome': 'White Horse',
                'preco': 39.99,
                'imagem': whiteHorseImage,
                'idade': 21,
                'publicada': true,
                'topico': null
            },
            {
                'nome': 'Jack Daniels',
                'preco': 169.99,
                'imagem': jackDaniels,
                'idade': 2,
                'publicada': true,
                'topico': 'os mais procurados'
            },
            {
                'nome': 'Buchanans 12',
                'preco': 179.99,
                'imagem': buchanans,
                'idade': 12,
                'publicada': true,
                'topico': 'os mais procurados'
            },
            {
                'nome': 'Old Parr 12',
                'preco': 129.99,
                'imagem': oldParr12,
                'idade': 12,
                'publicada': true,
                'topico': null
            }
        ]);
    }, []);
    const carousel = useRef(null)
    const handleForwardClick=(e)=>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    const handleBackClick=(e)=>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    return(
        <>
            <h1>{props.titulo}</h1>
            <section className="whiskys" ref={carousel}>
                {props.whisky.map((item,index)=>(
                    props.condicao(item)?(
                        <div className="cardWhisky" key={index}> 
                            <Card  nome={item.nome} preco={item.preco} imagem={item.imagem}/>
                        </div>
                    ):null
                ))}
                
            </section>
            <div className='buttonCarousel'>
                <button onClick={handleBackClick}>
                    <IoIosArrowBack size={30} color="#BFB0A3" />
                </button>
                <button onClick={handleForwardClick}>
                    <IoIosArrowForward size={30} color="#BFB0A3" />
                </button>
            </div>
            
        </>
    )
}
export default ExibirCards