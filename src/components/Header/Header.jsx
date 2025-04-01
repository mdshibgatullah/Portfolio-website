import React, { useState } from 'react';
import './Header.css';
import { FaTimes, FaBars } from "react-icons/fa";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='header'>
            
                <a href="#" className='logo'>Sifat<span>.</span></a>
            

                <nav className={`nav ${isOpen ? "active" : ""}`}>
                    <a href="#home">Home</a>
                    <a href="#service">Sevices</a>
                    <a href="#resume">Resume</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>



            {/* Mobile menu  */}

                <button onClick={() => setIsOpen(!isOpen)} className='nav-icon'>
                  {isOpen ? <FaTimes className='times'/> : <FaBars />}
               </button>
            
            
        </div>
    );
};

export default Header;