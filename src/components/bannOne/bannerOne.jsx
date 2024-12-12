import Button from "../button/Button"
import './baners.css'

export default function BanerOne () {
    return (
        <div className='baner_main section'>
            <div className='baner_text'>
                <h2>Мы советуем подбирать автомобиль с бюджетом 
                от <span className="baner_textred">1,3 млн</span></h2>
                <p>c учетом расходов на доставку, растаможку 
                и наши услуги.</p>
                <Button scrollTo="order_form" width="240px" height="56px"></Button>
            </div>
            <img className='baner_img' src="src\img\baner cars.png" alt="baner cars" />
        </div>
    )
}