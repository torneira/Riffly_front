import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroComentario(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome_usuario,setNome] = useState("")
    const [comentarios,setComentarios] = useState("")
 
    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar comentario");
        const comentario = {
            id: id,
            nome_usuario: nome_usuario,
            comentarios: comentarios,
            
        }
        fetch("https://riffly-back.onrender.com/comentarios",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comentario)
        }).then(response => {
            if(response.status === 200){
                alert("comentario feito com sucesso")
                navigate("/")
            }
            else{
                alert("Comentario não feito")
            }
        })
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleComentarios(event:ChangeEvent<HTMLInputElement>){
        setComentarios(event.target.value)
    }

  

    return(
        <>
            <a href="https://riffly-front.vercel.app">Inicio</a>
            <h1>Comentarios</h1>
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
                    <label htmlFor="comentario">Comentario</label>
                    <input type="text" name="comentario" onChange={handleComentarios} />
                </div>
            
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}