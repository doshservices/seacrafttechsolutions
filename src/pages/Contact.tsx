import heroImg from "../assets/Seacraft Asset/Images/contact-hero.png"
import { FC, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact: FC = () => {

    type FormFields = {
        text: string;
        from: string;
        to: string;
        fromName: string;
        toName: string;
    };

    const defaultFormFields = {
        text: "",
        from: "",
        to: "admin@seacrafttechsolutions.com",
        fromName: "",
        toName: "Seacraft Tech Solutions"
    };

    const [showResponse, setSHowResponse] = useState<boolean>(false)
    const [showError, setSHowError] = useState<boolean>(false)
    const [showErrorMsg, setShowErrorMsg] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
    // console.log(formFields);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const apiUrl: string = "https://seacraft-mailer-8zqrk.ondigitalocean.app/api/send-mail";

    const sendEmail = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true)
        setSHowError(false)
        try {
            const response = await axios.post(apiUrl, formFields, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            console.log(response);
            if (response?.status === 200 || 201) {
                setSHowError(false)
                setSHowResponse(true)
                setIsSubmitting(false)
            }
        } catch (error: any) {
            setSHowError(true)
            setSHowResponse(false)
            console.log(error);
            setIsSubmitting(false)
            if (error?.message === "Network Error") {
                setShowErrorMsg("Network Error!")
            } else {
                setShowErrorMsg("Something went wrong! Please try again")
            }
        }
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
                <form onSubmit={sendEmail}>
                    {showResponse ?
                        <section className="response">
                            <h3>Your <span> Message</span> is on its way</h3>
                            <p>Thank you for reaching out to us! <span> Your Message has been successfully sent.</span></p>
                            <p>We appreciate your inquiry and will get back to you as soon as possible.</p>
                            <p>In the meantime, feel free to explore more of what we have to offer on our website.</p>
                            <Link className="go-to-home" to="/">Go to home</Link>
                            <button onClick={() => setSHowResponse(!showResponse)} type="button">Send another message</button>
                        </section>
                        :
                        <>
                            <fieldset>
                                <legend>Full Name</legend>
                                <input value={formFields.fromName} onChange={handleChange} type="text" name="fromName" id="fromName" placeholder="Enter your full name here" required />
                            </fieldset>
                            <fieldset>
                                <legend>Email Address</legend>
                                <input value={formFields.from} onChange={handleChange} type="email" name="from" id="from" placeholder="Enter your email address here" required />
                            </fieldset>
                            <fieldset>
                                <legend>Message</legend>
                                <textarea value={formFields.text} onChange={handleChange} name="text" id="text" placeholder="Type your message here" required></textarea>
                            </fieldset>
                            {showError ?
                                <p className="error">{showErrorMsg}</p>
                                : null
                            }
                            <button disabled={isSubmitting} type="submit">{isSubmitting ? "Sending Message ..." : "Send Message"}</button>
                        </>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact;