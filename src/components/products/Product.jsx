import { useDispatch } from "react-redux";
import { AddToCart } from "../../redux/CartSlice";

const Product = ({ item }) => {
    
    const dispatch = useDispatch();

    return (
        <div className="card text-center" style={{ width: "100%", margin: "0 auto" }}>
            <div className="image-container">
                <img
                    src={item.image}
                    className="card-img-top img-fluid fixed-image"
                    alt={item.title}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <button
                    className="btn btn-dark"
                    onClick={() => dispatch(AddToCart(item))}
                >Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;