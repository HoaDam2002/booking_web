import Footer from './components/frontend/Footer/Footer';
import Header from './components/frontend/Header/Header';

function App(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
}

export default App;
