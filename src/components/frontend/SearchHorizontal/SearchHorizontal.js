import classNames from 'classnames/bind';
import styles from './SearchHorizontal.module.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css//
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function SearchHorizontal() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    return (
        <>
            <div className={cx('search-box', 'container')}>
                <form className={cx('form-search')}>
                    <select className={cx('select-list')}>
                        <option>Q.Hải Châu, Tp. Đà Nẵng </option>
                        <option>Hello </option>
                        <option>Hello </option>
                        <option>Hello </option>
                    </select>
                    <div className={cx('date-box')}>
                        <i className={cx('date-icon')}>
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </i>
                        <DatePicker
                            wrapperClassName={cx('custom-datepicker-wrapper')}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="dd/MM/yyyy"
                            monthsShown={2}
                            className={cx('date-input')}
                            placeholderText="Checkin"
                        />
                        <i>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </i>

                        <DatePicker
                            wrapperClassName={cx('custom-datepicker-wrapper')}
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="dd/MM/yyyy"
                            monthsShown={2}
                            className={cx('date-input')}
                            placeholderText="Checkout"
                        />
                    </div>
                    <select className={cx('select-list')}>
                        <option>2 Người</option>
                    </select>

                    <button className={cx('search-btn')}>
                        <Link to={''}>Search</Link>
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchHorizontal;
