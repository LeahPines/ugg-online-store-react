import UggPic from "../assets/uggs.jpg";

const About = () => {

    return (
        <div className="about-page">
            <section className="ugg-section">
                <div className="ugg-content">
                    <img
                        src={UggPic}
                        alt="UGG Store"
                        className="ugg-image"
                    />
                    <div className="ugg-text">
                        <h1>Welcome to UGG</h1>
                        <p>
                            At UGGS, we believe in blending comfort, style, and sustainability.
                            Discover our fashionable collection, crafted to bring joy and luxury to your every step.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <h5>Quality and Comfort</h5>
                <p>
                    Our products are made with the finest materials to ensure good quality and comfort.
                    From cozy boots to stylish slippers, UGG is committed to keeping your feet warm and fashionable.
                </p>
            </section>

            <section className="about-section">
                <h5>Trendy Designs</h5>
                <p>
                    We focus on innovative designs that combine functionality with modern trends.
                    Whether it's a cold winter day or a casual outing, UGG has something perfect for every occasion.
                </p>
            </section>

            <section className="about-section">
                <h5>Popular</h5>
                <p>
                UGG has become a global icon, loved by millions for its blend of comfort, style, and versatility.
                Whether you're running errands or relaxing with friends, UGG's timeless appeal makes it the go-to brand for those who want to look good and feel even better.
                </p>
            </section>

            <section className="ugg-section">
                <p>
                    Join the UGG family and experience the unmatched comfort and style that have made us a global favorite.
                </p>
            </section>

            <footer>
                <p>&copy; 2025 UGGS. All rights reserved to Hadas and Leah.</p>
            </footer>
        </div>
    );
};

export default About;
