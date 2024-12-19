import Button from '../button/Button'
import './Header.css'

export default function HeaderBottom() {
    return (
        <div className="header_bottom section">
            <div className="header_bottom_text">
                <h1>Купите автомобиль дешевле на 60%</h1>
                <p>Привезем автомобиль под ключ со всеми документами. Подбор автомобиля под любой запрос  БЕСПЛАТНО  </p>
                <Button scrollTo="order_form" width="312px" height="64px"></Button>
            </div>
            <div className='header_bottom_img'>
                <img src="/the-car/img/logo_cars.svg" alt="#"/>
            </div>
            
        </div>
    )
}