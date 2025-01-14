import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import loadingIcon from "../../assets/Running heart.gif";
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../../redux/thunk";

const AllProducts = () => {

    const { productsList, loading } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [dispatch]);

    return (
        <div className="container mt-4">
            {loading && <img src={loadingIcon} alt="Loading" width="100px" height="100px" />}
            {productsList.length === 0 ?
                (<p className="text-center">No products available</p>) :
                (<div className="row">
                    {productsList.map(product => (
                        <div className="col-md-4 mb-4">
                            <div className="h-100 d-flex align-items-stretch">
                                <Product
                                    key={product.id}
                                    item={product} />
                            </div>
                        </div>
                    ))}
                </div>
                )}
        </div>
    );
};

export default AllProducts;
