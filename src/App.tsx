import { useEffect,useState } from "react";
import {setMusicas,setUsuarios}from './actions';
import './App.css'
type usuarios ={
  id: number,
  nome: string,
  apellido: string,
  email: string,
  password: string,
  foto:string
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
const App =0 () => {
  const [musicas, setMusicas] = useState<musicas[]>([])
  const [usuarios, setUsuarios] = useState<usuarios[]>([])
  const [album, setAlbum] = useState<album[]>([])
  const [nome, setNome] = useState<string>()
  const [apellido, setApellido] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
}
useEffect(()=>{
  fetch("http://localhost:8000/musicas")
  .then(response => response.json())
  .then(data => setMusicas(data))
},[])
useEffect(()=>{
  fetch("link do render ")
  .then(response => response.json())
  .then(data => setUsuarios(data))
})



/*Listagem de album para um app de musica*/
useEffect(()=>{
  fetch("http://localhost:8000/album")
  .then(response => response.json())
  .then(data => setAlbum(data))
  },[])
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  )





