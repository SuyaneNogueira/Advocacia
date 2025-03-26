import { createBrowserRouter } from "react-router-dom";
import Lading_page from "../Front-End/Lading_page/Lading_page";
import PerfilAdvogados from "../Front-End/Advogados/Perfil_Advogados/PerfilAdvogados";


const Router = createBrowserRouter([
    {path: "/", element: <PerfilAdvogados/>},
    
    
])

export default Router