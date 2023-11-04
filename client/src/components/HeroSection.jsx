import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';
import { AboutMeButton } from './AboutMeButton';


function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
    <div className='hero-container'>


      <h1>Sandra Zehentner</h1>
      <p style={{ textAlign: "center" }}>Gesundheits- und Personaltraining in Wien</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => navigate("/contact")}
        >
          Starte jetzt
        </Button>
        <AboutMeButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => navigate("/about-me")}
        >
          Über mich <ion-icon style={{ marginLeft: "4px" }} name="accessibility-outline"></ion-icon>
        </AboutMeButton>
      </div>

      <div className='info-details'>
        <div className='info-detail'>
            <ion-icon name="mail-open-outline"></ion-icon>
            <span>sandrazehentner.pt@gmail.com</span>
        </div>
        <div className='info-detail'>
            <ion-icon name="call-outline"></ion-icon>
            <span>+43 677 64 60 6929</span>
        </div>
        <div className='info-detail'>
            <ion-icon name="location-outline"></ion-icon>
            <span>FitInn Stadioncenter</span>
        </div>
        <div className='info-detail'>
            <ion-icon name="location-outline"></ion-icon>
            <span>FitInn Kagraner Platz</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
