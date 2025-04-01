import { createBrowserRouter } from "react-router-dom";
import Lading_page from "../Front-End/Lading_page/Lading_page";
import PerfilAdvogados from "../Front-End/Advogados/Perfil_Advogados/PerfilAdvogados";
import Tela_IAdvogado from "../Front-End/Advogados/Tela_Inicial_Advogado/Tela_IAdvogado";
import NavBar_Advogados from "../Front-End/Advogados/NavBar_Advogado/NavBar_Advogados";


const Router = createBrowserRouter([
    {path: "/", element: <Lading_page/>},
    
    
])

export default Router