import React from 'react'
import './CadastroAdvogados.css'
function CadastroAdvogados() {
  return (
    <div className='container-all-cadastro-advogados'>
     
<div className='div-imagem-cadastro-advogados'>
<img className='imagem-cadastro-advogado' src="foto-cadastro.jpg" alt="" />
</div>

<div className='div-conteudo-cadastro-advogado'>
<h1 className='h1-cadastro-advogados'>Cadastro de Advogados</h1>
<div className='div-inputs-cadastro-advogado'>

<div className='teste-cadastro-advogado'>

<div className='input-um-cadastro-advogado'>
<p>Nome:</p>
<input type="text" name="Nome" id="" />
</div>

<div>
<p>Telefone:</p>
<input type="text" name="" id="" />
</div>

<div>
<p>Email</p>
<input type="Email" />
</div>

<div>
<p>OAB:</p>
<input type="text" />
</div>

<div>
<p>Senha:</p>
<input type="password" />
</div>

</div>
</div>
</div>

    </div>
  )
}

export default CadastroAdvogados
