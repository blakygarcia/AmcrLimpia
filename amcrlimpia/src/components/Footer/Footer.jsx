import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
   <>
    <div class="b-example-divider"></div>
        <div class="container containerFooterPage" data-aos="fade-up">
            <footer class="py-3 my-4"/>
            <ul class="justify-content-center border-bottom pb-3 mb-3">
                <li class="itemNavbar"><a href="index.php" class="textNav firstTextNav">Inicio</a></li>
                <li class="itemNavbar"><a href="Who.php" class="textNav">Quienes somos?</a></li>
                <li class="itemNavbar"><a href="Galery.php" class="textNav">Galeria</a></li>
                <li class="itemNavbar"><a href="ContactUs.php" class="textNav">Contactenos</a></li>
                </ul>
                <div class="row row-social-media">
                    <div class="coll-md-4"></div>
                    <div class="col-md-4 social-media-footer">
                        <u class="underlinedTextFooter"><h3 class="followUsTextFooter">Siguenos Por Nuestras Redes Sociales</h3></u>
                            <a href="https://www.facebook.com/scrapqueenmetalcorp"><i class="fa-brands fa-facebook fa-2x"></i></a>
                            <a href="https://www.instagram.com/scrapqueenmetalcorp/" class="iconInstagram"><i class="fa-brands fa-instagram fa-2x"></i></a>
                    </div>
                    <div class="coll-md-4"></div>
                </div>
                <div class="row">
                    <div class="col-md-5">
                        <span class="email-infomation"/>
                            <i class="fa-solid fa-envelope fa-2x"></i><a href="mailto:info-sqgroup@scrapqueenmetal.com"><h6 class="email-information text-white"/>info-sqgroup@scrapqueenmetal.com</a>
                        
                        <br/>
                        <span class="phone-number">
                            <i class="fa-solid fa-phone fa-2x" ></i><a href="tel:+506 8709-1060" class="phoneNumberFooter"><h6 class="phone-information text-white">+506 87091-060</h6></a>
                        </span>
                        
                    </div>
                    
                    <div class="col-md-7 copyrightText">
                        <p class="text-center text-white"> <strong>Copyright All Rights Reserved © 2022 Am CR Limpia Corporation SRL. </strong></p>
                    </div>
                    
                    
                </div>
                
                
            <footer/>
        </div>
   </>
  )
}
