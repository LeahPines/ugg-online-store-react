import { useDispatch } from "react-redux";
import { AddToCart, RemoveFromCart, RemoveFromItem } from "../../redux/CartSlice";
import TrashIcon from "../../assets/trash.png";

const CartProduct = ({ item }) => {

    const dispatch = useDispatch();

    return (
        <tr>
            <th scope="row">
                <img src={item.image} width="100px" height="100px" />
            </th>
            <td>
                <h4>{item.title}</h4>
                <p> price: ${item.price}</p>
            </td>
            <td class="amount-box">
                <button class="amount-button" onClick={() => dispatch(AddToCart(item))}>+</button>
                <span class="amount-text">{item.amount}</span>
                <button class="amount-button" onClick={() => dispatch(RemoveFromItem(item))}>-</button>
            </td>
            <br />
            <td>${item.itemTotal}
                <br />
                <button onClick={() => dispatch(RemoveFromCart(item))}>
                    <img src={TrashIcon} alt="TrashIcon" width="25px" height="25px" />
                </button>
            </td>
        </tr>
    )
}
export default CartProduct
