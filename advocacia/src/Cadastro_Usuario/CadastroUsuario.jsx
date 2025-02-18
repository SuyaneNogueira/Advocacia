import React from 'react'
import './CadastroUsuario.css'
import { Link } from 'react-router-dom'
function CadastroUsuario() {
  return (
    <div >
        <div className='Nome'>
            Nome: <input  type="text" name="" id="" />  
        </div>
     
      <div>
        Email: <input type="text" name="" id="" />
    </div>

    <div>
        Senha: <input type="password" name="" id="" />
    </div>

    <div>
        <img src="./lawofdefense.jpg" alt="" />
    </div>

    <div>
     {/* <Link to = '' >Formulario</Link> */}
    </div>

    </div>

 
  )
}

export default CadastroUsuario
