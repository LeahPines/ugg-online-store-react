import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const AllCartProducts = () => {

  const { productsCartList } = useSelector((state) => state.cart);

  return (
    <div>
      <h2 class="shoping-cart-title">Shopping Cart ({productsCartList.length} items)</h2>
      {productsCartList.length === 0 ? (<p>Your cart is empty</p>) :
        (<table class="table">
          <tbody>
            {productsCartList.map(product => (
              <CartProduct
                key={product.id}
                item={product}
              />
            ))}
          </tbody>
        </table>
        )}
    </div>
  );
};
export default AllCartProducts;

