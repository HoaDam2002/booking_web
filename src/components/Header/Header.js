import classNames from 'classnames/bind';
import style from './Header.module.css';

const cx = classNames.bind(style);
function Header() {
    return (
        <div className="container">
            <div className={cx('test')}>Đây là Header</div>
        </div>
    );
}

export default Header;
