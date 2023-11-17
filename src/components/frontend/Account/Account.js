import { Link, useLocation } from 'react-router-dom';
import styles from './Account.module.css';
import classNames from 'classnames/bind';
import Login from './Login';
import Register from './Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Account() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    function renderForm() {
        if (isLoginPage) {
            return <Login />;
        } else if (isRegisterPage) {
            return <Register />;
        }
    }

    function handleActiveControl(e) {
        let controls = document.querySelectorAll(`.${cx('control-item')}`);
        controls.forEach((value) => {
            value.classList.remove(`${cx('active')}`);
        });
        e.target.parentNode.classList.add(`${cx('active')}`);
        console.log(e.target.parentNode);
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={cx('banner', 'd-none', 'd-md-block', 'col-8')}>
                        <img
                            className={cx('banner-img')}
                            src="https://booking.muongthanh.com/images/login-banner.png"
                            alt="banner"
                        />
                        <div className={cx('content-banner')}>
                            <h3>Trải nghiệm du lịch đẳng cấp tại DreamStay</h3>
                            <p>Hưởng nhiều ưu đãi khi đăng ký thành viên </p>
                        </div>
                    </div>
                    <div className={cx('form', 'col-12', 'col-md-4')}>
                        <div className={cx('logo')}>
                            <Link to={'/'}>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYZD8MS8KaUVrLUp3KYwO4HR66japG7ZG-g&usqp=CAU"
                                    alt="NGV Hotel"
                                    width={70}
                                    height={50}
                                />
                            </Link>
                        </div>

                        <div className={cx('control')}>
                            <button
                                className={cx('control-item', 'control-login', 'active')}
                                onClick={handleActiveControl}
                            >
                                <Link to={'/login'}>Login</Link>
                            </button>
                            <button className={cx('control-item', 'control-register')} onClick={handleActiveControl}>
                                <Link to={'/register'}>Register</Link>
                            </button>
                        </div>
                        <div className={cx('form-item')}>
                            <div>
                                {renderForm()}

                                <div className={cx('other-login')}>
                                    <p>Or Signin with</p>
                                    <ul className={cx('other-method')}>
                                        <li className={cx('other-item')}>
                                            <Link to={'/login'}>
                                                <i>
                                                    <FontAwesomeIcon icon={faFacebook} style={{ color: '#1760de' }} />
                                                </i>
                                            </Link>
                                        </li>
                                        <li className={cx('other-item')}>
                                            <Link to={'/login'}>
                                                <i>
                                                    <FontAwesomeIcon icon={faGoogle} style={{ color: '#d41616' }} />
                                                </i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;
