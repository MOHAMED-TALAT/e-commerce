// for add item to cart
export const addCart = (product)  => {
    return {
        type: 'ADDCART',
        payload: product
    }

}

// for remove item from cart
export const removeCart = (product) => {
    return {
        type: 'REMOVECART',
        payload: product
    }
}