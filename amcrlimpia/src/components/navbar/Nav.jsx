import './navbar.css'

function Nav() {
    
  
    return (
      <div >
        

       <nav class="navbar navbar-expand-lg bg-black">

  <div class="container-fluid bg-black">
  <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
    <a class="navbar-brand" href="#">Am Costa Rica Limpia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ">
          <a class="nav-link active " aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Quienes Somos</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Galeria</a>
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