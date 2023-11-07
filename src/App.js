import Header from './components/frontend/Header/Header';

function App(props) {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}

export default App;
