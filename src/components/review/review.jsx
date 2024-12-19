import React from 'react';
import './review.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwipeHint from "../swipeHint/SwipeHint.jsx";
export default function Review () {
  const reviews = [
    {
      id: 1,
      link: 'https://www.youtube.com/watch?v=Rls3t1VTcXg',
      image: 'src/img/Review_cars_1.jpg'
    },
    {
      id: 2,
      link: 'https://www.youtube.com/watch?v=j_9UETcDVw4',
      image: 'src/img/Review_cars_2.jpg'
    },
    {
      id: 3,
      link: 'https://www.youtube.com/watch?v=DfbuaqsoSLo',
      image: 'src/img/Review_cars_3.jpg'
    },
    {
      id: 4,
      link: 'https://www.youtube.com/watch?v=vLs2pAAdf8Y',
      image: 'src/img/Review_cars_4.jpg'
    },
    {
      id: 5,
      link: 'https://www.youtube.com/watch?v=NZTsx13WcEk',
      image: 'src/img/Review_cars_5.jpg'
    },
  ]

  return (
      <div className='review_main' id='review'>
        <div className='review_text'>
          <h2>Обзоры привезенных авто</h2>
        </div>
        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              720: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
        >
          {reviews.map(review => (
              <SwiperSlide key={review.id}>
                <a href={review.link} target="_blank" rel="noopener noreferrer">
                  <img src={review.image} alt="cars" />
                </a>
              </SwiperSlide>
          ))}
        </Swiper>
        <SwipeHint/>
      </div>
  );
}
