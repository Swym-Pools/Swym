import React from 'react';
import {HeroContainer, HeroContent, HeroH1, FaqH1, FaqP} from './FaqElements';
import {Link} from 'react-router-dom';
// import {Button} from '../ButtonElement';


const FaqSection = () => {

    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

    // const goSwym = () => {
    //     window.open('https://testflight.apple.com/join/hyUosx0v', '_blank')
    // }

    return (
        <HeroContainer>
           
            <HeroContent>
                <HeroH1>Faq</HeroH1>
                <FaqH1>What is Swym?</FaqH1>
                <FaqP>Swym is global, prized-linked savings using Bitcoin. Swym members pool their Bitcoin together for a chance at winning weekly prizes as a fun way to save money.</FaqP>
                <FaqH1>Where does the prize come from?</FaqH1>
                <FaqP>Swym deposits the Bitcoin with a combination of trusted lending partners including Blockfi, Celsius, and others in order to offer a reliable, and attractive prize for pool members.</FaqP>
                <FaqH1>How does Swym make money?</FaqH1>
                <FaqP>Swym earns a small percentage of the interest acrrued to keep our community of Swym members growing and offer new and other ways to win, save and learn about Bitcoin.</FaqP>
                <FaqH1>How is the Swym Champion selected?</FaqH1>
                <FaqP>The Swym Champion is selected randomly. Each satoshi a pool member saves gives them one chance to win. For example, if you save 1 satoshi and the total savings in the pool are 100 satoshi, you have a 1% chance of winning.</FaqP>
                <FaqH1>What is the estimated prize?</FaqH1>
                <FaqP>This week, the estimate prize is 39,137 satoshis, and adjusts with all inflows and outflows. Download the mobile app to get a live updates for the estimated weekly prize amount.</FaqP>
                <FaqH1>Can I withdraw my Bitcoin at anytime?</FaqH1>
                <FaqP>Yes, its your Bitcoin and you can send it wherever you want. At anytime you can send your Bitcoin to your confirmed withdrawal address. Due to security models utilized by our lending partners, the Swym withdrawal process typically finalizes within 24-48 hours. If you are trying to send on the mobile app and are having issues, please contact support@swympools.org</FaqP>
                <FaqH1>How often are prizes released?</FaqH1>
                <FaqP>Currently we are doing prizes every week. The winner will be selected at 9 pm EST every Friday.</FaqP>
                <FaqH1>What are the rules of eligibility?</FaqH1>
                <FaqP>A pool member is eligible for the prize as long as their Bitcoin is saved in the Swym app for the full week starting Friday 9 pm EST.</FaqP>
                <FaqP>Please see our <Link to='/terms' style={{textDecoration:'none'}}>Terms of Use</Link> and <Link to='privacy' style={{textDecoration:'none'}}>Privacy Policy</Link> for more information</FaqP>
                <FaqP>For all other questions, please contact support@swympools.org</FaqP>
            </HeroContent>
        </HeroContainer>
    )
}

export default FaqSection
