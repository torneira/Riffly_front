import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroAlbum(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome_album,setNome] = useState("")
    const [cantor_album,setCantor] = useState("")
    const [quant_musicas_album,setQntMsic] = useState("")
    const [lancamento_album,setLancamento] = useState("")
    const [capa_album,setCapa] = useState("")
    const [ouvintes_album,setOuvintes] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar Musicas");
        const album = {
            id: id,
            nome_album: nome_album,
            cantor_album: cantor_album,
            quant_musicas_album: quant_musicas_album,
            lancamento_album: lancamento_album,
            capa_album : capa_album,
            ouvintes_album: ouvintes_album
        }
        fetch("https://riffly-back.onrender.com/album",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(album)
        }).then(response => {
            if(response.status === 200){
                alert("Álbum cadastrada com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar Álbum")
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
    function handleQntMsic(event:ChangeEvent<HTMLInputElement>){
        setQntMsic(event.target.value)
    }
    function handleLancamento(event:ChangeEvent<HTMLInputElement>){
        setLancamento(event.target.value)
    }
    function handleCapa(event:ChangeEvent<HTMLInputElement>){
        setCapa(event.target.value)
    }
    function handleOuvintes(event:ChangeEvent<HTMLInputElement>){
        setOuvintes(event.target.value)
    }

    return(
        <>
            <h1>Tela Cadastro de Álbum</h1>
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
                    <label htmlFor="quant-music">Quantidade de Musica</label>
                    <input type="text" name="quant-music" onChange={handleQntMsic} />
                </div>
                <div>
                    <label htmlFor="lancamento">Lançamento</label>
                    <input type="text" name="lancamento" onChange={handleLancamento}/>
                </div>
                <div>
                    <label htmlFor="capa">Capa</label>
                    <input type="file" name="capa"  accept="image/png, image/jpeg"  onChange={handleCapa} />
                </div>
                <div>
                    <label htmlFor="ouvintes">Ouvintes</label>
                    <input type="text" name="ouvintes" onChange={handleOuvintes} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </>
    )
}