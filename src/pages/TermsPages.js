import React, {useState} from 'react'
// import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar/index';
import TermsSection from '../components/TermsSection';
// import Footer from '../components/Footer';


const TermsPages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <div style={{padding:'0em'}}>
            <TermsSection/>
            <p></p>
          </div>
        </>
    )
}

export default TermsPages;