"use client"
import Head from 'next/head';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

export default function AboutTeamSection() {
    return (
        <>
            <Head>
                <title>About Us | Kidearn</title>
                <meta name="description" content="Learn more about Kidearn and our mission for children's education" />
            </Head>

            <section className="about-four">
                <div className="container">
                    <div className="row">
                        {/* Left Image Section */}
                        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                            <div className="about-four__image">
                                <div className="about-four__image__shape1">
                                    <ExportedImage src="/images/about-4-shape-1.png" alt="kidearn shape 1" width={500} height={500} />
                                </div>

                                <div className="about-four__image__one kidearn-tilt">
                                    {/* TODO: Implement tilt effect later */}
                                    <ExportedImage src="/images/about-4-1.jpg" alt="kidearn main image" width={500} height={500} />
                                    <div className="about-four__image__one-bottom"></div>
                                </div>

                                <div className="about-four__image__two wow fadeInUp" data-wow-delay="500ms">
                                    <ExportedImage src="/images/about-4-2.jpg" alt="kidearn secondary image" width={500} height={500} />
                                </div>

                                <div className="about-four__image__bg-shape">
                                    <ExportedImage src="/images/about-4-shape-2.png" alt="kidearn background shape" width={500} height={500} />
                                </div>
                            </div>
                        </div>

                        {/* Right Content Section */}
                        <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
                            <div className="about-four__content">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">About Us</h6>
                                    <h3 className="sec-title__title">Welcome to best kidearn for your child</h3>
                                </div>

                                <p className="about-four__content__text">
                                    Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the industry&apos;s
                                </p>

                                <div className="about-four__info" style={{ '--accent-color': '#F25334' }}>
                                    <div className="about-four__info__icon"><span className="icon-trophy1"></span></div>
                                    <h3 className="about-four__info__title">Award Wining Time</h3>
                                    <p className="about-four__info__text">
                                        Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum
                                    </p>
                                </div>

                                <div className="about-four__info" style={{ '--accent-color': '#2390FF' }}>
                                    <div className="about-four__info__icon"><span className="icon-interest-rate"></span></div>
                                    <h3 className="about-four__info__title">Higest Success Rates</h3>
                                    <p className="about-four__info__text">
                                        Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum
                                    </p>
                                </div>

                                <a href="/about" className="kidearn-btn">
                                    <span>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}