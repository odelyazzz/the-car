import React, { useState } from 'react';
import './OrderForm.css';
import Button from "../button/Button.jsx";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: 'Донецк',
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const baseCost = 1000; // базовая стоимость доставки
  const cities = {
    Донецк: 0,
    Макеевка: 1.2,
    Горловка: 1.5,
    Енакиево: 1.8,
    Харцызск: 1.1,
    Шахтерск: 1.4,
    Торез: 1.6,
    Снежное: 2.0,
  };

  const calculateCost = (city) => {
    const coefficient = cities[city];
    return coefficient === 0 ? 'Бесплатно' : `${(baseCost * coefficient).toFixed(0)} ₽`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="order_form">
          <h2 className="order_title">Спасибо, {formData.name}! Мы с вами свяжемся!</h2>
        </div>
    );
  }

  return (
      <div className="order_form" id="order_form">
        <h2 className="order_title">Оформить заказ</h2>
        <form onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="name">Имя</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Введите ваше имя"
            />
          </div>
          <div className="form_group">
            <label htmlFor="contact">Номер телефона или Telegram</label>
            <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                required
                placeholder="Введите номер телефона или Telegram"
            />
          </div>
          <div className="form_group">
            <label htmlFor="city">Город</label>
            <div
                className="custom-dropdown"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="dropdown-selected">{formData.city}</div>
              {dropdownOpen && (
                  <div className="dropdown-options">
                    {Object.keys(cities).map((city) => (
                        <div
                            key={city}
                            className="dropdown-option"
                            onClick={() => {
                              setFormData((prevData) => ({ ...prevData, city }));
                              setDropdownOpen(false);
                            }}
                        >
                          {city}
                        </div>
                    ))}
                  </div>
              )}
            </div>
          </div>
          <div className="cost-display">
            Стоимость доставки: {calculateCost(formData.city)}
          </div>
          <Button scrollTo="order_form" width="240px" height="56px"/>
        </form>
      </div>
  );
};

export default OrderForm;