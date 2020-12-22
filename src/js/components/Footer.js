import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Подпишитесь на рассылку Adventure, чтобы получать наши лучшие предложения на отпуск
                </p>
                <p className="footer-subscription-text">                   
                    Вы можете отписаться в любое время.
                </p>
                <div className="input-areas">
                    <form>
                        <input className='footer-input' type="email" name="email" placeholder="Ваш email" />
                        <Button buttonStyle='btn--outline'>Подписаться</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>О нас</h2>
                        <Link to='/sign-up'>Как это работает</Link>
                        <Link to='/'>Отзывы</Link>
                        <Link to='/'>Карьера</Link>
                        <Link to='/'>Инвесторам</Link>
                        <Link to='/'>Условия обслуживания</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Связаться с нами</h2>
                        <Link to='/'>Контакты</Link>
                        <Link to='/'>Служба поддержки</Link>
                        <Link to='/'>Направления</Link>
                        <Link to='/'>Спонсорство</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Видео</h2>
                        <Link to='/'>Отправить видео</Link>
                        <Link to='/'>Представитель</Link>
                        <Link to='/'>Агентство</Link>
                        <Link to='/'>Инфлюенсер</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Социальные сети</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                            to='/'
                            target='_blank'
                            aria-label='youtube'
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to='/'
                            target='_blank'
                            aria-label='twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/'
                            target='_blank'
                            aria-label='linkedin'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
