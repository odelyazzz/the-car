import Button from "../button/Button";
import './About US.css'


export default function AboutUs () {
    return (
        <div className="aboutUs" id="about_us">
            <div className="aboutUs_main">
                <div className="aboutUs_text">
                    <h2>О нас</h2>
                    <p>Мы автосалон и официальный партнер крупнейших мировых авто-аукционов: IAA (Insurance Auto Auction), Copart, Manheim.</p>
                </div>
                <ul className="aboutUs_content">
                    <li>
                        <img src="src\img\lebel cars 1.svg" alt="#" />
                        <p>Работаем без посредников</p>
                    </li>
                    <li>
                        <img src="src\img\label cars 2.svg" alt="#" />
                        <p>Успешный опыт 10 лет</p>
                    </li>
                    <li>
                        <img src="src\img\lebel cars 3.svg" alt="#" />
                        <p>Отлаженная логистика</p>
                    </li>
                </ul>
                <div className="aboutUs_border">
                    <p className="aboutUs_bordertext">Мы берем на себя полное сопровождение сделки 
                    до передачи автомобиля в руки клиенту. </p>
                </div>
                <Button scrollTo="order_form" width="235px" height="56px"></Button>
            </div>
            <img className="aboutUs_img" src="src/img/about us.png" alt="aboutus" />
            
            
        </div>
    )
}