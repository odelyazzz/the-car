import './components/reset/reset.css'
import './main.css'

import { createRoot } from 'react-dom/client'

import Header from './components/header/Header.jsx'
import HeaderBottom from './components/header/HeaderBottom.jsx'
import Card from './components/card/Cards.jsx'
import AboutUs from './components/aboutUs/AboutUS.jsx'
import WhatKindOfCars from './components/what kind of cars/whatkindofcars.jsx'
import BanerOne from './components/bannOne/bannerOne.jsx'
import Review from './components/review/review.jsx'

import './adaptive.css'
import OrderForm from "./components/orderForm/OrderForm.jsx";
import Team from "./components/team/Team.jsx";
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <HeaderBottom/>
    <Card/>
    <AboutUs/>
    <WhatKindOfCars/>
    <BanerOne/>
    <Review/>
    <OrderForm/>
    <Team/>
    <Footer/>
  </>
)
