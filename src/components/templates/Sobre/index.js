import { useEffect, useState } from 'react';
import './sobre.css'
import { whiskyList } from 'data/bebidas';
const Sobre = ()=>{
    const [listWhiskys,setListWhiskys] = useState([])
    useEffect(()=>{
        const whiskyComDescricao = whiskyList.filter((garrafa)=> garrafa.descricao);
            setListWhiskys(whiskyComDescricao);
        },[])
    return(
        <main className="main-sobre-nos">
            <div className='sobre-nos'>
                <p>Heagal Haven como uma vasta biblioteca de whiskies, cada garrafa contando uma história única de habilidade artesanal e sabor. Assim como uma coleção bem selecionada de livros, Heagal Haven é um santuário para os entusiastas de whisky, onde a arte da destilação encontra a apreciação de paladares diversos.</p>
            </div>
            <section className='historias-whisky'>
                {listWhiskys.map((garrafa,index)=>(
                    <>
                    <h2 className='nome-garrafa'>{garrafa.nome}</h2>
                    <div key={index} className='garrafa-container'>
                        <div className='imagem-garrafa' style={{ background: `url(${garrafa.imagem})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
                        <div className='descricao-garrafa'>{garrafa.descricao}</div>
                </div>
                </>
                ))}
            </section>
        </main>
    )
}

export default Sobre