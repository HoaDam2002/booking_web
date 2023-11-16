import classNames from 'classnames/bind';
import styles from './RoomDetail.module.css';
import { Link } from 'react-router-dom';
import Slider from '~/components/frontend/Slider/Slider';
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';

import { faArrowRight, faCalendarDays, faShower, faStar, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from 'react-scroll-to-top';

const cx = classNames.bind(styles);

function RoomDetail() {
    const [ratings, setRatings] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    function changeRating(newRating, name) {
        setRatings(newRating);
        //code...
    }

    const isDateDisabled = (date) => {
        const currentDate = new Date();
        return date > currentDate;
    };

    const isEndDateDisabled = (date) => {
        return date > startDate;
    };

    return (
        <>
            <section className={cx('main-roomDetail')}>
                <div className="container   ">
                    <div>
                        <p className={cx('title-room')}>Our Rooms</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className={cx('main-detail')}>
                                <img
                                    className={cx('img-roomDetail')}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQZ8lMgu0sZq4bhu0NHzXB9foX2ZZ6cBzrw&usqp=CAU"
                                ></img>
                                <div className={cx('inform-room')}>
                                    <div className={cx('rate')}>
                                        <StarRatings
                                            rating={4.5}
                                            starRatedColor="orange"
                                            changeRating={changeRating}
                                            numberOfStars={5}
                                            name="rating"
                                            starDimension="20px"
                                            // disabled={true}
                                            isSelectable={false}
                                        />
                                    </div>
                                    <p className={cx('name-room')}>Super Delux Room</p>
                                    <div className={cx('icon-service')}>
                                        <i className={cx('icon')}>
                                            <FontAwesomeIcon icon={faTv} />
                                            <p>Televition</p>
                                        </i>
                                        <i className={cx('icon')}>
                                            <FontAwesomeIcon icon={faWifi} />
                                            <p>Free WiFi</p>
                                        </i>
                                        <i className={cx('icon')}>
                                            <FontAwesomeIcon icon={faShower} />
                                            <p>Shower</p>
                                        </i>
                                    </div>
                                    <div className={cx('description')}>
                                        <p className={cx('title')}>Description</p>
                                        <p className={cx('content')}>
                                            Aliquam euismod at potenti velit risus erat nulla blandit leo. Sagittis
                                            cubil of the rhoncus sociosqu Taciti gravida augur Vestibulum au augue duis
                                            rhoncus sociosqu cubil of the rhoncus sociosqu taciti gravidaduis rhoncuQuam
                                            nec erat a volutpat eleifend nibh Bibendum malesuada ridiculus dapibus vel
                                            duis rhoncus socio Sollicitudin cubil of the rhoncus sociosqu Taciti
                                            gravidictudonec vivamus potenti cursus rhoncus sociosqu cubil of the rhoncus
                                            sociosqu Aliquam euismod at potenti velit risus erat nulla blandit leo.
                                            Sagittis cubil of the rhoncus sociosqu Taciti gravida augue rhoncus cubile
                                            Vestibulum Eu augue augue duis rhoncus sociosqu cubil of the rhoncus
                                            sociosqu Taciti gravidaduis rhoncuQuam nec erat a volroutpat eleifend nibh
                                            Bibendum malesuada ridiculus Dapibus vel duis rhoncus socio Sollicitudin
                                            cubil of the rhoncus sociosqu Taciti gravidictudonec vivamus potenti cursus
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className={cx('search')}>
                                <div className={cx('head-form')}>
                                    <span className={cx('price')}>$20/Pernight</span>
                                    <div className={cx('rating')}>
                                        <span className={cx('numberRating')}>5</span>
                                        <div className={cx('star')}>
                                            <FontAwesomeIcon icon={faStar} style={{ color: 'orange' }} />
                                        </div>

                                        <span className={cx('comments')}>- 21 Comments</span>
                                    </div>
                                </div>
                                <form className={cx('form-booking')}>
                                    <div className={cx('boder')}>
                                        <div className={cx('time-input')}>
                                            <DatePicker
                                                wrapperClassName={cx('custom-datepicker-wrapper')}
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                dateFormat="dd/MM/yyyy"
                                                monthsShown={2}
                                                placeholderText="Check In Time"
                                                className={cx('input')}
                                                filterDate={isDateDisabled}
                                            />
                                            <DatePicker
                                                wrapperClassName={cx('custom-datepicker-wrapper')}
                                                selected={endDate}
                                                onChange={(date) => setEndDate(date)}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                                dateFormat="dd/MM/yyyy"
                                                monthsShown={2}
                                                placeholderText="Check Out Time"
                                                className={cx('input')}
                                                filterDate={isEndDateDisabled}
                                            />
                                        </div>
                                        <select className={cx('input')}>
                                            <option>alo</option>
                                        </select>
                                    </div>

                                    <Link
                                        className="btn btn-primary"
                                        style={{ backgroundColor: 'rgb(6, 76, 73)', width: '100%' }}
                                        to={'#'}
                                    >
                                        Book Now
                                    </Link>
                                </form>
                                <div className={cx('inform', 'inform-price')}>
                                    <p>$20/Pernight</p>
                                    <p>$20</p>
                                </div>
                                <div className={cx('separator')}></div>
                                <div className={cx('inform', 'inform-total')}>
                                    <p>Total</p>
                                    <p>$20</p>
                                </div>
                            </div>

                            <div className={cx('recomment-room')}>
                                <div className={cx('head-rcm')}>
                                    <div className={cx('title-rcm')}>
                                        <p>Outstanding Room</p>
                                    </div>
                                    <div className={cx('separator')}></div>
                                </div>
                                <div className={'list-rcm'}>
                                    <div className={cx('item-rcm')}>
                                        <Link to={'#'}>
                                            <img
                                                className={cx('img-rcm')}
                                                src="https://www.navadahotel.com/FileStorage/Room/Thumbnail/DSC_7805-HDR.jpg"
                                            ></img>
                                        </Link>
                                        <div className={cx('informRoom-rcm')}>
                                            <Link className={cx('post-rcm')} to={'#'}>
                                                <p>Paris Night</p>{' '}
                                            </Link>
                                            <p id={cx('price-rmc')}>From $20 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className={cx('item-rcm')}>
                                        <Link to={'#'}>
                                            <img
                                                className={cx('img-rcm')}
                                                src="https://www.navadahotel.com/FileStorage/Room/Thumbnail/DSC_7805-HDR.jpg"
                                            ></img>
                                        </Link>
                                        <div className={cx('informRoom-rcm')}>
                                            <Link className={cx('post-rcm')} to={'#'}>
                                                <p>Paris Night</p>{' '}
                                            </Link>
                                            <p id={cx('price-rmc')}>From $20 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className={cx('item-rcm')}>
                                        <Link to={'#'}>
                                            <img
                                                className={cx('img-rcm')}
                                                src="https://www.navadahotel.com/FileStorage/Room/Thumbnail/DSC_7805-HDR.jpg"
                                            ></img>
                                        </Link>
                                        <div className={cx('informRoom-rcm')}>
                                            <Link className={cx('post-rcm')} to={'#'}>
                                                <p>Paris Night</p>{' '}
                                            </Link>
                                            <p id={cx('price-rmc')}>From $20 / Per Night</p>
                                        </div>
                                    </div>
                                    <div className={cx('item-rcm')}>
                                        <Link to={'#'}>
                                            <img
                                                className={cx('img-rcm')}
                                                src="https://www.navadahotel.com/FileStorage/Room/Thumbnail/DSC_7805-HDR.jpg"
                                            ></img>
                                        </Link>
                                        <div className={cx('informRoom-rcm')}>
                                            <Link className={cx('post-rcm')} to={'#'}>
                                                <p>Paris Night</p>{' '}
                                            </Link>
                                            <p id={cx('price-rmc')}>From $20 / Per Night</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollToTop smooth color="green" height="20" width="20" />
        </>
    );
}

export default RoomDetail;
