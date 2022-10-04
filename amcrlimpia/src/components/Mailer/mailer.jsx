import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {

    const sendEmail = (event) => {
        event.preventDefault(); //Previene cualquier evento que llegue previo al formulario
        
        //En la siguiente linea tiene por parametros 1- el ID del correo que se envía, 2- El Id del template del correo, 3- El formulario de donde captura los datos, 4- Es la API Key Publica del usuario 
        emailjs.sendForm('service_hkhtebl','template_1ct4zzh',event.target,'E9yvneU6RpsuUWQ8O')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }

  return (
    <div className='div-form'>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}

