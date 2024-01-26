import './menu.css'
import React, { useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
const Menu = ()=>{
    const [lista,setLista] = useState([])
    const [menuFechado,setMenuFechado]= useState(true)
    

    useEffect(()=>{
        setLista(['Home','Carrinho', 'Harmonização', 'Um pouco de História...'])
    },[])

    
    const handleClickMenu = ()=>{
        setMenuFechado(!menuFechado)
    }
     
    
    return (
        <div className='boxMenu'>
          {window.innerWidth <= 760 && (
            <button className='botaoMenu' onClick={handleClickMenu}>
                <IoIosMenu size={30} color="#BFB0A3" />
            </button>
          )}
    
          {(menuFechado) && (
            <nav className="menuDeOpcoes">
              <ul>
                {lista.map((item, index) => (
                  <li key={index}>
                    <a href='#'>{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      );
    };
    
export default Menu