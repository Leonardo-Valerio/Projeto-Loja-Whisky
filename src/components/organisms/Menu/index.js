import './menu.css'
import React, { useEffect, useState } from 'react'
const Menu = ()=>{
    const [lista,setLista] = useState([])
    useEffect(()=>{
        setLista(['Home','Carrinho', 'Harmonização', 'Um pouco de História...'])
    },[])
    
    
    return(
        <>
            <div>
                <nav className="menuDeOpcoes">
                    <ul>
                       {lista.map((item, index)=>(
                        <li key={index}>
                            <a href='#'>{item}</a>
                        </li>
                       ))} 
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Menu