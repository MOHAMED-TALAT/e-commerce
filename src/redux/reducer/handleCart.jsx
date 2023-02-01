import Product from './../../Component/Product/Product';
const cart = []
const handleCart = (state = cart, action) => {
    const prduct = action.payload
    switch (action.type) {
        case "ADDCART":
            // check if product already exist in cart
            const exist = state.find((x) => x.id === prduct.id)
            if (exist) {
                // increase qty 
                return state.map((x) => x.id === prduct.id ? { ...x, qty: x.qty + 1 } : x)
            }
            else{
                const Product = action.payload
                return [...state, { ...Product, qty: 1 }]
            }
            break;

        case "REMOVECART":
            const exist1 =  state.find((x) => x.id !== prduct.id)
            if(exist1.qty === 1){
                return state.filter((x) => x.id !== exist1.id)
            }
            else{
                return state.map((x) => x.id === prduct.id ? { ...x, qty: x.qty - 1 } : x)   
            }
            break;
            
        default:
            return state
            break;
    }
}
export default handleCart