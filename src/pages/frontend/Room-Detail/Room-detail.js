import classNames from 'classnames/bind';
import styles from './RoomDetail.module.css';
import { Link } from 'react-router-dom';
import Slider from '~/components/frontend/Slider/Slider';
import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import { faArrowRight, faCalendarDays, faShower, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function RoomDetail() {
    const [ratings, setRatings] = useState(0);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    function changeRating(newRating, name) {
        setRatings(newRating);
        //code...
    }

    return (
        <>
            <section className={cx('main-roomDetail')}>
                <div className="container">
                    <div>
                        <p className={cx('title-room')}>Our Rooms</p>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <img
                                className={cx('img-roomDetail')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQZ8lMgu0sZq4bhu0NHzXB9foX2ZZ6cBzrw&usqp=CAU"
                            ></img>
                            <div>
                                <div>
                                    <StarRatings
                                        rating={ratings}
                                        starRatedColor="blue"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        name="rating"
                                        starDimension="20px"
                                    />
                                    <p>Super Delux Room</p>
                                </div>
                                <div>
                                    <div className={cx('list-icon')}>
                                        <i className={cx('icon')}>
                                            <FontAwesomeIcon icon={faTv} />
                                            <p>Swing</p>
                                        </i>
                                        <i className={cx('icon')}>
                                            <FontAwesomeIcon icon={faWifi} />
                                            <p>Swing</p>
                                        </i>
                                        <i className={cx('icon')}>
                                            <FontAwesomeIcon icon={faShower} />
                                            <p>Swing</p>
                                        </i>
                                    </div>
                                </div>
                                <div>
                                    <p>Description</p>
                                    <p>
                                        Aliquam euismod at potenti velit risus erat nulla blandit leo. Sagittis cubil of
                                        the rhoncus sociosqu Taciti gravida augur Vestibulum au augue duis rhoncus
                                        sociosqu cubil of the rhoncus sociosqu taciti gravidaduis rhoncuQuam nec erat a
                                        volutpat eleifend nibh Bibendum malesuada ridiculus dapibus vel duis rhoncus
                                        socio Sollicitudin cubil of the rhoncus sociosqu Taciti gravidictudonec vivamus
                                        potenti cursus rhoncus sociosqu cubil of the rhoncus sociosqu Aliquam euismod at
                                        potenti velit risus erat nulla blandit leo. Sagittis cubil of the rhoncus
                                        sociosqu Taciti gravida augue rhoncus cubile Vestibulum Eu augue augue duis
                                        rhoncus sociosqu cubil of the rhoncus sociosqu Taciti gravidaduis rhoncuQuam nec
                                        erat a volroutpat eleifend nibh Bibendum malesuada ridiculus Dapibus vel duis
                                        rhoncus socio Sollicitudin cubil of the rhoncus sociosqu Taciti gravidictudonec
                                        vivamus potenti cursus
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <div className="mb-3">
                                    {/* <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                    /> */}

                                    <div className="time-input">
                                        <div>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="form-control"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="exampleFormControlInput1" className="form-label">
                                                People
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="name@example.com"
                                            />
                                        </div>
                                        <div>
                                            <button>Booking Now</button>
                                        </div>
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

export default RoomDetail;
