import React, {useState} from 'react'
// import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import PrivacySection from '../components/PrivacySection';
import Sidebar from '../components/sidebar/index';
// import Footer from '../components/Footer';


const PrivacyPages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <div style={{padding:'0em'}}>
            <PrivacySection />
            <p></p>
          </div>
        </>
    )
}

export default PrivacyPages;