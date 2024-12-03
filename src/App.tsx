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
  
const App = () => {
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
  fetch("http://localhost:5173/musicas")
  .then(response => response.json())
  .then(dados => setMusicas(dados))
},[])

useEffect(()=>{
  fetch("http://localhost:5173/comentarios")
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
    <div className="container-musicas">
       {musicas.map(mus=>{
      return(
        <div  key={mus.id} className='musicas'>
          <img src={mus.capa_musica}/>
          <h1>{mus.nome_musica}</h1>
          <p>{mus.cantor_musica}</p>
          <p>{mus.genero_musica}</p>
          <p>{mus.letra_musica}</p>
          <p>{mus.lancamento_musica}</p>
          <p>{mus.ouvintes_musica}</p>
        </div>
      )
    })}
    </div>

    <div className="container-albuns">
       {album.map(alb=>{
      return(
        <div  key={alb.id} className='albuns'>
          <img src={alb.capa_album}/>
          <h1>{alb.nome_album}</h1>
          <p>{alb.cantor_album}</p>
          <p>{alb.quant_musicas_album}</p>
          <p>{alb.lancamento_album}</p>
          <p>{alb.ouvintes_album}</p>
         
        </div>
      )
    })}
    </div>
    
    <div className="container-usuario">
       {usuarios.map(usu=>{
      return(
        <div  key={usu.id} className='usuarios'>
          <img src={usu.foto_usuario}/>
          <h1>{usu.nome_usuario}</h1>
          <p>{usu.foto_usuario}</p>
        </div>
      )
    })}
    </div>
    <div className="container-comentario">
       {comentarios.map(com=>{
      return(
        <div  key={com.id} className='comentarios'>
          <h1>{com.nome_usuario}</h1>
          <p>{com.comentarios}</p>
        </div>
      )
    })}
    </div>

    </>
    
  )
}

export default App