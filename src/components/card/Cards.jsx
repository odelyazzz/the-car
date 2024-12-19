import Button from '../button/Button'
import './card.css'

export default function Card() {
    return (
    <section className='card' id="card">
        <div className='card_main section'>
            <div className="card_text">
                <h2>Поможем вам выгодно купить и привезти автомобиль в любую точку России</h2>
                <p>Предлагаем Вам купить автомобиль дешевле и лучше, но за тот же бюджет</p>
                <Button scrollTo="order_form" width="235px" height="56px"></Button>
            </div>
            <div className="card_button_main">
                <div className='card_button'>
                    <h4>С пробегом</h4>
                    <p>Предлагаем купить автомобиль дешевле до 60%, от рыночной цены на Авито и Авто.ру</p>
                    <img src="/img/Image card 1.svg" alt="card" />
                </div>
                <div className='card_button'>
                    <h4>Новые</h4>
                    <p>Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной ценына Авито и Авто.ру</p>
                    <img src="/img/Image card 2.svg" alt="card" />
                </div>
                <div className='card_button'>
                    <h4>Под ваш бюджет</h4>
                    <p>Предлагаем Вам купить автомобиль дешевле до 60%, от рыночной ценына Авито и Авто.ру</p>
                    <img src="/img/Image card 3.svg" alt="card" />
                </div>
            </div>
        </div>
    </section>
    )
    
}