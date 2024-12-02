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

//Crie um comentário explicando o que faz o código abaixo
//Cria uma instância do BrowserRouter e passa um array de objetos com as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/usuarios",
    element: <CadastroUsuario/>,
  },
  {
    path: "/musicas",
    element: <CadastroMusica/>,
  },
  {
    path: "/album",
    element: <CadastroAlbum/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
