import React from 'react'
import './CadastroAdvogados.css'
import { Link } from 'react-router-dom'
function CadastroAdvogados() {
  return (
    <div>
     <div>
         <img src="./lawofdefense.jpg" alt="" /> <h2>Cadastro Advogado</h2>
      </div>
      <div>
        <div>
          <p>Nome:</p><input type="text" name="" id="" />
        </div>
        <div>
          <p>Credencial da OAB:</p> <input type="text" name="" id="" />
        </div>
        <div>
          <p>Telefone:</p> <input type="text" name="" id="" />
        </div>
        <div>
          <p>Email:</p> <input type="text" name="" id="" />
        </div>
        <div>
          <p>Senha:</p> <input type="text" name="" id="" />
        </div>
      </div>
      <div>
        <button>Cadastrar</button>
      </div>
    </div>
  )
}

export default CadastroAdvogados
