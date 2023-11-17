import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Slider from '~/components/frontend/Slider/Slider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarMinus, faClock } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Home() {
    useEffect(() => {
        const backgroundDivs = document.querySelectorAll(`.${cx('blog-slide')}`);

        backgroundDivs.forEach(function (div) {
            const backgroundPath = div.getAttribute('data-image');
            if (backgroundPath) {
                div.style.backgroundImage = `linear-gradient(100deg, rgba(38, 38, 38, 0.9), transparent, transparent), url(${backgroundPath})`;
            }
        });
    }, []);

    return (
        <>
            <Slider />

            {/* Location */}
            <section className={cx('location')}>
                <div className="container">
                    <h2 className={cx('location-content')}>Choose Your Location</h2>
                    <div className={cx('row', 'location-box')}>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img
                                        src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV"
                                        alt="Đà Nẵng"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={cx('service')}>
                <div className="container">
                    <div className={cx('title-service')}>
                        <h2 className={cx('content-services')}>Discover Our Services</h2>
                        <span className={cx('content-des')}>
                            We offer modern (5 star) hotel facilities for your comfort.
                        </span>
                    </div>
                    <div className="row">
                        <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'mb-4')}>
                            <div className={cx('service-box')}>
                                <i className={cx('service-icon')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} />
                                </i>
                                <span className={cx('service-name')}>Flexible living</span>
                                <span className={cx('service-des')}>
                                    Stay as long or as little as you need with month-to-month contracts
                                </span>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'mb-4')}>
                            <div className={cx('service-box')}>
                                <i className={cx('service-icon')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} />
                                </i>
                                <span className={cx('service-name')}>Flexible living</span>
                                <span className={cx('service-des')}>
                                    Stay as long or as little as you need with month-to-month contracts
                                </span>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'mb-4')}>
                            <div className={cx('service-box')}>
                                <i className={cx('service-icon')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} />
                                </i>
                                <span className={cx('service-name')}>Flexible living</span>
                                <span className={cx('service-des')}>
                                    Stay as long or as little as you need with month-to-month contracts
                                </span>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'mb-4')}>
                            <div className={cx('service-box')}>
                                <i className={cx('service-icon')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} />
                                </i>
                                <span className={cx('service-name')}>Flexible living</span>
                                <span className={cx('service-des')}>
                                    Stay as long or as little as you need with month-to-month contracts
                                </span>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'mb-4')}>
                            <div className={cx('service-box')}>
                                <i className={cx('service-icon')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} />
                                </i>
                                <span className={cx('service-name')}>Flexible living</span>
                                <span className={cx('service-des')}>
                                    Stay as long or as little as you need with month-to-month contracts
                                </span>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-4', 'mb-4')}>
                            <div className={cx('service-box')}>
                                <i className={cx('service-icon')}>
                                    <FontAwesomeIcon icon={faCalendarMinus} />
                                </i>
                                <span className={cx('service-name')}>Flexible living</span>
                                <span className={cx('service-des')}>
                                    Stay as long or as little as you need with month-to-month contracts
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className={cx('blog')}>
                <div className={cx('container')}>
                    <div className={cx('blog-wrapper')}>
                        <div className={cx('blog-control', 'blog-control-left')}>
                            <button>
                                <i>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </i>
                            </button>
                        </div>
                        <div className={cx('row', 'blog-show')}>
                            <div className={cx('blog-slide', 'col-12')} data-image="/blog.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('blog-slide', 'col-12')} data-image="/blog-demo.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('blog-slide', 'col-12')} data-image="/blog.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('blog-slide', 'col-12')} data-image="/blog.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('blog-slide', 'col-12')} data-image="/blog.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={cx('blog-control', 'blog-control-right')}>
                            <button>
                                <i>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className={cx('blog')}>
                <div className={cx('title-service')}>
                    <h2 className={cx('content-services')}>Our Blogs</h2>
                    <span className={cx('content-des')}>
                        We offer modern (5 star) hotel facilities for your comfort.
                    </span>
                </div>
                <div className="container">
                    <div id="myCarouselBlog" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">
                        <div className="carousel-inner">
                            <div className={cx('carousel-item', 'active', 'blog-slide')} data-image="/blog.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                            <div className={cx('carousel-item', 'blog-slide')} data-image="/blog-demo.jpg">
                                <div className={cx('blog-content')}>
                                    <h3>Tremblant In Canada</h3>
                                    <p>
                                        <i>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>{' '}
                                        15TH APRIL, 2019
                                    </p>
                                    <Link to={'/blog'}>
                                        ReadMore{' '}
                                        <i>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#myCarouselBlog"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#myCarouselBlog"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
