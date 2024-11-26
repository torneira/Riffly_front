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

function App() {
  const [usuarios, setUsuarios] = useState<usuarios[]>([])
  const [musicas, setMusicas] = useState<musicas[]>([])
  const [album, setAlbum] = useState<album[]>([])
  useEffect(()=>{
    fetch("https://one022b-marketplace-cegf.onrender.com/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])


useEffect(()=>{
  fetch("http://localhost:8000/musicas")
  .then(response => response.json())
  .then(dados => setMusicas(dados))
},[])
useEffect(()=>{
  fetch("link do render ")
  .then(response => response.json())
  .then(dados => setUsuarios(dados))
})


/*Listagem de album para um app de musica*/
useEffect(()=>{
  fetch("http://localhost:8000/album")
  .then(response => response.json())
  .then(dados => setAlbum(dados))
  },[])
}


export default App
