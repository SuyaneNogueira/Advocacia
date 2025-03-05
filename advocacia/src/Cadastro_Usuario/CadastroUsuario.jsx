import React from 'react'
import './CadastroUsuario.css'
import { Link } from 'react-router-dom'
function CadastroUsuario() {
  return (
    <div className='body-cadastro'>  
      <div className='bem-vindo'>
        <div className='itens-bemvindo'>
        <h1 className='bemvindoh1'>Bem vindo</h1>
        <h2 className='descricaoh2'>A jornada para uma assessoria jurídica de qualidade começa aqui.</h2>
        <h3 className='descricaoh3'>Cadastre-se e tenha acesso a advogados comprometidos em oferecer orientação clara e eficiente.</h3>
        </div>
      </div>
      <div className='cadastro'>
        <div className='container-cadastro'>
    <div className='iputs-cadastro'>
      <h1 className='h1cadastro'>Cadastrar</h1>
      <p className='p-cadastro'>Nome Completo: </p> <input className='input1-cadastro' type="text" name="" id="" />  
      <p className='p-cadastro'>CPF:</p> <input className='input1-cadastro' type="text" name="" id="" />
      <p className='p-cadastro'>Email:</p> <input className='input1-cadastro' type="text" name="" id="" />
      <p className='p-cadastro'>Senha:</p><input className='input1-cadastro' type="password" name="" id="" />
      
    <div className='button-checkbox'>
    <div className='input-termos-uso'>
    <input type="checkbox" name="" id="" /><p> Li e aceito os termos de uso </p>
    </div>
    <div className='button-cadastro'>
      <button>Cadastrar</button>
    </div>
    <div className='login-cadastro'>
    <p>Já possui Cadastro?</p><button>Login</button>
    </div>
    </div>
      </div>
    </div>
    </div>
    </div>
   

 
  )
}

export default CadastroUsuario
