import React from 'react';
import {HeroContainer, HeroContent,FaqH1} from './WithdrawElements';
import {Link} from 'react-router-dom';
// import {Button} from '../ButtonElement';


const WithdrawSection = () => {

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
                <FaqH1>Your withdrawal address is confirmed.</FaqH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default WithdrawSection