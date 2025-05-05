'use client'

import React from 'react'
import Slider from 'react-slick'
import ExportedImage from 'next-image-export-optimizer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const NextArrow = (props) => {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-secondary transition-all duration-300"
    >
      <FaAngleRight className="text-xl" />
    </button>
  )
}

const PrevArrow = (props) => {
  const { onClick } = props
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full hover:bg-secondary transition-all duration-300"
    >
      <FaAngleLeft className="text-xl" />
    </button>
  )
}

const OurTeacher = () => {
  const settings = {
    dots: true,
    infinite: true, // Enable infinite scrolling
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Set auto-scroll speed (3 seconds)
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          nextArrow: null, // Remove arrows on medium screens
          prevArrow: null,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          nextArrow: null, // Remove arrows on small screens
          prevArrow: null,
        },
      },
    ],
  }

  const teachers = [
    {
      name: 'Jane Cooper',
      role: 'Art Teacher',
      image: '/images/team-1-1.jpg',
      accentColor: '#26A6A1',
    },
    {
      name: 'John Doe',
      role: 'Math Teacher',
      image: '/images/team-1-2.jpg',
      accentColor: '#FFAA23',
    },
    {
      name: 'Emily Smith',
      role: 'Science Teacher',
      image: '/images/team-1-3.jpg',
      accentColor: '#F25334',
    },
  ]

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="sec-title text-center">
        <div className="text-center mb-8">
          <h6 className="sec-title__tagline">Our Teacher</h6>
          <h3 className="sec-title__title">
            Meet our expert &amp; smart
            <br />
            superheroes!
          </h3>
        </div>
      </div>

      {/* Teacher Carousel */}
      <div className="px-10">
        <Slider {...settings}>
          {teachers.map((teacher, index) => (
            <div key={index} className="px-4">
              <div
                className="bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
                style={{ '--accent-color': teacher.accentColor }}
              >
                {/* Teacher Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <ExportedImage
                    src={teacher.image}
                    alt={teacher.name}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Teacher Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    <a href="#" className="text-gray-900 hover:text-primary transition-colors">
                      {teacher.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{teacher.role}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: <FaFacebookF />, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
                      { icon: <FaLinkedinIn />, href: 'https://linkedin.com', color: 'hover:bg-blue-500' },
                      { icon: <FaYoutube />, href: 'https://youtube.com', color: 'hover:bg-red-600' },
                    ].map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color} hover:text-white`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default OurTeacher