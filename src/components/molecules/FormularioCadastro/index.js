import Button from "components/atoms/Button"
import Input from "components/atoms/Input"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

const FormularioCadastro = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmar, setConfirmar] = useState('')
    const [listaCadastros, setListaCadastros] = useState([])
    
    useEffect(() => {
        localStorage.setItem('cadastros', JSON.stringify(listaCadastros));
    }, [listaCadastros]);

    useEffect(() => {
        const storedCadastros = localStorage.getItem('cadastros');
        if (storedCadastros) {
            setListaCadastros(JSON.parse(storedCadastros));
        }
    }, []);

    

    const aoEnviar = (e) => {
        e.preventDefault();
        if (senha !== confirmar) {
            alert('As senhas não são as mesmas');
            return;
        }

        const novoCadastro = {
            id: uuidv4(),
            username: username,
            email: email,
            senha: senha
        };

        setListaCadastros([...listaCadastros, novoCadastro]);
        setUsername('');
        setEmail('');
        setSenha('');
        setConfirmar('');
    }

    useEffect(() => {
        console.log(listaCadastros);
    }, [listaCadastros]);

    return (
        <form onSubmit={aoEnviar}>
            <Input 
                label='Nome' 
                valor={username} 
                aoMudar={(e) => setUsername(e.target.value)} 
                placeholder='Digite seu username' 
                tipo='text' 
                tamanhoMax={15} 
                tamanhoMin={3}
            />
            <Input 
                label='E-mail' 
                valor={email} 
                aoMudar={(e) => setEmail(e.target.value)} 
                placeholder='Digite seu e-mail' 
                tipo='email' 
                tamanhoMax={20} 
                tamanhoMin={5} 
            />
            <Input 
                label='Senha' 
                valor={senha} 
                aoMudar={(e) => setSenha(e.target.value)} 
                placeholder='Crie sua senha' 
                tipo='password' 
                tamanhoMax={20} 
                tamanhoMin={3} 
            />
            <Input 
                label='Confirmar senha' 
                valor={confirmar} 
                aoMudar={(e) => setConfirmar(e.target.value)} 
                placeholder='Confirme sua senha' 
                tipo='password' 
                tamanhoMax={20} 
                tamanhoMin={3} 
            />
            <Button type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
