import './card.css'
import { Link } from 'react-router-dom';
const Card = (props)=>{
    return(
        <Link className='cardLink' to={`/teste/${props.nome}`}>
            <div className="card">
                <div className="divImg" style={{ background: `url(${props.imagem})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                </div>
                <div className="infos">
                    <h2>{props.nome}</h2>
                    <h3>R${props.preco}</h3>
                </div>
            </div>
        </Link>
    )
}
export default Card