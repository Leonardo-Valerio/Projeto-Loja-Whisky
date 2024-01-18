const Input =(props)=>{
    return(
        <div>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}
export default Input