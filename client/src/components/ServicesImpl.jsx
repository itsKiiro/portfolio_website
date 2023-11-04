import React from "react";
import "./ServiceImpl.css";

const ServicesImpl = () => {

    return (
        <div className="service-impl">
            <div className="service-impl-container">
                <div className="offerHeaderDiv">
                   <h1>Angebot</h1> 
                </div>
                
                <div className="service-wrapper">
                    <div className="service-offer">
                        <h3 className="service-offer-name">Personaltraining</h3>
                        <h3 className="service-offer-amount">65.00 €</h3>
                    </div>
                    <div className="service-text">
                        <p>
                        Beim individuellen Training erweiterst du dein Übungsrepertoire, verbesserst deine Technik und 
                        legst den Grundstein für die Umsetzung deiner Fitnessziele (ca. 90 Min.) 
                        </p>
                    </div>
                </div>
                <div className="service-wrapper">
                    <div className="service-offer">
                        <h3 className="service-offer-name">5er Block Personaltraining</h3>
                        <h3 className="service-offer-amount">299.00 €</h3>
                    </div>
                    <div className="service-text">
                        <p>
                        In 5 Personaltraining- Einheiten arbeiten wir über mehrere Wochen gemeinsam an deinem 
                        Fortschritt. Das intensiv betreute und auf dich maßgeschneiderte Training bietet optimale
                        Voraussetzungen, um rasch Ergebnisse zu erzielen. Zusätzliche Unterstützung liefern Infoskripten mit 
                        nützlichen Informationen zu den Themen Ernährung und Krafttraining.
                        </p>
                    </div>
                </div>
                <div className="service-wrapper">
                    <div className="service-offer">
                        <h3 className="service-offer-name">Ernährungscoaching</h3>
                        <h3 className="service-offer-amount">60.00 €</h3>
                    </div>
                    <div className="service-text">
                        <p>
                        Egal, ob du Muskeln aufbauen, Gewicht verlieren oder einfach deine Fitness verbessern möchtest –
                        deine Ernährung spielt dabei eine entscheidende Rolle. An zwei Terminen erarbeiten wir 
                        praxisorientierte Lösungen, um deine Ernährungsgewohnheiten mit deinen Trainingszielen in 
                        Einklang zu bringen.
                        </p>
                    </div>
                </div>

                <hr className="serviceHR" />

                <div>
                    <p>Die Trainingseinheiten und Coachingtermine finden wahlweise im FITINN Kagraner Platz oder im 
                    FITINN Stadioncenter statt. Der Studioeintritt ist nicht im Preis inkludiert. </p>
                </div>
            </div>
        </div>
    )
}


export default ServicesImpl;