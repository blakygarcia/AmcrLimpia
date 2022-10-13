import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact(){
    const [usuario, setusuario] = useState({
        user_name: "",
        user_apellido: "",
        user_telefono: "",
        
      });
      const [Correo, setCorreo] = useState({
        user_email: "",
      });
      const [message, setMessage] = useState({
        user_message: "",
      });

    const sendEmail = (event) => {
        event.preventDefault(); //Previene cualquier evento que llegue previo al formulario
        
        //En la siguiente linea tiene por parametros 1- el ID del correo que se envía, 2- El Id del template del correo, 3- El formulario de donde captura los datos, 4- Es la API Key Publica del usuario 
        emailjs.sendForm('service_hkhtebl','template_1ct4zzh',event.target,'E9yvneU6RpsuUWQ8O')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
      const controlsumit = (e) => {
        !e.preventDefault();
        console.log(usuario.user_id, usuario.password);
    
        //setsuccess(true);
      };
  return (
    <div class='div-form'>
    <form class='form-mail' onSubmit={sendEmail}>
    <div class="container">
        <h2 class="tite">Contactenos</h2>
        <div class="row100">
           
        <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Nombre</span>
                    <span class="line"><input class="line"name='user_name' onChange={(e) =>
                        setusuario({
                          ...usuario,
                          user_name: e.target.value,
                        })
                      }></input></span>
                    
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text" >Apellido</span>
                    <span class="line"><input class="line"name='user_apellido'onChange={(e) =>
                        setusuario({
                          ...usuario,
                          user_apellido: e.target.value,
                        })
                      } ></input></span>
                </div>
            </div>

        </div>
        <div class="row100">
           
        <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Email</span>
                    <span class="line"><input class="line" name='user_email'onChange={(e) =>
                        setCorreo({
                          ...Correo,
                          user_email: e.target.value,
                        })
                      } ></input></span>
                    
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Telefono</span>
                    <span class="line"><input class="line"name='user_telefono'onChange={(e) =>
                        setusuario({
                          ...usuario,
                          user_telefono: e.target.value,
                        })
                      } ></input></span>
                </div>
            </div>

        </div>
        <div class="row100">
           
           <div class="col">
                   <div class="inputBox textarea">
                       <input required="required" ></input>
                       <span class="text">Mensaje</span>
                       <span class="line"><input class="line" name="user_message"onChange={(e) =>
                        setMessage({
                          ...message,
                          user_message: e.target.value,
                        })
                      } ></input></span>
                       
                   </div>
               </div>
        </div>
        <div class="row100">
           
           <div class="col">
               <button class="btn btn-primary">Send</button>
               </div>
        </div>

        

    </div>
    </form>
  </div>
    

 
   
  )
}

export default Contact