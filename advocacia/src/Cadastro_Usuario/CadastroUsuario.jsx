import React from 'react'
import './CadastroUsuario.css'
import { Link } from 'react-router-dom'
function CadastroUsuario() {
  return (
    <div className='body-cadastro'>
      <div className='container-cadastro'>
    <div className='iputs-cadastro'>
      <h1 className='h1cadastro'>Cadastrar</h1>
      <p className='p-cadastro'>Nome Completo: </p> <input className='input1-cadastro' type="text" name="" id="" />  
      <p className='p-cadastro'>CPF:</p> <input className='input1-cadastro' type="text" name="" id="" />
      <p className='p-cadastro'>Email:</p> <input className='input1-cadastro' type="text" name="" id="" />
      <p className='p-cadastro'>Senha:</p><input className='input1-cadastro' type="password" name="" id="" />
      
    <div className='button-checkbox'>
    <input type="checkbox" name="" id="" /> Li e aceito os termos de uso
    <br /> Já possui Cadastro?<button>Login</button>
    </div>
      </div>
    </div>
    </div>
   

 
  )
}

export default CadastroUsuario
