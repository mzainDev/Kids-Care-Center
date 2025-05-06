'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import heroBanner from '../../public/images/hero-banner-1.jpg';
import heroBanner1 from '../../public/images/hero-banner-1-2.jpg';
import heroBanner2 from '../../public/images/hero-banner-1-3.jpg';
import bannerShape2 from '../../public/images/banner-1-shape-2.png';
import bannerShape1 from '../../public/images/banner-1-shape-1.png';

const bannerSlides = [
  {
    image: heroBanner,
    title: 'Embrace<br /> confidence<br /> for a lifetime',
    buttonText: 'Book a Visit',
    buttonLink: 'contact.html',
    showShapes: true, // To conditionally render shapes
  },
  {
    image: heroBanner1,
    title: 'Another<br /> great<br /> message',
    buttonText: 'Learn More',
    buttonLink: '/another-page',
    showShapes: false, // Skip shapes on this slide
  },
  {
    image: heroBanner2,
    title: 'Third<br /> inspiring<br /> slide',
    buttonText: 'Get Started',
    buttonLink: '/get-started',
    showShapes: false,
  },
];

const BannerCarousel = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    arrows: false,
  });

  return (
    <section className="banner-one">
      <Slider
        {...settings}
        className="banner-one__carousel kidearn-owl__carousel kidearn-owl__carousel--with-shadow"
      >
        {bannerSlides.map((slide, index) => (
          <div className="item" key={index}>
            <div className="banner-one__item">
              <div
                className="banner-one__bg"
                style={{
                  backgroundImage: `url(${slide.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="banner-one__content">
                      {slide.showShapes && (
                        <>
                          <div className="banner-one__shape2"></div>
                          <div className="banner-one__shape3"></div>
                          <div className="banner-one__shape4">
                            <ExportedImage
                              src={bannerShape2}
                              alt="kidearn"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="banner-one__shape5">
                            <div className="banner-one__shape5-inner"></div>
                          </div>
                          <div className="banner-one__shape6">
                            <div className="banner-one__shape6-inner"></div>
                          </div>
                          <div
                            className="banner-one__shape1 kidearn-splax"
                            style={{
                              backgroundImage: `url(${bannerShape1.src})`,
                              backgroundSize: 'contain',
                            }}
                            data-para-options='{ "orientation": "down", "scale": 1.9, "overflow": true }'
                          ></div>
                        </>
                      )}
                      <div className="banner-one__content__bg"></div>
                      <h2
                        className="banner-one__content__title"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      ></h2>
                      <a href={slide.buttonLink} className="kidearn-btn">
                        <span>{slide.buttonText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default BannerCarousel;