import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Шапка с элементами меню, видимая на больших экранах */}
      <div className={`header_up section ${isMenuOpen ? 'active' : ''}`}>
        <img src="/img/header_logo.svg" alt="logo" className="header_logo" />

        
        <div className="header_ul">
          <ul>
            <li><a href="#about_us">О нас</a></li>
            <li><a href="#card">Услуги</a></li>
            <li><a href="#about_us">Преимущества</a></li>
            <li><a href="#review">Отзывы</a></li>
            <li><a href="#footer">Контакты</a></li>
          </ul>
        </div>

        
        <div className="header_telephone">
          <a href="#">+7 (8352) 67-52-52</a>
          <a href="#">+7 (927) 997-12-42</a>
        </div>
        <div className="header_media_logo">
          <img src="/img/social media logo 1.svg" alt="telegram" />
          <img src="/img/social media logo 2.svg" alt="whatsapp" />
          <img src="/img/social media logo 3.svg" alt="youtube" />
        </div>

        {/* Бургер-меню */}
        <div className="header_burger" onClick={toggleMenu}>
          <span className={`burger-bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`burger-bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`burger-bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="overlay" onClick={toggleMenu}></div>
        <div className="menu-content">

          <div className="close-menu" onClick={toggleMenu}>
            &times;
          </div>

          <ul>
            <li><a href="#about_us">О нас</a></li>
            <li><a href="#card">Услуги</a></li>
            <li><a href="#about_us">Преимущества</a></li>
            <li><a href="#review">Отзывы</a></li>
            <li><a href="#footer">Контакты</a></li>
          </ul>

          <div className="mobile-media-logo">
            <img src="/img/social media logo 1.svg" alt="telegram" />
            <img src="/img/social media logo 2.svg" alt="whatsapp" />
            <img src="/img/social media logo 3.svg" alt="youtube" />
          </div>

          <div className="mobile-telephone">
            <a href="#">+7 (8352) 67-52-52</a>
            <a href="#">+7 (927) 997-12-42</a>
          </div>
        </div>
      </div>
    </header>
  );
}