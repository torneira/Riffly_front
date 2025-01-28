import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarUsuario(){
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://riffly-back.onrender.com/usuario/${id}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setNome(dados.nome_usuario)
            setEmail(dados.email_usuario)
            setSenha(dados.senha_usuario)
            setFoto(dados.foto_usuario)

        })
      },[])
    const navigate = useNavigate();
        const [nome_usuario,setNome] = useState("")
        const [email_usuario,setEmail] = useState("")
        const [senha_usuario,setSenha] = useState("")
        const [foto_usuario,setFoto] = useState("")

        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei alterar usuário");
            const usuario = {
                id: id,
                nome_usuario: nome_usuario,
                email_usuario: email_usuario,
                senha_usuario: senha_usuario,
                foto_usuario: foto_usuario
            }
            fetch(`https://riffly-back.onrender.com/usuario/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            }).then(response => {
                if(response.status === 200){
                    alert("Usuário alterado com sucesso")
                    navigate("/")
                }
                else{
                    alert("Erro ao alterar usuário")
                }
            })
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
    
    return (
        <>
            <main>
                <a href="https://riffly-front.vercel.app">Inicio</a>
                <h1 className="titulo">Tela Alterar Usuário</h1>
                <form onSubmit={handleForm}>
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
                    <input type="submit" value="Alterar"/>
                </div>
            </form>
            </main>
        </>
    )
}

export default AlterarUsuario;