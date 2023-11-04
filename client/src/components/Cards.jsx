import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import AboutMePicture from "../assets/examplePicture.jpg";

import HealthImage from "../assets/healthImage.jpg";
import Muskelaufbau from "../assets/muskelaufbau.gif";
import Obst from "../assets/Obst.png";

function Cards() {

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    }

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={AboutMePicture}
              text='Sandra Zehentner - Dipl. Gesundheits- und Personaltrainerin seit 2019'
              label='Adventure'
              path='/services'
            />

          </ul>
        </div>
        <div className='scroll-down-icon'>
            <button style={{ border: "none", backgroundColor: "#fff", cursor: "pointer" }} onClick={() => scrollTo('about-me-text')}>
                <ion-icon style={{ fontSize: "40px" }} name="arrow-down-circle-outline"></ion-icon> 
            </button>
        </div>
      </div>
      <div className='about-me-text' id='about-me-text'>
        <h1>Über mich</h1>
        <p>Sport war schon immer ein wichtiger Teil meines Lebens. In zu meiner Schulzeit war ich im 
        Vereinssport sehr aktiv und konnte dort auch erste Coaching- Erfahrungen als Nachwuchstrainerin in 
        der Sparte Cheerleading sammeln. Mit 18 Jahren habe ich mich das erste Mal in einem Fitnessstudio 
        angemeldet und dabei nach und nach die Freude am Krafttraining entdeckt. Ich finde es nach wie vor 
        extrem faszinierend, wie der menschliche Körper auf das richtige Training reagiert und sich stetig 
        verbessern kann. 
        Im Jahr 2019 habe ich meine Ausbildung zur Diplom Gesundheits- und Personaltrainerin bei der PFA 
        Wien abgeschlossen. Es war ein wichtiger Schritt, um meine Leidenschaft für Fitness und Training in 
        einen Beruf zu verwandeln.
        Meine ersten Erfahrungen als Personaltrainerin sammelte ich in einem Sportstudio, das speziell auf 
        Frauen ausgerichtet war. Dort begleitete ich Kundinnen in jedem Alter auf ihrem Weg zu einem 
        fitteren Leben und mehr Wohlbefinden.
        Das positive Feedback meiner Klientinnen hat mich darin bestärkt, eigenständig als Trainerin zu 
        arbeiten. Seit 2021 habe ich das Glück, Menschen mit verschiedensten Vorerfahrung und Anliegen 
        dabei zu helfen, ihre sportlichen Ziele zu erreichen und über sich hinaus zu wachsen. Die
        Zusammenarbeit mit FitInn ermöglicht mir, Personaltraining in einer umfangreich ausgestatteten
        Trainingsumgebung zu erschwinglichen Preisen anzubieten, was meinen Kunden zugutekommt.
        Was mir besonders an meiner Arbeit als Trainerin gefällt, ist die Möglichkeit, meine Begeisterung für 
        das Training weiterzugeben. Es ist ein großartiges Gefühl zu sehen, wie meine Klienten Fortschritte 
        machen, ihre Grenzen überwinden und mit einem Lächeln im Gesicht aus dem Training kommen.
        Ich freue mich darauf, noch viele weitere Menschen auf ihrem Weg zu einem gesünderen und 
        fitteren Leben unterstützen zu dürfen.
        </p>
      </div>
      <div className='about-me-text'> 
        <h1>Schwerpunkte</h1>
        <div className='focus-container'>
          <div className='focus-wrapper first'>
            <div className='textContainer'>
              <h2 className='focusTextHeader'>Gesundheit & Prävention</h2>
              <p>
              Die positiven Effekte von Krafttraining auf die Gesundheit sind vielfältig. Regelmäßiges Training 
              steigert deine Energie und dein Wohlbefinden im Alltag, verbessert die Ausdauer und kann dir sogar 
              zu einem erholsameren Schlaf verhelfen.
              Durch Übungen zur Stärkung der Rumpf- und Rückenmuskulatur, wird die Wirbelsäule gestützt und 
              entlastet. Daher ist besonders bei Schmerzen und Verspannungen im Rücken ein gezieltes 
              Trainingsprogramm sinnvoll, um Beschwerden zu lindern und vorzubeugen. Eine strake Muskulatur 
              wirkt wie eine schützende Rüstung für den Körper, wodurch sie eine wichtige Rolle bei der 
              Prävention von Verletzungen im Sport und im Alltag spielt.
              Im Personaltraining erstellen wir einen Plan, der genau zu deinen gesundheitlichen Themen passt. 
              Zudem lernst du, wie du die Übungen sicher, effektiv und mit korrekter Technik ausführst, wodurch 
              das Verletzungsrisiko beim Training selbst minimiert wird.
              </p>
            </div>
            <div className='focusImgDiv'>
              <img className='focusImage' alt='focus' src={HealthImage} />
            </div>
          </div>
          <div className='focus-wrapper second'>
            <div className='not-focus-mobile-image'>
              <img className='focusImage obst' alt='focus' src={Obst} />
            </div>
            <div className='textContainer'>
            <h2 className='focusTextHeader'>Wohlfühlfigur</h2>
              <p>
              Für viele Menschen ist der Wunsch, den Körper zu formen und straffen, die Hauptmotivation, um 
              sich im Fitnessstudio anzumelden. Einige von ihnen haben schon unzählige Diäten und 
              Trainingsprogramme ausprobiert, oft ohne langfristigen Erfolg. Es ist allerdings nicht nötig, zu 
              hungern oder stundenlang auf dem Crosstrainer zu schwitzen, um seine Wunschfigur zu erreichen. 
              Durch gezieltes Training großer Muskelgruppen unter professioneller Anleitung verbrennst du nicht 
              nur effizient Kalorien, sondern stärkst auch die Muskulatur in deinem gesamten Körper. Dadurch
              wird der tägliche Kaloriengrundumsatz erhört. Das bedeutet, dass du nicht nur schneller dein 
              Wunschgewicht erreichst, sondern es langfristig auch halten kannst. Gemeinsam erarbeiten wir ein 
              effektives und gleichzeitig ein für dich stimmiges, umsetzbares Konzept, um deine körperlichen Ziele 
              zu erreichen. Gerne unterstütze ich dich auch im Bereich Ernährung, da diese gerade bei optischen 
              Transformationen eine tragende Rolle spielt.
              </p>
            </div>
            <div className='focus-mobile-image'>
              <img className='focusImage obst' alt='focus' src={Obst} />
            </div>
          </div>
          <div className='focus-wrapper third'>
            <div className='textContainer'>
            <h2 className='focusTextHeader'>Stark werden – Muskelaufbau</h2>
              <p>
              Du bist neu im Fitnessstudio und möchtest schnell Fortschritte machen? Bist du unsicher, ob du die 
              Geräte richtig nutzt oder ob dein aktuelles Training dich wirklich weiterbringt? Vielleicht trainierst du 
              auch schon länger und möchtest deine Technik in Grundübungen wie Kniebeugen, Kreuzheben oder 
              Bankdrücken verfeinern. In einer Personaltrainingssession stehe ich dir bei Themen wie diesen mit 
              Rat und Tat bei Seite. Mit einem Training, dass auf deine persönlichen Ziele und Fähigkeiten 
              zugeschnitten ist, legen wir den Grundstein für deine Transformation.
              </p>
            </div>
            <div className='focusImgDiv'>
              <img className='focusImage' alt='focus' src={Muskelaufbau} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Cards;