"use client";
import React from "react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const Services = () => {
  // Define an array of service items
  const serviceItems = [
    {
      img: "/images/service-1-1.jpg",
      title: "Home-like environment",
      color: "#75C137",
    },
    {
      img: "/images/service-1-2.jpg",
      title: "Safety and security",
      color: "#26A6A1",
    },
    {
      img: "/images/service-1-3.jpg",
      title: "Quality educators",
      color: "#F25334",
    },
    {
      img: "/images/service-1-4.jpg",
      title: "Play to learn",
      color: "#FFAA23",
    },
  ];

  return (
    <div>
      <>
        {/* Service Section */}
        <section className="service-one">
          <div
            className="service-one__bg kidearn-splax"
            data-para-options='{"orientation":"up","scale":1.5,"overflow":true}'
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 369">
              <g transform="translate(0,369) scale(0.05,-0.05)">
                <path d="M4517 7359c-701-82-1096-398-1368-1099-248-640-417-846-879-1075-164-81-249-115-700-276-702-251-1101-573-1365-1099-550-1096 117-2640 1265-2927 367-91 998-110 1674-51 453 40 1043 45 1296 10 427-59 1099-221 1411-341l149-58v6527l-95 63c-395 264-902 383-1388 326z" />
              </g>
            </svg>
          </div>

          <div
            className="service-one__shape kidearn-splax"
            style={{ backgroundImage: `url(/images/about-bg-shape-1.png)` }}
            data-para-options='{"orientation":"left","scale":1.5,"overflow":true}'
          ></div>

          <div className="container">
            <div className="row gutter-y-30">
              {/* Map through the serviceItems array */}
              {serviceItems.map((item, index) => (
                <div
                  key={index}
                  className={`col-lg-3 col-md-6 col-sm-12 wow fadeInUp text-center`} // Added text-center for mobile
                  data-wow-delay={`${(index + 1) * 100}ms`}
                >
                  <div
                    className="service-one__item mx-auto" // Added mx-auto to center the item
                    style={{ "--accent-color": item.color }}
                  >
                    <div className="service-one__item__image-wrapper">
                      <div
                        className="service-one__item__image kidearn-tilt mx-auto" // Added mx-auto to center the image
                        data-tilt-options='{"glare":false,"maxglare":0,"maxtilt":7,"speed":700}'
                      >
                        <ExportedImage
                          src={item.img}
                          alt={item.title}
                          width={300}
                          height={300}
                          layout="intrinsic" // Maintains aspect ratio
                        />
                      </div>
                      <div className="service-one__item__ball"></div>
                    </div>
                    <h4 className="service-one__item__title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Services;