import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroAlbum(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome_album,setNome] = useState("")
    const [cantor_album,setCantor] = useState("")
    const [quant_musicas_album,setQuant] = useState("")
    const [lancamento_album,setLancamento] = useState("")
    const [capa_album,setCapa] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar usuarios");
        const album = {
            id: id,
            nome_album: nome_album,
            cantor_album: cantor_album,
            quant_musicas_album: quant_musicas_album,
            lancamento_album: lancamento_album,
            capa_album:capa_album
        }
        fetch("https://riffly-back.onrender.com/usuarios",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(album)
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
    function handleCantor(event:ChangeEvent<HTMLInputElement>){
        setCantor(event.target.value)
    }
    function handleQuant(event:ChangeEvent<HTMLInputElement>){
        setQuant(event.target.value)
    }
    function handleLancamento(event:ChangeEvent<HTMLInputElement>){
        setLancamento(event.target.value)
    }
    function handleCapa(event:ChangeEvent<HTMLInputElement>){
        setCapa(event.target.value)
    }

    return(
        <>
            <h1>Tela Cadastro de Usuarios</h1>
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
                    <label htmlFor="cantor">Cantor</label>
                    <input type="text" name="cantor" onChange={handleCantor} />
                </div>
                <div>
                    <label htmlFor="Quantidade">Quantidade</label>
                    <input type="text" name="Quantidade" onChange={handleQuant} />
                </div>
                <div>
                    <label htmlFor="Lancamento">Lancamento</label>
                    <input type="text" name="Lancamento"  onChange={handleLancamento}/>
                </div>
                <div>
                <label htmlFor="capa">Capa</label>
                    <input type="file" name="capa"  accept="image/png, image/jpeg" onChange={handleCapa}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}