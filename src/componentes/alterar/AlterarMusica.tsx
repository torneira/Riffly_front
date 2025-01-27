import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarAlbum(){
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://riffly-back.onrender.com/album/${id}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setNome(dados.nome_album)
            setCantor(dados.cantor_album)
            setQuant(dados.quant_musicas_album)
            setLancamento(dados.lancamento_album)
            setCapa(dados.capa_album)
            setOuvintes(dados.ouvintes_album)
        })
      },[])
    const navigate = useNavigate();
        const [nome_album,setNome] = useState("")
        const [cantor_album,setCantor] = useState("")
        const [quant_musicas_album,setQuant] = useState("")
        const [lancamento_album,setLancamento] = useState("")
        const [capa_album,setCapa] = useState("")
        const [ouvintes_album,setOuvintes] = useState("")
    
        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei alterar album");
            const album = {
                id: id,
                nome_album: nome_album,
                cantor_album: cantor_album,
                quant_musicas_album: quant_musicas_album,
                lancamento_album: lancamento_album,
                capa_album : capa_album,
                ouvintes_album: ouvintes_album
            }
            fetch(`https://riffly-back.onrender.com/album/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(album)
            }).then(response => {
                if(response.status === 200){
                    alert("Album alterado com sucesso")
                    navigate("/")
                }
                else{
                    alert("Erro ao alterar produto")
                }
            })
        }
    
        function handleNome(event:ChangeEvent<HTMLInputElement>){
            setNome(event.target.value)
        }
        function handleCantor(event:ChangeEvent<HTMLInputElement>){
            setCantor(event.target.value)
        }
        function handleQntMsic(event:ChangeEvent<HTMLInputElement>){
            setQuant(event.target.value)
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
    
    return (
        <>
            <main>
                <a href="https://riffly-front.vercel.app">Inicio</a>
                <h1 className="titulo">Tela Cadastro de Álbum</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">Id</label>
                        <input type="text" name="id" value={id} readOnly />
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
                        <input type="link" placeholder="Link da imagem" name="capa"  accept="image/png, image/jpeg"  onChange={handleCapa} />
                    </div>
                    <div>
                        <label htmlFor="ouvintes">Ouvintes</label>
                        <input type="text" name="ouvintes" onChange={handleOuvintes} />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar"/>
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarAlbum;