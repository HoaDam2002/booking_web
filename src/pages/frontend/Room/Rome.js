import classNames from 'classnames/bind';
import styles from './Room.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShower, faTable, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchHorizontal from '~/components/frontend/SearchHorizontal/SearchHorizontal';
import Slider from '~/components/frontend/Slider/Slider';
import Modal from 'react-modal';
import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '80%',
        height: '95%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'hidden',
        scroll: '',
    },
};

function Room() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //slider-modal
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <>
            <Slider></Slider>

            <section className={cx('main-room')}>
                <div className="container">
                    <div>
                        <p className={cx('title-room')}>Our Rooms</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div
                                className="shadow"
                                style={{ paddingBottom: '10px', borderRadius: '15px', overflow: 'hidden' }}
                            >
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
                                        <button
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            onClick={openModal}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div
                                className="shadow"
                                style={{ paddingBottom: '10px', borderRadius: '15px', overflow: 'hidden' }}
                            >
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
                                        <button
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            onClick={openModal}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div
                                className="shadow"
                                style={{ paddingBottom: '10px', borderRadius: '15px', overflow: 'hidden' }}
                            >
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
                                        <button
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            onClick={openModal}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div
                                className="shadow"
                                style={{ paddingBottom: '10px', borderRadius: '15px', overflow: 'hidden' }}
                            >
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
                                        <button
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            onClick={openModal}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div
                                className="shadow"
                                style={{ paddingBottom: '10px', borderRadius: '15px', overflow: 'hidden' }}
                            >
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
                                        <button
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            onClick={openModal}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3" style={{ marginBottom: '30px', padding: '0 10px' }}>
                            <div
                                className="shadow"
                                style={{ paddingBottom: '10px', borderRadius: '15px', overflow: 'hidden' }}
                            >
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
                                        <button
                                            className="btn btn-primary"
                                            style={{ backgroundColor: 'rgb(6, 76, 73)' }}
                                            onClick={openModal}
                                        >
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <div className={cx('row', 'main-modal')}>
                    <div className="col-12 col-lg-8">
                        <Carousel>
                            <div className={cx('item-img')}>
                                <img
                                    className={cx('img-modal')}
                                    src="https://decoxdesign.com/upload/images/cac-loai-hinh-khach-san-01-decox-design.jpg"
                                ></img>
                            </div>
                            <div className={cx('item-img')}>
                                <img
                                    className={cx('img-modal')}
                                    src="https://decoxdesign.com/upload/images/cac-loai-hinh-khach-san-01-decox-design.jpg"
                                ></img>
                            </div>
                            <div className={cx('item-img')}>
                                <img
                                    className={cx('img-modal')}
                                    src="https://decoxdesign.com/upload/images/cac-loai-hinh-khach-san-01-decox-design.jpg"
                                ></img>
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-12 col-lg-4">
                        <span className={cx('title-detail')}>Vip Room</span>
                        <div className={cx('separator')}></div>
                        <p className={cx('description-room')}>
                            Phòng dành cho 2 người. Được thiết kế sang trọng và hoàn hảo với các tiện nghi hiện đại, đáp
                            ứng mọi kỳ nghỉ thư thái của bạn trong một căn phòng khá thoải mái. Phòng này không có tầm
                            nhìn và cửa sổ
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Room;
