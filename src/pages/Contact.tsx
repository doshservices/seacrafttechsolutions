import { FC, useRef } from "react";
import heroImg from "../assets/Seacraft Asset/Images/contact-hero.png"
import map1 from "../assets/Seacraft Asset/Images/map1.png"
import map2 from "../assets/Seacraft Asset/Images/map2.png"

const Contact: FC = () => {

    const formRef = useRef<HTMLFormElement | any>(null)

    const sendEmail = (e: any) => {
        e.preventDefault();
        // emailjs
        //     .sendForm('service_eldv9ba',
        //         'template_k7jn95w',
        //         form?.current,
        //         'TpX0bu1PFasNTFjXI'
        //     )
        //     .then((result) => {
        //         console.log(result.text);
        //         setAlert(true)
        //         setError(false)
        //         setSubmitting(false)
        //     }, (error) => {
        //         console.log(error.text);
        //         setError(true)
        //         setAlert(false)
        //         setSubmitting(false)
        //     });
    }

    return (
        <div className="contact">
            <figure className="contact__hero">
                <img src={heroImg} alt="contact" loading="lazy" />
            </figure>
            <p className="email-address">
                For Enquiries, Email us at: <a href="mailto:admin@seacrafttechsolutions.com">admin@seacrafttechsolutions.com</a>
            </p>
            <div className="contact__address">
                <section>
                    <h3>Office Address</h3>
                    <div className="wrapper">
                        <div className="address">
                            <h4>Lagos</h4>
                            <div>
                                <figure>
                                    <img src={map1} alt="map" />
                                </figure>
                                <address>Apartment 1c, Grenadine Estate, <br /> Monastery Road, Sangotedo, Lagos State.</address>
                            </div>
                        </div>
                        <div className="address">
                            <h4>Port-Harcourt</h4>
                            <div>
                                <figure>
                                    <img src={map2} alt="map" />
                                </figure>
                                <address>KM 1 Rumuokwurusi/Igbo Etche Road, <br /> Port-Hacourt, Rivers State, Nigeria.</address>
                            </div>
                        </div>
                    </div>
                </section>
                <form ref={formRef} onSubmit={sendEmail}>
                    <fieldset>
                        <legend>Full Name</legend>
                        <input type="text" name="name" id="name" placeholder="Enter your full name here" required />
                    </fieldset>
                    <fieldset>
                        <legend>Email Address</legend>
                        <input type="email" name="email" id="email" placeholder="Enter your email address here" required />
                    </fieldset>
                    <fieldset>
                        <legend>Message</legend>
                        <textarea name="message" id="message" placeholder="Type your message here" required></textarea>
                    </fieldset>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;