import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import {removeCreator} from "../redux/actions";


let Cart = ()=>{
  let dispatch = useDispatch();


  let state = useSelector((state)=>state);
  let filteredArray  = state.filter((el)=>el.qty>0);
  let total = 0;

    return <>

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Amount</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
    filteredArray.map((el , index)=>{
      let amount = el.qty*el.price;
      total+=amount;
      return(
        <tr>
        <td>{index+1}</td>
        <td><img className="cart-img" src={el.img} /></td>
        <td>{el.name}</td>
        <td> ₹ {el.price}</td>
        <td>{el.qty}</td>
        <td> ₹ {el.qty * el.price}</td>
        <td><button onClick ={()=>{
          dispatch(removeCreator(el.id))
        }}className="remove-cart-btn"><span class="material-icons-outlined">delete_outline</span></button></td>
        </tr>
      );

    })}
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>Total</td>
      <td>₹ {total}</td>
    </tr>
  
    
  </tbody>
</table>
    </>;
}
export default Cart;
