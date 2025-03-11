import React, { useState } from 'react';
import './Perfil_Usuario.css';

function Perfil_Usuario() {
  // Definindo o estado para a imagem do perfil
  const [profileImage, setProfileImage] = useState(null);

  // Função para lidar com o upload da imagem
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  // Função para remover a imagem do perfil
  const removeImage = () => {
    setProfileImage(null);
  };

  return (
    <div className='div-usuarios'>
      <h1>Seu Perfil</h1>

      <div className='inputs-usuarios'>
        <p className='text-usuarios'>Nome</p>
        <input type="text" />

        <p className='text-usuarios'>Email</p>
        <input type="email" name="email" id="email" />

        <p className='text-usuarios'>Senha</p>
        <input type="password" />

        <p className='text-usuarios'>Telefone</p>
        <input type="text" />

        <div className='profile-image'>
          {profileImage ? (
            <>
              <img src={profileImage} alt="Foto de perfil" />
              <button onClick={removeImage}>Remover Imagem</button>
            </>
          ) : (
            <p>Sem imagem de perfil</p>
          )}
          <input type="file" onChange={handleImageChange} />
        </div>
      </div>

      <div>
        <button>Redefinir Senha</button>
        <button>Salvar Mudanças</button>
      </div>
    </div>
  );
}

export default Perfil_Usuario;
