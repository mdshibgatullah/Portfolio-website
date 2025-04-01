import React from 'react';
import './Contact.css';
import '../Hero/Hero.css'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import WhatsApp from '../../assets/image/WhatsApp.jpeg';
import Hero from '../../assets/image/hero.jpeg';



const Contact = () => {
    return (
        <section id='contact'>
            <h1>Contact <span>Me</span></h1>

            <div className="contact-container">
                <div className="contact-details">
                    <p>Phone <b>:</b> <span className='first'>+880 01880960014</span></p>
                    <p>What'sApp <b>:</b> <span className='second'>01880960014</span></p>
                    <p>Telegram <b>:</b> <span className='third'>01880960014</span></p>
                    <p>Email <b>:</b><span className='fourth'>mdshibgatullah94@gmail.com</span></p>

                    <div className="sci">
                        <a href="https://www.linkedin.com/in/md-shibgatullah-sifat-9ba022351/"><FaLinkedin /></a>
                        <a href="https://github.com/mdshibgatullah"><FaGithub /></a>
                        <a href="https://web.facebook.com/hs.sifat.9"><FaFacebook /></a>
                    </div>
                </div>

                <div className="contact-img-container">
                    <div className="mypic">
                    <img src={Hero} alt="" />
                    </div>

                    <div className="contact-img">
                        <h3>Md. Shibgatullah Sifat</h3>
                        <p>What'App Contact</p>
                        <img src={WhatsApp} alt="mypic" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;