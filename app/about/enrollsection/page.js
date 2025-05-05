// app/components/CallToActionSection.jsx

import Image from 'next/image';

export default function EnrollSection() {
    return (
        <section className="cta-one cta-one--about-page">
            <div className="container">
                <div className="cta-one__inner">
                    {/* Decorative Shapes */}
                    <div className="cta-one__shape1 kidearn-splax">
                        {/* TODO: Implement parallax effect later (data-para-options) */}
                        <Image src="/images/cta-shape-1.png" alt="kidearn shape 1" width={300} height={300} />
                    </div>

                    <div className="cta-one__shape2 kidearn-splax">
                        {/* TODO: Implement parallax effect later (data-para-options) */}
                        <Image src="/images/cta-shape-2.png" alt="kidearn shape 2" width={300} height={300} />
                    </div>

                    <div className="row">
                        {/* Left Content */}
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="cta-one__content">
                                <h3 className="cta-one__title">How to enroll your child to a class?</h3>
                                <a href="/about" className="kidearn-btn">
                                    <span>Visit Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Images */}
                        <div className="col-lg-6">
                            <div className="cta-one__one wow fadeInUp" data-wow-delay="300ms">
                                <Image src="/images/cta-1.png" alt="kidearn main image" width={500} height={500} />
                                <div className="cta-one__one__text">All in<br />One</div>
                            </div>

                            <div className="cta-one__thumb">
                                <div className="cta-one__thumb__two">
                                    <Image src="/images/cta-2.png" alt="kidearn secondary image" width={300} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
