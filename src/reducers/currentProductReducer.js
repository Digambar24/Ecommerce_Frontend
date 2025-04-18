import React from 'react';

let parsedProduct = null;
let storedProduct = localStorage.getItem('currentProduct');

if (storedProduct && storedProduct !== undefined) {
  parsedProduct = JSON.parse(storedProduct);
}

let initialState = {
  product: parsedProduct,
};

const currentProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      localStorage.setItem('currentProduct', JSON.stringify(action.payload));
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default currentProductReducer;
