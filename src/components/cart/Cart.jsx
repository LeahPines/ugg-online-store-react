import AllCartProducts from "./AllCartProducts";
import CartSummary from "./CartSummary";

const Cart = () => {
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <AllCartProducts />
        </div>
        <div className="col-md-4">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
