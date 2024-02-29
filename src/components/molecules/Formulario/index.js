import Button from "components/atoms/Button"
import Input from "components/atoms/Input"

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