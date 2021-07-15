import React from 'react';
import {HeroContainer, HeroContent, HeroH1, FaqH1, FaqP} from './PrivacyElements';
import {Link} from 'react-router-dom';
// import {Button} from '../ButtonElement';


const PrivacySection = () => {

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
                <HeroH1>Privacy Policy</HeroH1>
                <FaqH1>What is Swym?</FaqH1>
                <FaqP>Global Prized linked savings using Bitcoin. Save your Bitcoin with Swym and have a change to win a prize.</FaqP>
                <FaqH1>Where does the prize come from?</FaqH1>
                <FaqP>Swym deposits the Bitcoin with our trusted lending partner Blockfi. See here for more info: https://blockfi.com/crypto-interest-account .</FaqP>
                <FaqH1>How does Swym make money?</FaqH1>
                <FaqP>Swym earns a small percentage of the interest acrrued to keep our community of Swymmers growing and offer new and other ways to win, save and learn about Bitcoin.</FaqP>
                <FaqH1>How is the Swym Champion selected?</FaqH1>
                <FaqP>The Swym Champion is selected randomly. Every satoshi a user saves gives them one chance to win. For example, if you save 1 satoshi and the total savings in the pool are 100 satoshi, you have a 1% chance of winning.</FaqP>
                <FaqH1>What is the estimated prize?</FaqH1>
                <FaqP>This weeks estimate prize is x. Download the mobile app to get live updated on the estimated prize amount.</FaqP>
                <FaqH1>Can I withdraw my Bitcoin at anytime?</FaqH1>
                <FaqP>Yes, you can withdraw your Bitcoin at anytime and it will be sent back to your confirmed withdrawal address within 24-48 hours. If you are trying to withdraw on the mobile app and are having issues, please contact support@swympools.org</FaqP>
                <FaqH1>How often are prizes released?</FaqH1>
                <FaqP>Currently we are doing prizes every week. The winner will be selected at 9 pm EST every Friday.</FaqP>
                <FaqH1>What are the rules of eligibility?</FaqH1>
                <FaqP>A Swymmer is eligible for the prize as long as their Bitcoin is saved for the full week starting Friday 9 pm EST.</FaqP>
                <FaqP>Please see our <Link to='/terms' style={{textDecoration:'none'}}>Terms of Use</Link> and <Link to='privacy' style={{textDecoration:'none'}}>Privacy Policy</Link> for more information</FaqP>
                <FaqP>For all other questions, please contact support@swympools.org</FaqP>
            </HeroContent>
        </HeroContainer>
    )
}

export default PrivacySection