import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactImpl.css";
import Footer from "./Footer";

const ContactImpl = () => {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const [membershipInput, setMembershipInput] = useState("");
    const [showFooter, setShowFooter] = useState(true);

    const SERVICE_ID = "********"
    const TEMPLATE_ID = "*******";
    const USER_ID = "*******";

    const handleSubmit = async (e) => {
        e.preventDefault();

        let mail = {
            from_name: `${nameInput}`,
            email_id: `${emailInput}`, 
            message: `${messageInput}`,
            membership: `${membershipInput}`,
        };

        try {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, mail, USER_ID)
              .then((result) => {
                  if (result) {
                    alert("Danke für die Nachricht!");
                    setNameInput("");
                    setEmailInput("");
                    setMessageInput("");
                    setMembershipInput("");
                  } else {
                    alert("Fehler! Versuche es in paar Minuten wieder.");
                  }
              })
          } catch (error) {
            alert("Fehler! Versuche es in paar Minuten wieder.");
            console.log(error);
          }

    }


    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "25px" }}>
                       <h1>Kontakt</h1> 
                    </div>
                
                <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="userInfo">
                            <label>Name:*</label>
                            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} required type="text" />  
                        </div>
                        <div className="userInfo">
                            <label>Email-Adresse:*</label>
                            <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required type="email" />
                        </div>
                        <div className="userInfo">
                            <label>Nachricht:</label>
                            <textarea value={messageInput} onChange={(e) => setMessageInput(e.target.value)} typeof="text"></textarea>
                        </div>
                        <div className="memberInfo">
                            <p>Mitgliedschaft im Fitinn Stadioncenter o. Fitinn Kagraner Platz?</p>
                            <div className="checkBoxSection">
                                <label className="checkboxLabel">
                                    <input className="checkBoxInput" type="radio" name="membership" value="yes" checked={membershipInput === "yes"} onChange={e => setMembershipInput(e.target.value)} />
                                    Ja
                                </label>
                                <label className="checkboxLabel">
                                    <input className="checkBoxInput" type="radio" name="membership" value="no" checked={membershipInput === "no"} onChange={e => setMembershipInput(e.target.value)} />
                                    Nein
                                </label>
                            </div>
                        </div>
                        <button className="submitButton" type="submit">Senden</button>
                    </form>
                </div>
            </div>

            <div className="close-footer-icon" onClick={() => setShowFooter(!showFooter)}>
                <ion-icon style={{ color: "black" }} name={showFooter ? "arrow-down-outline" : "arrow-up-outline"}></ion-icon>
            </div>
            {showFooter ? 
            <div className="footer-component visible">
                <Footer />
            </div>
            :
            <div className="footer-component">
                <Footer />
            </div>}
        </div>
    )
}

export default ContactImpl;