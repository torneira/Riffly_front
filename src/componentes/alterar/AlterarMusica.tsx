import { useParams } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AlterarMusica(){
    const {id} = useParams()
    useEffect(()=>{
        fetch(`https://riffly-back.onrender.com/musicas/${id}`)
        .then(resposta=>resposta.json())
        .then(dados=>{
            setNome(dados.nome_musica)
            setCantor(dados.cantor_musica)
            setGenero(dados.genero_musica)
            setCapa(dados.capa_musica)
            setLancamento(dados.lancamento_musica)
            setOuvintes(dados.ouvintes_musica)
        
        })
      },[])
        const navigate = useNavigate();
        const [nome_musica,setNome] = useState("")
        const [cantor_musica,setCantor] = useState("")
        const [genero_musica,setGenero] = useState("")
        const [lancamento_musica,setLancamento] = useState("")
        const [capa_musica,setCapa] = useState("")
        const [ouvintes_musica,setOuvintes] = useState("")
    
        function handleForm(event:FormEvent){
            event.preventDefault();
            console.log("Tentei alterar musica");

            const musica = {

                id: id,
                nome_musica: nome_musica,
                cantor_musica: cantor_musica,
                genero_musica: genero_musica,
                lancamento_musica: lancamento_musica,
                capa_musica : capa_musica,
                ouvintes_musica: ouvintes_musica
            }

            fetch(`https://localhost:8000/musicas/${id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(musica)
            }).then(response => {
                if(response.status === 200){
                    alert("Musica alterada com sucesso")
                    navigate("/")
                }
                else{
                    alert("Erro ao alterar Musica")
                }
            })
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
                <h1 className="titulo">Tela Alterar Música</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label htmlFor="id">Id</label>
                        <input type="text" name="id" value={id} readOnly />
                    </div>
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" value={nome_musica}onChange={handleNome} />
                    </div>
                    <div>
                        <label htmlFor="cantor">Cantor</label>
                        <input type="text" name="cantor" value={cantor_musica} onChange={handleCantor} />
                    </div>
                    <div>
                        <label htmlFor="quant-music">Genero Musica</label>
                        <input type="text" name="quant-music" value={genero_musica} onChange={handleGenero} />
                    </div>
                    <div>
                        <label htmlFor="lancamento">Lançamento</label>
                        <input type="text" name="lancamento" value={lancamento_musica} onChange={handleLancamento}/>
                    </div>
                    <div>
                        <label htmlFor="capa">Capa</label>
                        <input type="link" placeholder="Link da imagem" name="capa" value={capa_musica}  accept="image/png, image/jpeg"  onChange={handleCapa} />
                        {capa_musica && <img className="imagem-previa-upload" src={capa_musica}/>}
                    </div>
                    <div>
                        <label htmlFor="ouvintes">Ouvintes</label>
                        <input type="text" name="ouvintes" value={ouvintes_musica} onChange={handleOuvintes} />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar"/>
                    </div>
                </form>
            </main>
        </>
    )
}

export default AlterarMusica;