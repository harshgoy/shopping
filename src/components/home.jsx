import Product from "./product";
import "./home.css";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

let Home = ()=>{
    let state = useSelector(state=>state);
    let history = useHistory();
    return <>

        <div className="product-container">
            {
                state.map((el , index)=> <Product key ={index} data={el}/>)
            }
        </div>
        <button className="shopping-cart-home" onClick={()=>{
            history.push("/cart")
            }}
            >
        <span class="material-icons-outlined">
        shopping_cart
        </span>
        </button>
    </>;

}

export default Home;