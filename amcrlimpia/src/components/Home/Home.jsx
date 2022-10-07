import './Home.css'

function Home() {


    return (
     <div>
             <div class="container marketing"/>

<hr class="featurette-divider"/>

    <div class="row featurette row1" data-aos="fade-up">
        <div class="col-md-7">
            <h2 class="featurette-heading">Am Costa Rica Limpia</h2>
            <p class="lead">Empresa dedicada principalmente a la comercialización de chatarra ferrosa de exportación, ubicada en Costa Rica, provincia de Alajuela. Contamos con personal administrativo con más de 14 años de experiencia en el manejo de chatarra ferrosa y no ferrosa.</p>
        </div>
        <div class="col-md-5">
            <img src="../src/components/Home/hom/lo3.jpeg" alt="" id="homeImagesSQMetal" class="imgHomeBody01 rounded"/>
        </div>
    </div>

    <hr class="featurette-divider"/>

        <div class="row featurette" data-aos="fade-right" data-aos-easing="ease-in-sine">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading secondTitle">¿Por Qué Elegirnos? </h2>
                <p class="lead">Am Costa Rica tiene una amplia experiencia en el ámbito de la gestión medioambiental de las empresas. Am Costa Rica cuenta con más de 15 años de experiencia en el área de la gestión ambiental. Contamos con los permisos requeridos para el desarrollo de la actividad comercial en nuestro país, lo que da soporte al usuario del servicio que realizó una correcta disposición de sus materiales para el reciclaje. Nuestras instalaciones de recepción, el personal y los equipos son adecuados para el manejo de los residuos. Nos caracterizamos por mantener un ambiente ordenado en nuestras instalaciones. No participamos en la compra de materiales ilícitos y prohibidos por nuestro país.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src="../src/components/Home/hom/lo2.jpeg" alt="" id="homeImagesSQMetal" class="imgHomeBody02 rounded"/>

            </div>
        </div>

      

            <hr class="featurette-divider"/>
     </div>
           
   )
  }
export default Home