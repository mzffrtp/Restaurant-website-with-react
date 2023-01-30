import React from "react";
import "../assets/styles/contact.css";
import background from "../assets/imgs/backgh.jpg";


const Contact = () => {
    return (
        <div className="contactContainer container"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="contactWrapper">
                <div>
                <h1>Contact Us</h1>
                </div>
                <form className="contactForm">
                    <div className="contactRow">
                        <label htmlFor="name">Full Name:</label>
                        <input name="name" placeholder="your name..." />
                    </div>
                    <div className="contactRow">
                        <label htmlFor="email">E-mail:</label>
                        <input name="email" placeholder="your email..." />
                    </div>
                    <div className="contactRow">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" placeholder="your message ..."></textarea>
                    </div>
                    <div className="contactBtn">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact