'use client';

import Image from 'next/image';

export default function TestimonialSection() {
    return (
        <section className="testimonial-one testimonial-one--home-two testimonial-one--about-page">
            {/* Decorative Shapes */}
            <div className="testimonial-one__left-shape kidearn-splax">
                {/* TODO: Add parallax effect later */}
                <Image src="/images/testimonial-shape-2.png" alt="kidearn shape left" width={200} height={200} />
            </div>

            <div className="testimonial-one__right-shape kidearn-splax">
                <Image src="/images/testimonial-shape-3.png" alt="kidearn shape right" width={200} height={200} />
            </div>

            <div className="container">
                <div className="testimonial-one__area">
                    <div className="testimonial-one__bg"></div>

                    <div
                        className="testimonial-one__bg-shape kidearn-splax"
                        style={{ backgroundImage: 'url(/images/testimonial-shape-4.png)' }}
                    ></div>

                    {/* Section Title */}
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Testimonial</h6>
                        <h3 className="sec-title__title">
                            Parents&apos; words are the <br /> key to happy kids
                        </h3>
                    </div>

                    {/* Removed Testimonial Carousel and Testimonial Item 2 as requested */}

                </div>
            </div>

        </section>
    );
}
