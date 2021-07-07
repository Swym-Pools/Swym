import React, {useState} from 'react'
// import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar/index';
import FaqSection from '../components/FaqSection';
// import Footer from '../components/Footer';


const FaqPages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <div style={{padding:'0em'}}>
            <FaqSection />
            <p></p>
          </div>
        </>
    )
}

export default FaqPages;
