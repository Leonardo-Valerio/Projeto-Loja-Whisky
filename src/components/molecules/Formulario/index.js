import Button from "components/atoms/Button"
import Input from "components/atoms/Input"

const Formulario = (props)=>{
    return(
        <>
            <form>
                <Input label = 'Digite seu e-mail' tipo = 'text' placeholder='abcd@gmail.com'/>
            </form>
            <Button>Enviar</Button>
        </>
    )
}
export default Formulario 