import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import "./preview.css";
import {useDispatch} from "react-redux";
import {addCreator} from "../redux/actions";




let Preview  = ()=>{
    let history =useHistory();
    let dispatch = useDispatch();
    let {id} = useParams();
    let state = useSelector(state=>state);
    let reObject = state[id];
    return <>
        <div className="preview-container">
            <div className="preview-img-container">
            <img src={reObject.img}/>

            </div>
            <div className="preview-listing">
            <h2>{reObject.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi enim, tenetur quod asperiores optio aperiam repellendus illum nisi voluptatibus, at doloremque temporibus voluptatum eius ipsa reiciendis! Porro voluptatem, libero non reprehenderit laboriosam itaque quam sunt id saepe dignissimos accusantium consequuntur animi nesciunt possimus quo esse asperiores voluptate omnis ad? Dolor?</p>
            <button onClick={()=>{
                dispatch(addCreator(reObject.id))
                alert ("Product successfully added to cart");
            }}> Add to Cart</button>

            <button className = "goto-cart" onClick={()=>{
                history.push("/cart");
                
            }}> Go to Cart</button>


            </div>
        </div>
    </>;
}

export default Preview;