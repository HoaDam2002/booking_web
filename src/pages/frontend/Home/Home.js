import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Slider from '~/components/frontend/Slider/Slider';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Home() {
    return (
        <>
            <Slider />

            {/* Location */}
            <section className={cx('location')} style={{ margin: '100px 0 0 0' }}>
                <div className="container">
                    <h2 className={cx('location-content')}>Choose Your Location</h2>
                    <div className={cx('row', 'location-box')}>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx('col-6', 'col-md-4', 'col-lg-3', 'card-location')}>
                            <strong className={cx('location-name')}>Đà Nẵng</strong>
                            <div className={cx('location-image')}>
                                <Link to={'/rooms'}>
                                    <img src="https://lh4.googleusercontent.com/cr8jei9MZ0ySWxe9NeewExKUiJhnCCnIslFpM34ae_ASRSrqotH3aDzUkUBUWK-E6O16gaE3hajAC9dNu1SRhP14U9iiNhyMbfpf7q_gAao-boSVNM_w9b6BiTRRjd-roDpj6IRV" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>Home</section>
        </>
    );
}

export default Home;
