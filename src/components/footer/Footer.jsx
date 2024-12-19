import './Footer.css';

export default function Footer() {
  return (
      <footer id="footer">
        <div className="footer_main section">
          <img src="src\img\header_logo.svg" alt="logo" className="footer_logo" />
          <div className="footer_ul">
            <ul>
              <li><a href="#about_us">О нас</a></li>
              <li><a href="#card">Услуги</a></li>
              <li><a href="#about_us">Преимущества</a></li>
              <li><a href="#review">Отзывы</a></li>
              <li><a href="#footer">Контакты</a></li>
            </ul>
          </div>
          <div className="footer_media_logo">
            <a href="#"><img src="../../../public/img/social media logo 1.svg" alt="telegram"/></a>
            <a href="#"><img src="../../../public/img/social media logo 2.svg" alt="whatsapp"/></a>
            <a href="#"><img src="../../../public/img/social media logo 3.svg" alt="youtube" /></a>
          </div>
          <div className="footer_telephone">
            <a href="tel:+78352675252">+7 (8352) 67-52-52</a>
            <a href="tel:+79279971242">+7 (927) 997-12-42</a>
          </div>
        </div>
        <div className="footer_bottom">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
  );
}
