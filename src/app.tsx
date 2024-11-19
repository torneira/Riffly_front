import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
  id:number,
  nome:string,
  descricao:string,
  preco:string,
  imagem:string 
}
type UsuarioType = {
  id:number,
  nome:string,
  email:string,
  created_at:string,
  updated_at:string 
}
function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]> ([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]> ([])

//useEffect(oque fazer e quando fazer)
  useEffect(()=>{
    fetch("http://localhost:8000/produtos")
    .then(resposta=>resposta.json())
    .then(dados=>setProdutos(dados))
  },[])
  useEffect(()=>{
    fetch("https://one022b-marketplace-6ac4. onrender.com/usuarios")
    .then(resposta=>resposta.json())
    .then(dados=>setUsuarios(dados))
  },[])

  
  return (
    <>
    <div className='container-produtos'>
      {
        produtos.map(prod=>{
          return(
            <div key={prod.id} className='produto-item'>
              <h1>
                {prod.nome}
              </h1>
              <p>{prod.imagem}</p>
              <p>{prod.preco}</p>
              <p>{prod.descricao}</p>
            </div>
          )
        })
      }
       </div>
       <div className='container-usuarios'>
      {
        usuarios.map(prod=>{
          return(
            <div key={prod.id} className='usuario-item'>
              <h1>
                {prod.nome}
              </h1>
              <p>{prod.email}</p>
              <p>{prod.created_at}</p>
              <p>{prod.updated_at}</p>
            </div>
          )
        })
      }
       </div>
       
    </>
  )
}

export default App
