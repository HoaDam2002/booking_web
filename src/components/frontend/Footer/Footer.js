import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <>
            <footer className={cx('footer')}>
                <div className="container">
                    <div className={cx('footer-box')}>
                        <div className="row">
                            {/* col-số */}
                            <div className={cx('col-12', 'col-md-4', 'info-footer')}>
                                <Link className={cx('link-logo')}>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYZD8MS8KaUVrLUp3KYwO4HR66japG7ZG-g&usqp=CAU"
                                        alt="NGV Hotel"
                                        width={100}
                                        height={40}
                                        className={cx('logo')}
                                        // alt="logo"
                                    />
                                </Link>
                                <p className={cx('content-footer')}>
                                    We inspire and reach millions of travelers across 90 local websites
                                </p>
                                <ul className={cx('social-network')}>
                                    <li className={cx('social-item')}>
                                        <Link>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li className={cx('social-item')}>
                                        <Link>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li className={cx('social-item')}>
                                        <Link>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li className={cx('social-item')}>
                                        <Link>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className={cx('col-12', 'col-md-4')}>
                                <h3 className={cx('title-footer')}>CONTACT US</h3>
                                <ul className={cx('list-contacts')}>
                                    <li className={cx('contact-item', 'text-footer')}>(12) 345 67890</li>
                                    <li className={cx('contact-item', 'text-footer')}>info.colorlib@gmail.com</li>
                                    <li className={cx('contact-item', 'text-footer')}>
                                        856 Cordia Extension Apt. 356, Lake,
                                    </li>
                                    <li className={cx('contact-item', 'text-footer')}>United State</li>
                                </ul>
                            </div>
                            <div className={cx('col-12', 'col-md-4')}>
                                <h3 className={cx('title-footer')}>NEW LATEST</h3>
                                <span className={cx('des-latest')}>Get the latest updates and offers.</span>
                                <form className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                    <button className={cx('btn', 'btn-send')}>
                                        <Link to={'/send'}>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </Link>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
