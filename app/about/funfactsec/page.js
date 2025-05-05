// app/components/FunFactSection.jsx

import Image from 'next/image';

export default function FunFactSection() {
    return (
        <section className="funfact-one">
            {/* Decorative Shapes */}
            <div className="funfact-one__shape1 kidearn-splax">
                {/* TODO: Implement parallax effect later */}
                <Image src="/images/funfact-shape-1.png" alt="kidearn shape 1" width={200} height={200} />
            </div>
            <div className="funfact-one__shape2 kidearn-splax">
                <Image src="/images/funfact-shape-2.png" alt="kidearn shape 2" width={200} height={200} />
            </div>
            <div className="funfact-one__shape3 kidearn-splax">
                <Image src="/images/funfact-shape-3.png" alt="kidearn shape 3" width={200} height={200} />
            </div>
            <div className="funfact-one__shape4 kidearn-splax">
                <Image src="/images/funfact-shape-4.png" alt="kidearn shape 4" width={200} height={200} />
            </div>
            <div className="funfact-one__shape5 kidearn-splax">
                <Image src="/images/funfact-shape-5.png" alt="kidearn shape 5" width={200} height={200} />
            </div>

            <div className="container">
                <div className="row gutter-y-30">
                    {/* Fact Item 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="funfact-one__item text-center">
                            <div className="funfact-one__icon">
                                <span className="icon-graduated"></span>
                            </div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="30.3" data-speed="1500"></span>
                                </span>k
                            </div>
                            <p className="funfact-one__title">Student Enrolled</p>
                        </div>
                    </div>

                    {/* Fact Item 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="funfact-one__item funfact-one__item--smnone text-center">
                            <div className="funfact-one__icon">
                                <span className="icon-online-learning"></span>
                            </div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="40.5" data-speed="1500"></span>
                                </span>k
                            </div>
                            <p className="funfact-one__title">Class completed</p>
                        </div>
                    </div>

                    {/* Fact Item 3 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="funfact-one__item text-center">
                            <div className="funfact-one__icon">
                                <span className="icon-rating"></span>
                            </div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="88.9" data-speed="1500"></span>
                                </span>%
                            </div>
                            <p className="funfact-one__title">Satisfaction rate</p>
                        </div>
                    </div>

                    {/* Fact Item 4 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="funfact-one__item funfact-one__item--noborder text-center">
                            <div className="funfact-one__icon">
                                <span className="icon-instructor"></span>
                            </div>
                            <div className="funfact-one__count">
                                <span className="count-box">
                                    <span className="count-text" data-stop="6.30" data-speed="1500"></span>
                                </span>+
                            </div>
                            <p className="funfact-one__title">Top instructors</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
