import React from 'react'
import './CadastroUsuario.css'
import { Link } from 'react-router-dom'
import Checkbox from './Checkbox'
function CadastroUsuario() {
  
  return (
    <div className='body-cadastro'>  
      <div className='cadastro'>
        <div className='container-cadastro'>
    <div className='iputs-cadastro'>
      <h1 className='h1cadastro'>Cadastrar</h1>
      <p className='p-cadastro'>Nome Completo: </p> <input className='input1-cadastro' type="text" name="" id="" placeholder='Pedro Emanuel'/>  
      <p className='p-cadastro'>CPF: </p> <input className='input1-cadastro' type="text" name="" id="" placeholder='123.456.789/02'/>
      <p className='p-cadastro'>Email: </p> <input className='input1-cadastro' type="text" name="" id="" placeholder='pedroemanuel@gmail.com'/>
      <p className='p-cadastro'>Senha: </p><input className='input1-cadastro' type="password" name="" id="" placeholder='1234'/>
      
    <div className='button-termos-uso'>
    <Checkbox /><p className='termos-uso'> Li e aceito os <Link to='termos-uso'>termos de uso</Link> </p>
    </div>
    <div className='button-termos-uso'>
      <button className='button-cadastro'>Cadastrar</button>
    </div>
    <div className='button-termos-uso'>
    <p>Já possui Cadastro?</p><Link to='cadastro-login'>Login</Link>
    </div>
      </div>

    </div>
    </div>
    <img src="foto-cadastro.jpg" alt="" className='img-cadastro' />
    </div>
   

 
  )
}

export default CadastroUsuario
