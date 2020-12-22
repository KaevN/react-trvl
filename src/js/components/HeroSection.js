import React from 'react';
import { Button } from './Button';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>ПРИКЛЮЧЕНИЯ ЖДУТ</h1>
            <p>Чего же ты ждёшь?</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                    НАЧАТЬ
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                >
                    СМОТРЕТЬ ТРЕЙЛЕР <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
