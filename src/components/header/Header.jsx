import './Header.css'

export default function Header() {

  return (
    <header> 
      <div className="header_up section">
        <img src="src\img\header_logo.svg" alt="logo" className="header_logo" />
        <div className="header_ul">
          <ul>
            <li><a href="#about_us">О нас</a></li>
            <li><a href="#card">Услуги</a></li>
            <li><a href="#about_us">Преимущества</a></li>
            <li><a href="#review">Отзывы</a></li>
            <li><a href="#footer">Контакты</a></li>
          </ul>
        </div>
        <div className="header_media_logo">
          <img src="src\img\social media logo 1.svg" alt="telegram" />
          <img src="src\img\social media logo 2.svg" alt="whatsapp" />
          <img src="src\img\social media logo 3.svg" alt="youtube" />
        </div>
        <div className="header_telephone">
          <a href="#">+7 (8352) 67-52-52</a>
          <a href="#">+7 (927) 997-12-42</a>
        </div>
      </div>
      
    </header>
  )
}


