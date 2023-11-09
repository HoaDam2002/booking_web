import SearchHorizontal from '~/components/frontend/SearchHorizontal/SearchHorizontal';

function Slider() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide position-relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item " data-bs-interval="4000">
                        <img
                            src="/image/slider/hoboi_slider.jpg"
                            className="d-block w-100"
                            style={{ maxHeight: '450px', objectFit: 'cover' }}
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img
                            src="/image/slider/khachsan_slider.jpg"
                            className="d-block w-100"
                            style={{ maxHeight: '450px', objectFit: 'cover' }}
                            alt="..."
                        />
                    </div>
                </div>
                <SearchHorizontal />
            </div>
        </>
    );
}

export default Slider;
