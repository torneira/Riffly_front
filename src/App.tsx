import { useEffect,useState } from "react";
import './App.css'
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
type comentarios ={
  id:number,
  nome_usuario: string,
  comentarios:string
  }
  
function App() {
  const [musicas, setMusicas] = useState<musicas[]>([])
  const [usuarios, setUsuarios] = useState<usuarios[]>([])
  const [album, setAlbum] = useState<album[]>([])
  const [comentarios, setComentarios] = useState<comentarios[]>([])
  useEffect(()=>{
    fetch("https://riffly-back.onrender.com/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])


useEffect(()=>{
  fetch("https://riffly-back.onrender.com/musicas")
  .then(response => response.json())
  .then(dados => setMusicas(dados))
},[])

useEffect(()=>{
  fetch("https://riffly-back.onrender.com/comentarios")
  .then(response => response.json())
  .then(dados => setComentarios(dados))
},[])


/*Listagem de album para um app de musica*/
useEffect(()=>{
  fetch("https://riffly-back.onrender.com/album")
  .then(response => response.json())
  .then(dados => setAlbum(dados))
  },[])
  return(
    <>
    <header className="cabecario">
      <a href="http://localhost:5173/cadastro-musicas" className="b1">Nova Música</a>
      <a href="http://localhost:5173/cadastro-album" className="b2">Novo Album</a>
      <a href="http://localhost:5173/cadastro-comentarios" className="b3">Comente</a>
      <a href="http://localhost:5173/cadastro-usuarios" className="b4">Cadastre-se</a>
    </header>
    <h1>Musicas</h1>
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
        </div>
      )
    })}
    </div>
    <h1>Comentários</h1>
    <div className="container-comentario">
       {comentarios.map(com=>{
      return(
        <div  key={com.id} className='comentarios'>
          <h2>{com.nome_usuario}</h2>
          <p>{com.comentarios}</p>
        </div>
      )
    })}
    </div>

    </>
    
  )
}

export default App
