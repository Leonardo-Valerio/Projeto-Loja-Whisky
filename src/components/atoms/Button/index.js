import './button.css'
const Button = (props)=>{
    return(
        <button className='botao' type='submit'>{props.children}</button>
    )
}
export default Button