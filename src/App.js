import React, {useEffect} from 'react';
import './App.css';
import backgroundImage1 from 'C:/Users/lance/Desktop/Developement/Coding/fashion-store/src/assets/backgroundImage1.jpg';
import backgroundImage2 from 'C:/Users/lance/Desktop/Developement/Coding/fashion-store/src/assets/backgroundImage2.jpg';
import backgroundImage3 from 'C:/Users/lance/Desktop/Developement/Coding/fashion-store/src/assets/backgroundImage3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

    AOS.init({duration: 1000});

    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div>
            <div className='navbarContainer'>
                <ul data-aos='fade-down' className='navbar'>
                    <li>Men's</li>
                    <li>Women's</li>
                    <li>Login/Sign Up</li>
                    <li>Shopping Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='backgroundImageContainer'>
                <img className='backgroundImage1' src={backgroundImage1} alt='Background'/>
                <img className='backgroundImage2' src={backgroundImage2} alt='Background'/>
                <img className='backgroundImage3' src={backgroundImage3} alt='background'/>
            </div>
            <div className='headerContainer'>
                <p data-aos='fade-up' className='siteHeader'>Mode</p>
            </div>
            <div>
                <h1 className='sloganHeader'>The best place for fashion.</h1>
                    <div className='fasionImages'>

                    </div>
            </div>
        </div>
    );
};

export default App;