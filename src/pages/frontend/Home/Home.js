import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Slider from '~/components/frontend/Slider/Slider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus, faClock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Home() {
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

            <section className={cx('blog')}>
                <div className={cx('container')}>
                    <div className={cx('title-blog')}>
                        <h2>Read Our Blogs</h2>
                    </div>
                    <div className={cx('row', 'blog-container')}>
                        <div className={cx('blog-box', 'col-6', 'col-md-4', 'col-lg-3', 'me-5')}>
                            <div className={cx('info-blog')}>
                                <Link to={'/blog'} className={cx('image-blog')}>
                                    <img src="/Picture1.png" />
                                </Link>
                                <div className={cx('content-blog')}>
                                    <Link to={'/blog'} className={cx('name-blog')}>
                                        <span>Turpis elit in dictum eget eget</span>
                                    </Link>
                                    <span className={cx('des-blog')}>
                                        Convallis eu vel fames feugiat et venenatis nulla ipsum.
                                    </span>
                                    <span className={cx('read-time')}>
                                        <i className={cx('icon-time')}>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>
                                        3 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('blog-box', 'col-6', 'col-md-4', 'col-lg-3', 'me-5')}>
                            <div className={cx('info-blog')}>
                                <Link to={'/blog'} className={cx('image-blog')}>
                                    <img src="/Picture1.png" />
                                </Link>
                                <div className={cx('content-blog')}>
                                    <Link to={'/blog'} className={cx('name-blog')}>
                                        <span>Turpis elit in dictum eget eget</span>
                                    </Link>
                                    <span className={cx('des-blog')}>
                                        Convallis eu vel fames feugiat et venenatis nulla ipsum.
                                    </span>
                                    <span className={cx('read-time')}>
                                        <i className={cx('icon-time')}>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>
                                        3 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('blog-box', 'col-6', 'col-md-4', 'col-lg-3', 'me-5')}>
                            <div className={cx('info-blog')}>
                                <Link to={'/blog'} className={cx('image-blog')}>
                                    <img src="/Picture1.png" />
                                </Link>
                                <div className={cx('content-blog')}>
                                    <Link to={'/blog'} className={cx('name-blog')}>
                                        <span>Turpis elit in dictum eget eget</span>
                                    </Link>
                                    <span className={cx('des-blog')}>
                                        Convallis eu vel fames feugiat et venenatis nulla ipsum.
                                    </span>
                                    <span className={cx('read-time')}>
                                        <i className={cx('icon-time')}>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>
                                        3 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('blog-box', 'col-6', 'col-md-4', 'col-lg-3', 'me-5')}>
                            <div className={cx('info-blog')}>
                                <Link to={'/blog'} className={cx('image-blog')}>
                                    <img src="/Picture1.png" />
                                </Link>
                                <div className={cx('content-blog')}>
                                    <Link to={'/blog'} className={cx('name-blog')}>
                                        <span>Turpis elit in dictum eget eget</span>
                                    </Link>
                                    <span className={cx('des-blog')}>
                                        Convallis eu vel fames feugiat et venenatis nulla ipsum.
                                    </span>
                                    <span className={cx('read-time')}>
                                        <i className={cx('icon-time')}>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>
                                        3 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('blog-box', 'col-6', 'col-md-4', 'col-lg-3', 'me-5')}>
                            <div className={cx('info-blog')}>
                                <Link to={'/blog'} className={cx('image-blog')}>
                                    <img src="/Picture1.png" />
                                </Link>
                                <div className={cx('content-blog')}>
                                    <Link to={'/blog'} className={cx('name-blog')}>
                                        <span>Turpis elit in dictum eget eget</span>
                                    </Link>
                                    <span className={cx('des-blog')}>
                                        Convallis eu vel fames feugiat et venenatis nulla ipsum.
                                    </span>
                                    <span className={cx('read-time')}>
                                        <i className={cx('icon-time')}>
                                            <FontAwesomeIcon icon={faClock} />
                                        </i>
                                        3 min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
