import Button from "components/atoms/Button"
import Input from "components/atoms/Input"
import cadastros from "data/cadastros.json"
import { useState } from "react"

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const [confirmar, setConfirmar] = useState('')

const aoEnviar =(e)=>{
    e.preventDefault()
    console.log(username)
   }
const FormularioCadastro = ()=>{
    return(
        <form onSubmit={aoEnviar}>
            <Input 
                label = 'Nome' 
                valor = {username} 
                aoMudar ={(e)=>setUsername(e.target.value)} 
                placeholder='Digite seu username' 
                tipo = 'text' 
                tamanhoMax = {15} 
                tamanhoMin ={3}
            />
            <Input 
                label = 'E-mail' 
                valor = {email} 
                aoMudar ={(e)=>setEmail(e.target.value)} 
                placeholder='Digite seu e-mail' 
                tipo = 'email' 
                tamanhoMax = {20} 
                tamanhoMin ={5} />
            <Input 
                label = 'Senha' 
                valor = {senha} 
                aoMudar ={(e)=>setSenha(e.target.value)} 
                placeholder='Crie sua senha' 
                tipo = 'password' 
                tamanhoMax={20} 
                tamanhoMin ={3} />
            <Input 
                label = 'Confirmar senha' 
                valor = {confirmar} 
                aoMudar ={(e)=>setConfirmar(e.target.value)} 
                placeholder='Confirme sua senha' 
                tipo='password' 
                tamanhoMax={20} 
                tamanhoMin={3} />
                
            <Button>Cadastrar</Button>
        </form>
    )
}

export default FormularioCadastro