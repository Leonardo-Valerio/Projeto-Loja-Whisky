import './button.css'
const Button = (props)=>{
    return(
        <button className='botao' type='submit' onClick={props.aoClicar}>{props.children}</button>
    )
}
export default Button