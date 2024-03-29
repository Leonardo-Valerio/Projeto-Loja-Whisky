import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useRef } from "react"
import Card from "components/atoms/Card";
import './exibirCards.css'
import { whiskyList } from 'data/bebidas';

const ExibirCards=(props)=>{
    useEffect(() => {
        
        props.setWhisky(whiskyList);
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
            <h1 className='tituloTopico'>{props.titulo}</h1>
            <section className="whiskys" ref={carousel}>
                {props.whisky.map((item,index)=>(
                    props.condicao(item)?(
                        <div className="cardWhisky" key={index}> 
                            <Card id={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem}/>
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