import './navbar.css'

function Nav() {
    
  
    return (
      <div >
        

       <nav class="navbar navbar-expand-lg ">

  <div class="container-fluid ">
  <img src="../src/components/navbar/image/logo.jfif" width="90" height="90" class="d-inline-block align-top rounded-circle" alt=""/>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-1 mb-lg-1">
        <li class="nav-item ">
          <a class="nav-link active  " aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Quienes Somos</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#Gallery">Galeria</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Contactenos</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
      </div>
    )
  }
  
  export default Nav