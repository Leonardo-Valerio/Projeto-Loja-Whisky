import './card.css'
const Card = (props)=>{
    return(
        <div className="card">
            <div className="divImg" style={{ background: `url(${props.imagem})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            </div>
            <div className="infos">
                <h2>{props.nome}</h2>
                <h3>R${props.preco}</h3>
            </div>
        </div>
    )
}
export default Card