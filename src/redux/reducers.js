import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

let initialState = [
    {
        id:0,
        name:"Samsung S7 edge",
        img:"https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png",
        price:10000,
        qty:0,

    },

    {
        id:1,
        name:"Kia Seltos",
        img:"https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw5k4g1uhh132/exterior/a6r/08-m.png",
        price:1000000,
        qty:0,

    },

    {
        id:2,
        name:"Sony Playstation 5",
        img:"https://www.cnet.com/a/img/q5n6cc9aDYNgLhrm3uwdvDrx5tY=/940x0/2020/06/11/b2c2c445-a606-4f87-a4a3-8fb4f1a5aff3/ps5-render-cropped.jpg",
        price:40000,
        qty:0,

    },
]

let reducer = (state = initialState,action)=>{
    let cp =[];
    let id=-1;

    switch(action.type){

        case ADD_TO_CART:
             cp = state.map((el)=>el);
             id = action.payload;
            cp[id].qty = cp[id].qty + 1;
            return cp;
        
        case REMOVE_FROM_CART:
             cp = state.map((el)=>el);
             id = action.payload;
            if(cp[id].qty>0) cp[id].qty = cp[id].qty - 1;
            return cp;


        default:
            return state;
    }

}

export default reducer;