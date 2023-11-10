import classNames from 'classnames/bind';
import styles from './Room.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShower, faTable, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchHorizontal from '~/components/frontend/SearchHorizontal/SearchHorizontal';
import Slider from '~/components/frontend/Slider/Slider';

const cx = classNames.bind(styles);

function Room() {
    return (
        <>
            {/* <SearchHorizontal></SearchHorizontal> */}
            {/* <section className={cx('slider')}>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://haianhland.com/wp-content/uploads/2019/10/hotel-l%C3%A0-g%C3%AC.jpg"
                                className="d-block w-100"
                                alt="..."
                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <Slider></Slider>

            <section className={cx('main-room')}>
                <div className="container">
                    <div>
                        <p className={cx('title-room')}>Our Rooms</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div className="shadow" style={{ paddingBottom: '10px' }}>
                                <img
                                    className={cx('img-room')}
                                    src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_PDLK_02.jpg"
                                />
                                <div className={cx('infor-rooms')}>
                                    <div className={cx('status-room')}>
                                        <span className={cx('name-room')}>Vip Room</span>
                                        <span className={cx('status')}>Available: Yes</span>
                                    </div>
                                    <p className={cx('price-room')}>Price: $19</p>
                                    <div className={cx('bottom-rooms')}>
                                        <div className={cx('list-icon')}>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faTv} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faWifi} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faShower} />
                                            </i>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            to={'#'}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div className="shadow" style={{ paddingBottom: '10px' }}>
                                <img
                                    className={cx('img-room')}
                                    src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_PDLK_02.jpg"
                                />
                                <div className={cx('infor-rooms')}>
                                    <div className={cx('status-room')}>
                                        <span className={cx('name-room')}>Vip Room</span>
                                        <span className={cx('status')}>Available: Yes</span>
                                    </div>
                                    <p className={cx('price-room')}>Price: $19</p>
                                    <div className={cx('bottom-rooms')}>
                                        <div className={cx('list-icon')}>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faTv} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faWifi} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faShower} />
                                            </i>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            to={'#'}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div className="shadow" style={{ paddingBottom: '10px' }}>
                                <img
                                    className={cx('img-room')}
                                    src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_PDLK_02.jpg"
                                />
                                <div className={cx('infor-rooms')}>
                                    <div className={cx('status-room')}>
                                        <span className={cx('name-room')}>Vip Room</span>
                                        <span className={cx('status')}>Available: Yes</span>
                                    </div>
                                    <p className={cx('price-room')}>Price: $19</p>
                                    <div className={cx('bottom-rooms')}>
                                        <div className={cx('list-icon')}>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faTv} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faWifi} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faShower} />
                                            </i>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            to={'#'}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div className="shadow" style={{ paddingBottom: '10px' }}>
                                <img
                                    className={cx('img-room')}
                                    src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_PDLK_02.jpg"
                                />
                                <div className={cx('infor-rooms')}>
                                    <div className={cx('status-room')}>
                                        <span className={cx('name-room')}>Vip Room</span>
                                        <span className={cx('status')}>Available: Yes</span>
                                    </div>
                                    <p className={cx('price-room')}>Price: $19</p>
                                    <div className={cx('bottom-rooms')}>
                                        <div className={cx('list-icon')}>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faTv} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faWifi} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faShower} />
                                            </i>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            to={'#'}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div className="shadow" style={{ paddingBottom: '10px' }}>
                                <img
                                    className={cx('img-room')}
                                    src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_PDLK_02.jpg"
                                />
                                <div className={cx('infor-rooms')}>
                                    <div className={cx('status-room')}>
                                        <span className={cx('name-room')}>Vip Room</span>
                                        <span className={cx('status')}>Available: Yes</span>
                                    </div>
                                    <p className={cx('price-room')}>Price: $19</p>
                                    <div className={cx('bottom-rooms')}>
                                        <div className={cx('list-icon')}>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faTv} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faWifi} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faShower} />
                                            </i>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            to={'#'}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 " style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div className="shadow" style={{ paddingBottom: '10px' }}>
                                <img
                                    className={cx('img-room')}
                                    src="https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_PDLK_02.jpg"
                                />
                                <div className={cx('infor-rooms')}>
                                    <div className={cx('status-room')}>
                                        <span className={cx('name-room')}>Vip Room</span>
                                        <span className={cx('status')}>Available: Yes</span>
                                    </div>
                                    <p className={cx('price-room')}>Price: $19</p>
                                    <div className={cx('bottom-rooms')}>
                                        <div className={cx('list-icon')}>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faTv} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faWifi} />
                                            </i>
                                            <i className={cx('icon')}>
                                                <FontAwesomeIcon icon={faShower} />
                                            </i>
                                        </div>
                                        <Link
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            to={'#'}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Room;
