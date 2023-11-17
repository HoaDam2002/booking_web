import { useLocation } from 'react-router-dom';
import Footer from './components/frontend/Footer/Footer';
import Header from './components/frontend/Header/Header';

function App(props) {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    if (isLoginPage || isRegisterPage) {
        return <>{props.children}</>;
    }
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default App;
