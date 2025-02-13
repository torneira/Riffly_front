import { useEffect,useState } from "react";
import './App.css'
import { Link } from "react-router-dom";
type usuarios ={
  id: number,
  nome_usuario: string,
  email_usuario: string,
  senha_usuario: string,
  foto_usuario:string
}
type musicas ={
  id: number,
  nome_musica: string,
  cantor_musica: string,
  genero_musica: string,
  letra_musica: string,
  capa_musica : string,
  lancamento_musica: string,
  ouvintes_musica: number
}
type album ={
  id: number,
  nome_album: string,
  cantor_album: string,
  quant_musicas_album: number,
  lancamento_album: string,
  capa_album: string,
  ouvintes_album: number
}


  //Usuarios
function App() {
  const [musicas, setMusicas] = useState<musicas[]>([])
  const [usuarios, setUsuarios] = useState<usuarios[]>([])
  const [album, setAlbum] = useState<album[]>([])
 
  useEffect(()=>{
    fetch("https://riffly-back.onrender.com/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])
  function handleExcluir(id:number){
    fetch(`https://riffly-back.onrender.com/usuarios/${id}`,{
      method:"DELETE"
    })
    .then(resposta=>{
      if(resposta.status==200){
        alert("Excluído com sucesso")
        window.location.reload()
      }
      else{
        alert("Erro ao excluir")
      }
    })
  }


  //Musicas
useEffect(()=>{
  fetch("https://riffly-back.onrender.com/musicas")
  .then(response => response.json())
  .then(dados => setMusicas(dados))
},[])
function handleDeletar(id:number){
  fetch(`https://riffly-back.onrender.com/musicas/${id}`,{
    method:"DELETE"
  })
  .then(resposta=>{
    if(resposta.status==200){
      alert("Deletado com sucesso")
      window.location.reload()
    }
    else{
      alert("Erro ao excluir")
    }
  })
}


/*Listagem de album para um app de musica*/
useEffect(()=>{
  fetch("https://riffly-back.onrender.com/album")
  .then(response => response.json())
  .then(dados => setAlbum(dados))
  },[])
  return(
    <>
      <header className="cabecario">
        <Link to="/cadastro-musicas" className="b1">Nova Música</Link>
        <Link to="/cadastro-album" className="b2">Novo Album</Link>
        <Link to="/cadastro-usuarios" className="b4">Cadastre-se</Link>
      </header>
      <h1>Músicas</h1>
      <div className="container-musicas">
        {musicas.map(mus=>{
        return(
          <div  key={mus.id} className='musicas'>
            <img className="imagem-musica" src={mus.capa_musica}/>
            <h1>{mus.nome_musica}</h1>
            <h3>{mus.cantor_musica}</h3>
            <p>Genero: {mus.genero_musica}</p>
            <p>Ano: {mus.lancamento_musica}</p>
            <p>Ouvintes: {mus.ouvintes_musica}</p>
            <button onClick={()=>{handleDeletar(mus.id)}} className="botao-excluir" > X </button>
            <Link to={`/alterar-musica/${mus.id}`} className="botao-alterar" >Alterar</Link>
          </div>
        )
      })}

      
      </div>
      <h1>Álbuns</h1>
      <div className="container-albuns">
        {album.map(alb=>{
        return(
          <div  key={alb.id} className='albuns'>
            <img src={alb.capa_album}/>
            <h1>{alb.nome_album}</h1>
            <p>Musicas: {alb.quant_musicas_album}</p>
            <p>Ano: {alb.lancamento_album}</p>
            <p>Ouvintes: {alb.ouvintes_album}</p>
          
          </div>
        )
      })}
      </div>
      <h1>Usuários</h1>
      <div className="container-usuario">
        {usuarios.map(usu=>{
        return(
          <div  key={usu.id} className='usuarios'>
            <div className="imagem-user">
              <img src={usu.foto_usuario}/>
            </div>
            <h1>{usu.nome_usuario}</h1>
            <section>
              <button onClick={()=>{handleExcluir(usu.id)}} className="botao-excluir" > X </button>
              <Link to={`/alterar-usuario/${usu.id}`} className="botao-alterar" >Alterar</Link>
            </section>
          </div>
        )
      })}




      </div>

    </>
    
  )
}

export default App
