export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const updateCartQuantity = (productId, newQuantity) => {
    return {
      type: 'UPDATE_QUANTITY',
      payload: {
        id: productId,
        qty: newQuantity,
      },
    };
  };