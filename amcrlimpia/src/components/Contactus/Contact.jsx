import React from 'react'

const Contact = () => {
  return (
    <div class="container">
        <h2>Contactenos</h2>
        <div class="row100">
           
        <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Nombre</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Apellido</span>
                    <span class="line"></span>
                </div>
            </div>

        </div>
        <div class="row100">
           
        <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Email</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" name=''required="required" ></input>
                    <span class="text">Telefono</span>
                    <span class="line"></span>
                </div>
            </div>

        </div>
        <div class="row100">
           
           <div class="col">
                   <div class="inputBox textare">
                       <textarea required="required" ></textarea>
                       <span class="text">Mensaje</span>
                       <span class="line"></span>
                   </div>
               </div>
        </div>
        <div class="row100">
           
           <div class="col">
                 <input type="submit" class="btn btn-primary" value="Enviar" />
               </div>
        </div>

        

    </div>
  )
}

export default Contact