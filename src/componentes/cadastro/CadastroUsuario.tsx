import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./CadastroUsuario.css"

export default function CadastroUsuario(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome_usuario,setNome] = useState("")
    const [email_usuario,setEmail] = useState("")
    const [senha_usuario,setSenha] = useState("")
    const [foto_usuario,setFoto] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar usuarios");
        const usuario = {
            id: id,
            nome_usuario: nome_usuario,
            email_usuario: email_usuario,
            senha_usuario: senha_usuario,
            foto_usuario: foto_usuario
        }
        fetch("https://riffly-back.onrender.com/usuarios",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        }).then(response => {
            if(response.status === 200){
                alert("Usuario cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar usuario")
            }
        })
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleSenha(event:ChangeEvent<HTMLInputElement>){
        setSenha(event.target.value)
    }
    function handleEmail(event:ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }
    function handleFoto(event:ChangeEvent<HTMLInputElement>){
        setFoto(event.target.value)
    }

    return(
        <>
            <a href="https://riffly-front.vercel.app">Inicio</a>
            <h1 className="titulo">Cadastre-se</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">Id</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" onChange={handleSenha} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="foto">Foto</label>
                    <input type="link" name="foto" placeholder="Link da foto"  accept="image/png, image/jpeg" onChange={handleFoto}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}