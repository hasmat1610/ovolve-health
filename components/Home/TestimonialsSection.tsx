'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import TestimonialsStyle from '@/assets/css/Testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    text: "Ovolve gave me the confidence to have informed conversations with my doctor. The insights were clear, actionable, and empowering.",
    name: "Sarah M.",
    ageLocation: "34 yrs, San Francisco",
    image: "/t1.jpg",
  },
  {
    id: 2,
    text: "I finally understand what my lab results mean. The biological clock predictor helped me make important decisions about my future.",
    name: "Jessica L.",
    ageLocation: "29 yrs, New York",
    image: "/t2.jpg",
  },
  {
    id: 3,
    text: "The personalized action plan was a game-changer. I implemented the recommendations and saw improvements in my next lab test.",
    name: "Emily R.",
    ageLocation: "31 yrs, Austin",
    image: "/t3.jpg",
  },
  {
    id: 4,
    text: "An absolute game changer for women's health tracking. The interface is intuitive and the data is presented beautifully.",
    name: "Amanda K.",
    ageLocation: "27 yrs, Chicago",
    image: "/t2.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className={`${TestimonialsStyle['testimonials-section']}`}>
      <div className="container">
        <div className={`${TestimonialsStyle['testimonials-inner']}`}>
          <div className={`title-div title-center-div`}>
            <div className='dot-title'><span className='dot'></span> <span className='small-title'>Testimonials</span> </div>
            <h2>Trusted by Women Everywhere</h2>
          </div>

          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.25,
                spaceBetween: 40,
              },
            }}
            className={`${TestimonialsStyle['testimonials-slider']} swiper-root`}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className={`${TestimonialsStyle['tst-slide']}`}>
                <div className={`${TestimonialsStyle['testimonials-card']}`}>
                  <div className={`${TestimonialsStyle['testimonials-content']}`}>
                    <i className='icon-quote'></i>
                    <h4>{item.text}</h4>
                  </div>
                  
                  <div className={`${TestimonialsStyle['testimonials-bottom']}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={56}
                      height={56}
                      className={`${TestimonialsStyle['client-img']}`}
                    />
                    <div className={`${TestimonialsStyle['client-info']}`}>
                      <h5>{item.name}</h5>
                      <p>{item.ageLocation}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection