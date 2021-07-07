import React, {useState} from 'react'
// import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
// import HeroSection from '../components/HeroSection';
// import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar/index';
// import Services from '../components/Services';
// import FaqSection from '../components/FaqSection';
import TermsSection from '../components/TermsSection';
// import Footer from '../components/Footer';


const TermPages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <TermsSection />
        
        </>
    )
}

export default TermPages;