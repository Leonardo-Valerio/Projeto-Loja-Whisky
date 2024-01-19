import Button from "../../atoms/Button"
import Input from "../../atoms/Input"

const Formulario = ()=>{
    return(
        <>
            <form>
                <Input label = 'Digite seu e-mail' placeholder='abcd@gmail.com'/>
            </form>
            <Button>Enviar</Button>
        </>
    )
}
export default Formulario 