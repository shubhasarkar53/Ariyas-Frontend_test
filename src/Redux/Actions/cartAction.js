/* eslint-disable no-unused-vars */
import { ADD_TO_CART, REMOVE_CART_ITEM, SAVE_SHIPPING_INFO, CLEAR_CART } from '../Constants/cartConstants';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Add to cart 
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const link = `${API_BASE_URL}/api/v1/product/${id}`;
  const { data } = await axios.get(link, {
    withCredentials: true, // Include credentials to ensure user remains authenticated
  });

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.image[0].url,
      stock: data.product.stock,
      quantity,
      seller: data.product.user,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Remove from cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem('shippingInfo', JSON.stringify(data));
};

// Clear cart
export const clearCart = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });

  localStorage.removeItem('cartItems');
};










// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // Add to cart 
// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
//   const link = `${API_BASE_URL}/api/v1/product/${id}`;
//   const { data } = await axios.get(link);

//   dispatch({
//     type: ADD_TO_CART,
//     payload: {
//       product: data.product._id,
//       name: data.product.name,
//       price: data.product.price,
//       image: data.product.image[0].url,
//       stock: data.product.stock,
//       quantity,
//       seller: data.product.user,
//     },
//   });

//   localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// };


// //Remove from cart
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//     dispatch({
//         type: REMOVE_CART_ITEM,
//         payload: id,
//     });
//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// }


// //Save shipping info
// export const saveShippingInfo = (data) => async (dispatch) => {
//     dispatch({
//         type: SAVE_SHIPPING_INFO,
//         payload: data,
//     });
//     localStorage.setItem('shippingInfo', JSON.stringify(data));
// }


// //Clear cart
// export const clearCart = () => async (dispatch) => {
//     dispatch({
//         type: CLEAR_CART,
//     });
//     localStorage.removeItem('cartItems');
// }