import { createBrowserRouter } from "react-router-dom"; 
import CadastroAdvogados from "../Cadastro_Advogados/CadastroAdvogados";
import CadastroUsuario from "../Cadastro_Usuario/CadastroUsuario";




// como tem que estar o import
//  import Contato from "../telaparatodos/Contato";

const router = createBrowserRouter([

// como tem que esta o path 

{path: "cadastrar-advogado", element: <CadastroAdvogados/>},
{path: "cadastrar-usuario", element: <CadastroUsuario/>},

  



])

export default Router
