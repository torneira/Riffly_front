import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroUsuario(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome_usuario,setNome] = useState("")
    const [email_usuario,setEmail] = useState("")
    const [senha_usuario,setSenha] = useState("")
    const [imagem,setImagem] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar usuarios");
        const usuario = {
            id: id,
            nome_usuario: nome_usuario,
            email_usuario: email_usuario,
            senha_usuario: senha_usuario,
            imagem: imagem
        }
        fetch("http://localhost:8000/produtos",{
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
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }

    return(
        <>
            <h1>Tela Cadastro de Usuarios</h1>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" onChange={handleId} />
                </div>
                <div>
                    <label htmlFor="nome">nome</label>
                    <input type="text" name="nome" onChange={handleNome} />
                </div>
                <div>
                    <label htmlFor="descricao">descricao</label>
                    <input type="text" name="descricao" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="preco">preço</label>
                    <input type="text" name="preco" onChange={handleSenha} />
                </div>
                <div>
                    <label htmlFor="imagem">imagem</label>
                    <input type="text" name="imagem" onChange={handleImagem}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}