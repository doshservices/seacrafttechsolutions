import { FC, useRef } from "react";
import heroImg from "../assets/Seacraft Asset/Images/contact-hero.png"
import map from "../assets/Seacraft Asset/Images/map.png"


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
            <div className="contact__address">
                <div>
                    <img src={map} alt="" loading="lazy" />
                </div>
                <form ref={formRef} onSubmit={sendEmail}>
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