import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

const AboutSec = () => {
    return (
        <div>
            <section className="about-one">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Image Content */}
                        <div className="col-lg-6 col-md-12 order-md-1 order-lg-2">
                            <div className="about-one__image text-center">
                                <div
                                    className="about-one__image__one kidearn-tilt mx-auto"
                                    data-tilt-options='{"glare":false,"maxglare":0,"maxtilt":5,"speed":700}'
                                >
                                    <ExportedImage
                                        src="/images/about-1-1.jpg"
                                        alt="kidearn"
                                        width={500} // Increased width
                                        height={500} // Increased height
                                        layout="responsive" // Maintains the aspect ratio
                                    />
                                </div>
                                <div
                                    className="about-one__image__border wow fadeInUp mx-auto"
                                    data-wow-delay="200ms"
                                >
                                    <ExportedImage
                                        src="/images/about-1-border.jpg"
                                        alt="kidearn"
                                        width={500} // Increased width
                                        height={500} // Increased height
                                        layout="responsive" // Maintains the aspect ratio
                                    />
                                </div>
                                <div
                                    className="about-one__image__leaf kidearn-splax mx-auto"
                                    data-para-options='{"orientation":"left","scale":1.5,"overflow":true}'
                                >
                                    <ExportedImage
                                        src="/images/about-1-leaf-rtl.png"
                                        alt="kidearn"
                                        width={300} // Slightly increased width
                                        height={300} // Slightly increased height
                                        layout="responsive" // Maintains the aspect ratio
                                    />
                                </div>
                                <div
                                    className="about-one__image__ball wow fadeInUp"
                                    data-wow-delay="100ms"
                                ></div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="col-lg-6 col-md-12 order-md-2 order-lg-1 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="about-one__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">About Us</h6>
                                    <h3 className="sec-title__title">
                                        Our passion is childhood,
                                        <br />
                                        and we’re in kindergarten
                                    </h3>
                                </div>
                                <p className="about-one__content__text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but
                                    also.
                                </p>
                                <Link href="/about" className="kidearn-btn">
                                    <span>Learn More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSec;