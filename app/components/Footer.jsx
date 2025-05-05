import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
          <footer className="main-footer">
              <div className="main-footer__bg"></div>

              <Image src="/images/footer-s-1-1-rtl.png" className="main-footer__shape-1" alt="kidearn shape 1" width={200} height={200} />
              <Image src="/images/footer-s-1-2-rtl.png" className="main-footer__shape-2" alt="kidearn shape 2" width={200} height={200} />
              <Image src="/images/footer-s-1-3.png" className="main-footer__shape-3" alt="kidearn shape 3" width={200} height={200} />
              <Image src="/images/footer-s-1-4.png" className="main-footer__shape-4" alt="kidearn shape 4" width={200} height={200} />

              <div className="main-footer__top">
                  <div className="container">
                      <div className="row">
                          {/* About Widget */}
                          <div className="col-md-6 col-xl-4">
                              <div className="footer-widget footer-widget--about">
                                  <Link href="/" className="footer-widget__logo">
                                      <Image src="/images/logo-light.png" width={160} height={60} alt="Kidearn Logo" />
                                  </Link>
                                  <ul className="list-unstyled footer-widget__info">
                                      <li>
                                          <i className="icon-location2 footer-widget__info__icon"></i>
                                          <a href="#">6391 Elgin St. Celina, Delaware 10299</a>
                                      </li>
                                      <li>
                                          <i className="icon-call footer-widget__info__icon"></i>
                                          <a href="tel:3035550105">(303) 555-0105</a>
                                      </li>
                                      <li>
                                          <i className="icon-email1 footer-widget__info__icon"></i>
                                          <a href="mailto:kidearn@envato.com">kidearn@envato.com</a>
                                      </li>
                                  </ul>

                                  <div className="footer-widget__social">
                                      <a href="https://twitter.com"><i className="fab fa-twitter" aria-hidden="true"></i><span className="sr-only">Twitter</span></a>
                                      <a href="https://facebook.com"><i className="fab fa-facebook" aria-hidden="true"></i><span className="sr-only">Facebook</span></a>
                                      <a href="https://pinterest.com"><i className="fab fa-pinterest-p" aria-hidden="true"></i><span className="sr-only">Pinterest</span></a>
                                      <a href="https://instagram.com"><i className="fab fa-instagram" aria-hidden="true"></i><span className="sr-only">Instagram</span></a>
                                  </div>
                              </div>
                          </div>

                          {/* Links Widget */}
                          <div className="col-md-6 col-xl-2">
                              <div className="footer-widget footer-widget--links">
                                  <h2 className="footer-widget__title">Links</h2>
                                  <ul className="list-unstyled footer-widget__links">
                                      <li><Link href="/about">Admissions</Link></li>
                                      <li><Link href="/programs">Programs</Link></li>
                                      <li><Link href="/programs-d-discipline">Outdoor Games</Link></li>
                                      <li><Link href="/programs-d-preschool">Online Classes</Link></li>
                                      <li><Link href="/contact">Appointment</Link></li>
                                  </ul>
                              </div>
                          </div>

                          {/* Explore Widget */}
                          <div className="col-md-6 col-xl-2">
                              <div className="footer-widget footer-widget--links-two">
                                  <h2 className="footer-widget__title">Explore</h2>
                                  <ul className="list-unstyled footer-widget__links">
                                      <li><Link href="/about">About</Link></li>
                                      <li><Link href="/blog-grid">Our News</Link></li>
                                      <li><Link href="/contact">Contact</Link></li>
                                      <li><Link href="/faq">Help</Link></li>
                                  </ul>
                              </div>
                          </div>

                          {/* Gallery Widget */}
                          <div className="col-md-6 col-xl-4">
                              <div className="footer-widget footer-widget--gallery">
                                  <h2 className="footer-widget__title">Gallery</h2>
                                  <ul className="list-unstyled footer-widget__gallery">
                                      {[1, 2, 3, 4, 5, 6].map((num) => (
                                          <li key={num}>
                                              <a className="img-popup" href={`/assets/images/resources/footer-gallery-${num}.png`}>
                                                  <Image src={`/images/footer-gallery-${num}.png`} alt={`footer gallery ${num}`} width={80} height={80} />
                                              </a>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>

              <div className="main-footer__bottom">
                  <div className="container">
                      <div className="main-footer__bottom__inner">
                          <p className="main-footer__copyright">
                              © Copyright <span className="dynamic-year">{new Date().getFullYear()}</span> by Kidearn HTML Template.
                          </p>
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  )
}

export default Footer