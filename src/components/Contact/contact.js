import React, {useRef} from "react";
import './contact.css';
import {MdMarkEmailUnread} from "react-icons/md";
import {BsMessenger} from "react-icons/bs";
import emailjs from "emailjs-com";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aeulz4h', 'template_iyljxd4', form.current, 'yf0MLU-jU2GUlaDeO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdMarkEmailUnread className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>jeffphan8816@gmail.com</h5>
                        <a href="mailto:jeffphan8816@gmail.com">Send me a message</a>
                    </article>

                    <article className="contact__option">
                        <BsMessenger className="contact__option-icon"/>
                        <h4>Facebook</h4>
                        <h5>Jeff Phan</h5>
                        <a href="https://m.me/jeffphan8816">Send me a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" required/>
                    <textarea name="message" rows="10" placeholder="Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;