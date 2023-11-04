import React from "react";
import "./Footer.css";


const Footer = () => {

    return (

        <div className="footer">
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div>
                       <h4 className="footer-category">Social</h4> 
                    </div>
                    <div className="footer-ad">
                        <ion-icon name="logo-instagram"></ion-icon>
                       <p>sandi_at_the_gym</p> 
                    </div>
                </div>
                <div className="footer-wrapper">
                    <div>
                       <h4 className="footer-category">Kontakt</h4> 
                    </div>
                    <div className='footer-ad'>
                        <ion-icon name="mail-open-outline"></ion-icon>
                        <span>sandrazehentner.pt@gmail.com</span>
                    </div>
                    <div className='footer-ad'>
                        <ion-icon name="call-outline"></ion-icon>
                        <span>+43 677 64 60 6929</span>
                    </div>
                    <div className='footer-ad'>
                        <ion-icon name="location-outline"></ion-icon>
                        <span>FitInn Stadioncenter</span>
                    </div>
                    <div className='footer-ad'>
                        <ion-icon name="location-outline"></ion-icon>
                        <span>FitInn Kagraner Platz</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;