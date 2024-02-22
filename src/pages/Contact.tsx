import { FC } from "react";
import heroImg from "../assets/Seacraft Asset/Images/contact-hero.png"
import map from "../assets/Seacraft Asset/Images/map.png"

const Contact: FC = () => {
    return (
        <div className="contact">
            <figure className="contact__hero">
                <img src={heroImg} alt="contact" loading="lazy" />
            </figure>
            <div className="contact__address">
                <div>
                    <img src={map} alt="" loading="lazy" />
                </div>
                <form action="">
                    <fieldset>
                        <legend>Name</legend>
                        <input type="text" name="name" id="name" />
                    </fieldset>
                    <fieldset>
                        <legend>Email Address</legend>
                        <input type="email" name="email" id="email" />
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <textarea name="message" id="message"></textarea>
                    </fieldset>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;