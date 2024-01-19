import './input.css'
const Input =(props)=>{
    return(
        <div className='divInput'>
            <label className='etiqueta'>{props.label}</label>
            <input placeholder={props.placeholder} className='campoTexto'></input>
        </div>
    )
}
export default Input