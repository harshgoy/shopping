import "./product.css";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCreator} from "../redux/actions";

let Product = (props)=>{
    let history =useHistory();
    let dispatch = useDispatch();

    return <div className="product-card">
    <div onClick={()=>{
        history.push(`/preview/${props.data.id}`);
    }} className ="product-img">
        <img src={props.data.img} alt = ""/>
    </div>
    <div className ="product-btn">
        <button onClick={()=>{
            dispatch(addCreator(props.data.id));
            alert ("Product successfully added to cart");

        }}>Add To Cart</button>
    </div>
    
    </div>
}

export default Product;