import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroUsuario from './componentes/cadastro/CadastroUsuario.tsx';
import CadastroMusica from './componentes/cadastro/CadastroMusica.tsx';
import CadastroAlbum from './componentes/cadastro/CadastroAlbum.tsx';
import Comentarios from './componentes/cadastro/Comentarios.tsx';

//Crie um comentário explicando o que faz o código abaixo
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
  {
    path: "/cadastro-comentarios",
    element: <Comentarios/>,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
