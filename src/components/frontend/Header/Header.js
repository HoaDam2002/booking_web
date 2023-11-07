import classNames from 'classnames/bind';
import { faArrowRightToBracket, faBars, faBed, faBook, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from '~/assets/logo/logo192.png';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import Search from "../Search/Search";

const cx = classNames.bind(styles);
function Header() {
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

    ///underline nav
    function handleActiveNav(e) {
        let listNavItem = document.querySelectorAll('li.nav-item');
        listNavItem.forEach((value) => {
            value.classList.remove(cx('active'));
        });
        let parentElement = e.target.parentNode;
        parentElement.classList.add(cx('active'));
    }

    function handleShowNavMobile() {
        document.querySelector('.' + cx('nav_overlay')).style.display = 'block';
        setToggleMenuMobile(!toggleMenuMobile);
    }

    function handleHiddenNavMobile() {
        document.querySelector('.' + cx('nav_overlay')).style.display = 'none';
        setToggleMenuMobile(!toggleMenuMobile);
    }

    return (
        <>
            <header>
                <nav className={cx('navbar', 'shadow-sm', 'navbar-expand-md')}>
                    <div className={cx('container')}>
                        <Link className={cx('navbar-brand')} to={'/'}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCYZD8MS8KaUVrLUp3KYwO4HR66japG7ZG-g&usqp=CAU"
                                alt="NGV Hotel"
                                width={100}
                                height={40}
                            />
                        </Link>
                        <ul
                            className={cx(
                                'nav',
                                'navbar-nav',
                                'ms-auto',
                                'd-none',
                                'd-md-flex',
                                // "col-4"
                            )}
                        >
                            <li className={cx('nav-item', 'mx-1', 'active')} onClick={handleActiveNav}>
                                <Link className={cx('nav-link', 'nav-link-item', 'text-black', 'px-3')} to="/">
                                    {' '}
                                    Blogs
                                </Link>
                            </li>
                            <li className={cx('nav-item', 'mx-1')} onClick={handleActiveNav}>
                                <Link className={cx('nav-link', 'nav-link-item', 'text-black', 'px-3')} to="/blogs">
                                    Room
                                </Link>
                            </li>
                            <li className={cx('nav-item', 'mx-1')} onClick={handleActiveNav}>
                                <Link className={cx('nav-link', 'nav-link-item', 'text-black', 'px-3')} to="/âsas">
                                    About
                                </Link>
                            </li>
                            <li className={cx('nav-item', 'mx-1')}>
                                <Link className={cx('nav-link', 'px-3', 'btn-login')} to="/âsas">
                                    Login
                                </Link>
                            </li>
                            {/* <li className={cx("nav-item", "mx-1")} onClick={handleActiveNav}> 
                                    <Link className={cx("nav-link", "text-black", "px-3")} to="/âsas">
                                        Register
                                    </Link>
                                </li> */}
                            {/* <li className={cx('nav-item', 'nav-avatar', 'ms-2')}>
                                <Link className={cx('nav-link', 'nav-avatar-link')} to="/account">
                                    <img src="/logo192.png" alt="Avatar" className={cx('avatar')} />
                                </Link>
                                <ul className={cx('dropdown-account')}>
                                    <li className={cx('dropdown-item')}>
                                        <Link to={'/profile'} className={cx('nav-link')}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li className={cx('dropdown-item')}>
                                        <Link to={'/login'} className={cx('nav-link')}>
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>

                        {/* nav mobile */}
                        <div className={cx('nav_overlay', 'd-md-none')} onClick={handleHiddenNavMobile}></div>
                        <button className={cx('btn', 'btn-bar', 'd-md-none')} onClick={handleShowNavMobile}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <ul
                            className={cx('nav-mobile', 'shadow-lg', 'd-md-none')}
                            style={{ right: toggleMenuMobile ? '0' : '-100%' }}
                        >
                            <li className={cx('nav-mobile-item')}>
                                <button className={cx('btn')} onClick={handleHiddenNavMobile}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </li>

                            <li className={cx('nav-mobile-item')}>
                                <Link className={cx('nav-mobile-link')}>
                                    <img src="/logo192.png" alt="Avatar" className={cx('avatar', '')} />
                                    <span>Đàm Văn Hòa</span>
                                </Link>
                            </li>

                            <li className={cx('nav-mobile-item', 'active-mobile')}>
                                <Link to={'/blogs'} className={cx('nav-mobile-link')}>
                                    <i>
                                        <FontAwesomeIcon icon={faBook} size="xs" />
                                    </i>{' '}
                                    Blogs
                                </Link>
                            </li>
                            <li className={cx('nav-mobile-item')}>
                                <Link to={''} className={cx('nav-mobile-link')}>
                                    <i>
                                        <FontAwesomeIcon icon={faBed} size="2xs" />
                                    </i>{' '}
                                    Room
                                </Link>
                            </li>
                            <li className={cx('nav-mobile-item')}>
                                <Link to={''} className={cx('nav-mobile-link')}>
                                    About
                                </Link>
                            </li>
                            {/* <li className={cx("nav-mobile-item")}>
                                <Link to={""} className={cx("nav-mobile-link")}>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRightToBracket} size="xs" />
                                    </i>{" "}
                                    Login
                                </Link>
                            </li> */}
                            <li className={cx('nav-mobile-item')}>
                                <Link to={''} className={cx('nav-mobile-link')}>
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRightToBracket} rotation={180} size="xs" />
                                    </i>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
