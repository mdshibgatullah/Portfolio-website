import React from 'react';
import Cart from './Cart';
import './Services.css';
import { FaCode, FaPaintBrush, FaPalette} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const services =[
    {
        id: 1,
        icon: <FaCode />,
        name: 'Wev Development',
        details: 'Web development is the process of creating websites and web applications, encompassing everything from simple static pages to complex interactive platforms, utilizing various programming languages, tools, and frameworks. '
    },
    {
        id: 2,
        icon: <FaPaintBrush />        ,
        name: 'UI/UX Design',
        details: 'UI (User Interface) design focuses on the visual elements and interactivity of a product, while UX (User Experience) design focuses on the overall user experience, ensuring a product is intuitive, easy to use, and enjoyable.'
    },
    {
        id: 3,
        icon: <FaPalette />,
        name: 'Graphics Design',
        details: 'Graphic design is a profession, academic discipline, and applied art that focuses on creating visual communication to convey specific messages to social groups, often using typography, images, and other visual elements.'
    },
    {
        id: 4,
        icon: <FaArrowTrendUp />,
        name: 'SEO',
        details: 'SEO, which stands for Search Engine Optimization, is the process of improving a websites visibility and ranking in search engine results pages (SERPs) for specific keywords and phrases. It focuses on attracting organic (unpaid) traffic rather than relying on paid advertising or direct traffic. '
    }
]



const Services = () => {
    return (
        <section className='services' id='service'>
            <h1>My <span>Services</span></h1>

        <div className='service-container'>
        {
            services.map((item)=>(
                <Cart key={item.id} item={item}/>
            ))
        }
        </div>
        </section>
    );
};

export default Services;