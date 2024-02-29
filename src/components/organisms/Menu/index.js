import './menu.css'
import React, { useEffect, useState } from 'react'
import { IoIosMenu } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom';
const Menu = ()=>{
    const [lista,setLista] = useState([{'nome':'Home','caminho':''},{'nome':'Carrinho','caminho':'carrinho'}, {'nome':'Harmonização','caminho':'harmonizacao'}, {'nome':'Um pouco de História...','caminho':'sobre'}])
    const [menuFechado,setMenuFechado]= useState(true)
    
    const handleClickMenu = ()=>{
        setMenuFechado(!menuFechado)
    }
     
    const localizacao = useLocation()
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
                    {console.log(localizacao)}
                    <Link to={item.caminho} className={localizacao.pathname === `/${item.caminho}` ? 'menuDestaque' : ''}>
                      {item.nome}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      );
    };
    
export default Menu