import { createBrowserRouter } from "react-router-dom";
import CadastroAdvogados from "../Cadastro_Advogados/CadastroAdvogados";
import CadastroUsuario from "../Cadastro_Usuario/CadastroUsuario";
import LoginUsuario from "../Login_Usuario/LoginUsuario";
import Lading_page from "../Lading_page/Lading_page";


const Router = createBrowserRouter([
        
    {path: "/cadastrar_advogado", element: <CadastroAdvogados/>},
    {path: "/cadastrar_usuario", element: <CadastroUsuario/>},
    {path: "/cadastro_login", element: <LoginUsuario/>},
    {path: "/lading_page", element: <Lading_page/>}

])


export default Router
