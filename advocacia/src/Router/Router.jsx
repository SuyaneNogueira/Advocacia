import { createBrowserRouter } from "react-router-dom";
import CadastroAdvogados from "../Cadastro_Advogados/CadastroAdvogados";
import CadastroUsuario from "../Cadastro_Usuario/CadastroUsuario";
import LoginUsuario from "../Login_Usuario/LoginUsuario";
import Lading_page from "../Lading_page/Lading_page";
import PerfilAdvogados from "../Perfil_Advogados/PerfilAdvogados";

const Router = createBrowserRouter([
    {path: "/", element: <Lading_page/>},
   
    
])

export default Router
