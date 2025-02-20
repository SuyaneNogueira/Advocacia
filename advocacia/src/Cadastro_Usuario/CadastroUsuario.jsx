import React from 'react'
import './CadastroUsuario.css'
import { Link } from 'react-router-dom'
function CadastroUsuario() {
  return (
    <div >
      <div>
         <img src="./lawofdefense.jpg" alt="" /> <h2>Cadastro</h2>
      </div>
    <div>
        <div className='Nome'>
           <p>Nome Completo: </p> <input  type="text" name="" id="" />  
        </div>
        
        <div>
         <p>CPF:</p> <input type="text" name="" id="" />
        </div>
     
    <div>
      <p>Email:</p> <input type="text" name="" id="" />
    </div>

    <div>
       <p>Senha:</p> <input type="password" name="" id="" />
    </div>
      
    <div>
        <img src="./lawofdefense.jpg" alt="" />
    </div>
      </div>

    <div>
     Li e aceito os termos de uso <input type="checkbox" name="" id="" />
    </div>
    <div>
     <button>Formulario</button> Já possui Cadastro?<button>Login</button>
    </div>

    </div>

 
  )
}

export default CadastroUsuario
