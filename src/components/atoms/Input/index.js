import './input.css'
const Input =(props)=>{
    return(
        <div className='divInput'>
            <label className='etiqueta'>{props.label}</label>
            <input type={props.tipo} placeholder={props.placeholder} className='campoTexto' value={props.valor} onChange={props.aoMudar}></input>
        </div>
    )
}
export default Input