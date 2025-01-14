import UggPic from "../assets/uggs.jpg";

const HomePage = () => {
    return (
        <div className="homepage-container">
            <section className="ugg-section">
                <div className="ugg-content">
                    <img
                        src={UggPic}
                        alt="UGG Store"
                        className="ugg-image"
                    />
                    <div className="ugg-text">
                        <h1>Welcome to UGGS</h1>
                        <p>Discover the coziest and trendiest footwear for all seasons.
                        <br/>
                         Shop now and step into comfort.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

