import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroUsuario from './componentes/cadastro/CadastroUsuario.tsx';
import CadastroMusica from './componentes/cadastro/CadastroMusica.tsx';
import CadastroAlbum from './componentes/cadastro/CadastroAlbum.tsx';
import AlterarUsuario from './componentes/alterar/AlterarUsuario.tsx';
import AlterarMusica from './componentes/alterar/AlterarMusica.tsx';

//Cria uma instância do BrowserRouter e passa um array de objetos com as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cadastro-usuarios",
    element: <CadastroUsuario/>,
  },
  {
    path: "/cadastro-musicas",
    element: <CadastroMusica/>,
  },
  {
    path: "/cadastro-album",
    element: <CadastroAlbum/>,
  },
  
  //Alterar Musica e Usuario
  {
    path: "/alterar-usuario/:id",
    element: <AlterarUsuario/>,
  },
  {
    path: "/alterar-musica/:id",
    element: <AlterarMusica/>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
