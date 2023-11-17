import { Link } from 'react-router-dom';
import styles from './Account.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login() {
    return (
        <>
            <div className="form-floating mb-3">
                <input
                    type="email"
                    className="form-control is-invalid"
                    id="floatingInput"
                    placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className={cx('mb-3', 'form-check', 'form-check-custom')}>
                <div>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <Link to="">Quên mật khẩu</Link>
            </div>

            <button className={cx('btn', 'form-btn', 'mb-3')}>
                <Link to={'/login'}>Login</Link>
            </button>
        </>
    );
}

export default Login;
