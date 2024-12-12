import Button from '../button/Button'
import './what kind of cars.css'

export default function WhatKindOfCars () {
    const cars = [
        {
            id: 1,
            image: "src/img/WhatKindOfCars 1.png",
            model: "Toyota RAV4 2022",
            mileage: "5 700 км",
            engine: "2.0",
            power: "149 л.с.",
            transmission: "Автомат",
            marketPrice: "3 300 000 ₽",
            carPrice: "2 700 000 ₽",
        },
        {
            id: 2,
            image: "src/img/WhatKindOfCars 2.png",
            model: "Audi Q5 2021",
            mileage: "5 700 км",
            engine: "2.0",
            power: "149 л.с.",
            transmission: "Автомат",
            marketPrice: "3 250 000 ₽",
            carPrice: "2 500 000 ₽",
        },
        {
            id: 3,
            image: "src/img/WhatKindOfCars 3.png",
            model: "Honda CR-V 2021",
            mileage: "5 700 км",
            engine: "2.0",
            power: "149 л.с.",
            transmission: "Автомат",
            marketPrice: "2 900 000 ₽",
            carPrice: "2 300 000 ₽",
        },
    ];

    return (
        <div className="section4">
            <div className="section4_all section">
                <div className="section4_text">
                    <h2>Какие авто привозим?</h2>
                    <p>Привозим авто не старше 7 лет на момент растаможки.</p>
                </div>
                <div className="section4_cardall">
                    {cars.map((car) => (
                        <div key={car.id} className={`section4_card${car.id} s`}>
                            <img src={car.image} alt={car.model} />
                            <h3>{car.model}</h3>
                            <div className="card_cars_info">
                                <div className="card_cars_info1">
                                    <p className="textinfo">Пробег</p>
                                    <p className="textinfo">Объем двигателя</p>
                                    <p className="textinfo">Мощность</p>
                                    <p className="textinfo">Коробка</p>
                                    <p>Цена на вторичном рынке в РФ</p>
                                    <p>Цена автомобиля “под ключ”</p>
                                </div>
                                <div className="card_cars_info2">
                                    <p>{car.mileage}</p>
                                    <p>{car.engine}</p>
                                    <p>{car.power}</p>
                                    <p>{car.transmission}</p>
                                    <p>{car.marketPrice}</p>
                                    <p className="textinfo1">{car.carPrice}</p>
                                </div>
                            </div>
                            <Button scrollTo="order_form" width="100%" height="56px"></Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
