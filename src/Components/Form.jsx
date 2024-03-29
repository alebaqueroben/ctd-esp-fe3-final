import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  
  
  const validateUserName = (userName) => {
    const withoutSpaces = userName.trim();

    if (withoutSpaces.length > 5){
      return true;
    }
    else{
      return false;
    }
  };

  const validateEmail = (email) => {
   const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return regex.test(email);
  }

  const onSubmitForm = (e) =>{
    e.preventDefault();
    const isUserNameValid = validateUserName (userName);
    const isEmailValid = validateEmail (email);
  
    if (!isEmailValid || !isUserNameValid){
      alert("Algunos de los datos ingresados no son correctos");
    } else{
      alert(`formulario enviado`);
    }
   };
  
  return (
    <div>
      <form onSubmit={onSubmitForm}>
      <h2>Ingrese su nombre de usuario:</h2>
      <input type="text" placeholder='Nombre de usuario' value={userName} onChange={onChangeUserName}/>
      <h2>Ingrese su email:</h2>
      <input type="text" placeholder='email' value={email} onChange={onChangeEmail} />
      <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
