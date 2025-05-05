import Image from 'next/image'

const OurPrograms = () => {
    return (
        <>
            <section className="program-one">
                <div className="program-one__bg kidearn-splax" data-para-options='{"orientation":"up","scale":2.5,"overflow":true}'>
                    <Image src="/images/program-bg-shape.png" alt="kidearn" layout="fill" objectFit="cover" />
                </div>
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our Programs</h6>
                        <h3 className="sec-title__title">We meet kids at their level<br /> regardless of their age</h3>
                    </div>
                    <div className="row">
                        {/* Program 1 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="program-one__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="00ms" style={{ '--accent-color': '#F25334' }}>
                                <div className="program-one__item__shape">
                                    <svg className="program-one__item__shape-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 43">
                                        <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z" />
                                    </svg>
                                    <svg className="program-one__item__shape-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21">
                                        <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z" />
                                    </svg>
                                </div>
                                <div className="program-one__item__bg"></div>
                                <div className="program-one__item__image">
                                    <Image src="/images/program-1-1.jpg" alt="Toddler" width={500} height={400} />
                                </div>
                                <div className="program-one__item__content">
                                    <h3 className="program-one__item__title">
                                        <a href="programs-d-toddler.html">Toddler</a>
                                    </h3>
                                    <div className="program-one__item__age">(1.5-3 years)</div>
                                    <p className="program-one__item__text">Lorem ipsum dolor sit amet consectetur. Convallis</p>
                                    <a className="program-one__item__rm" href="programs-d-toddler.html">
                                        <span className="icon-right-arrow"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Program 2 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="program-one__item program-one__item--order wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms" style={{ '--accent-color': '#75C137' }}>
                                <div className="program-one__item__shape">
                                    <svg className="program-one__item__shape-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 43">
                                        <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z" />
                                    </svg>
                                    <svg className="program-one__item__shape-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21">
                                        <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z" />
                                    </svg>
                                </div>
                                <div className="program-one__item__bg"></div>
                                <div className="program-one__item__image">
                                    <Image src="/images/program-1-2.jpg" alt="Preschool" width={500} height={400} />
                                </div>
                                <div className="program-one__item__content">
                                    <h3 className="program-one__item__title">
                                        <a href="programs-d-preschool.html">Preschool</a>
                                    </h3>
                                    <div className="program-one__item__age">(2-3 years)</div>
                                    <p className="program-one__item__text">Lorem ipsum dolor sit amet consectetur. Convallis</p>
                                    <a className="program-one__item__rm" href="programs-d-preschool.html">
                                        <span className="icon-right-arrow"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Program 3 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="program-one__item wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms" style={{ '--accent-color': '#2390FF' }}>
                                <div className="program-one__item__shape">
                                    <svg className="program-one__item__shape-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 43">
                                        <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z" />
                                    </svg>
                                    <svg className="program-one__item__shape-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21">
                                        <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z" />
                                    </svg>
                                </div>
                                <div className="program-one__item__bg"></div>
                                <div className="program-one__item__image">
                                    <Image src="/images/program-1-3.jpg" alt="Kindergarten" width={500} height={400} />
                                </div>
                                <div className="program-one__item__content">
                                    <h3 className="program-one__item__title">
                                        <a href="programs-d-kindergarten.html">Kindergarten</a>
                                    </h3>
                                    <div className="program-one__item__age">(4-5 years)</div>
                                    <p className="program-one__item__text">Lorem ipsum dolor sit amet consectetur. Convallis</p>
                                    <a className="program-one__item__rm" href="programs-d-kindergarten.html">
                                        <span className="icon-right-arrow"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Program 4 */}
                        <div className="col-lg-3 col-md-6">
                            <div className="program-one__item program-one__item--order wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms" style={{ '--accent-color': '#FFAA23' }}>
                                <div className="program-one__item__shape">
                                    <svg className="program-one__item__shape-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 43">
                                        <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z" />
                                    </svg>
                                    <svg className="program-one__item__shape-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 21">
                                        <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z" />
                                    </svg>
                                </div>
                                <div className="program-one__item__bg"></div>
                                <div className="program-one__item__image">
                                    <Image src="/images/program-1-4.jpg" alt="Flex-care" width={500} height={400} />
                                </div>
                                <div className="program-one__item__content">
                                    <h3 className="program-one__item__title">
                                        <a href="programs-d-flex-care.html">Flex-care</a>
                                    </h3>
                                    <div className="program-one__item__age">(5-12 years)</div>
                                    <p className="program-one__item__text">Lorem ipsum dolor sit amet consectetur. Convallis</p>
                                    <a className="program-one__item__rm" href="programs-d-flex-care.html">
                                        <span className="icon-right-arrow"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurPrograms;
