import { FormEvent, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroMusica(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome_musica,setNome] = useState("")
    const [cantor_musica,setCantor] = useState("")
    const [genero_musica,setGenero] = useState("")
    const [letra_musica,setLetra] = useState("")
    const [capa_musica,setCapa] = useState("")
    const [lancamento_musica,setLancamento] = useState("")
    const [ouvintes_musica,setOuvintes] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar Musicas");
        const musica = {
            id: id,
            nome_musica: nome_musica,
            cantor_musica: cantor_musica,
            genero_musica: genero_musica,
            letra_musica: letra_musica,
            capa_musica : capa_musica,
            lancamento_musica: lancamento_musica,
            ouvintes_musica: ouvintes_musica
        }
        fetch("https://riffly-back.onrender.com/musicas",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(musica)
        }).then(response => {
            if(response.status === 200){
                alert("Musica cadastrada com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar Musica")
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
    function handleGenero(event:ChangeEvent<HTMLInputElement>){
        setGenero(event.target.value)
    }
    function handleLetra(event:ChangeEvent<HTMLInputElement>){
        setLetra(event.target.value)
    }
    function handleCapa(event:ChangeEvent<HTMLInputElement>){
        setCapa(event.target.value)
    }
    function handleLancamento(event:ChangeEvent<HTMLInputElement>){
        setLancamento(event.target.value)
    }
    function handleOuvintes(event:ChangeEvent<HTMLInputElement>){
        setOuvintes(event.target.value)
    }

    return(
        <>
            <h1>Tela Cadastro de Musicas</h1>
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
                    <label htmlFor="genero">Genero</label>
                    <input type="text" name="genero" onChange={handleGenero} />
                </div>
                <div>
                    <label htmlFor="letra">Letra</label>
                    <input type="text" name="letra" onChange={handleLetra}/>
                </div>
                <div>
                    <label htmlFor="capa">Capa</label>
                    <input type="file" name="capa"  accept="image/png, image/jpeg" onChange={handleCapa} />
                    
                </div>
                <div>
                    <label htmlFor="lancamento">Lançamento</label>
                    <input type="text" name="lancamento" onChange={handleLancamento} />
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
