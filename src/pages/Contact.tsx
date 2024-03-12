import { FC, useRef } from "react";
import heroImg from "../assets/Seacraft Asset/Images/contact-hero.png"

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
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.05374036976!2d3.5858538616981073!3d6.4572969670054015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf90b837a1519%3A0x7a7c1866e0e12b4c!2sSangotedo%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710273744461!5m2!1sen!2sng" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <address>Apartment 1c, Grenadine Estate, <br /> Monastery Road, Sangotedo, Lagos State.</address>
                            </div>
                        </div>
                        <div className="address">
                            <h4>Port-Harcourt</h4>
                            <div>
                                <div className="map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032010.0070069772!2d3.7830359603554937!3d5.88797020033364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d2dce8dbb58b%3A0xfea971df88148bec!2sKenes%20Offshore%20Services%20Limited!5e0!3m2!1sen!2sng!4v1710274302530!5m2!1sen!2sng" width="600" height="450" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
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