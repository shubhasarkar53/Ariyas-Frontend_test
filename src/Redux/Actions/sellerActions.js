import axios from "axios";

import {
  GET_REQ_SELLER_FAIL,
  GET_REQ_SELLER_REQUEST,
  GET_REQ_SELLER_SUCCESS,
  UPDATE_SELLER_ROLE_FAIL,
  UPDATE_SELLER_ROLE_REQUEST,
  UPDATE_SELLER_ROLE_SUCCESS,
} from "../Constants/sellerConstants";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllRequestedSellerAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REQ_SELLER_REQUEST });

    const link = `${API_BASE_URL}/api/v1/get-req-sellers`;
    const { data } = await axios.get(link, {
      withCredentials: true, // Include this if authentication is needed
    });

    dispatch({
      type: GET_REQ_SELLER_SUCCESS,
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: GET_REQ_SELLER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const updateSellerRole = (sellerId, newRole) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SELLER_ROLE_REQUEST });

    const link = `${API_BASE_URL}/api/v1/admin/update/role/${sellerId}`;
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // Include this if authentication is needed
    };

    const { data } = await axios.put(link, { role: newRole }, config);

    dispatch({
      type: UPDATE_SELLER_ROLE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SELLER_ROLE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

















// =================================


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const getAllRequestedSellerAction = () => async (dispatch) => {
//   try {
//     dispatch({ type: GET_REQ_SELLER_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/get-req-sellers`;
//     const { data } = await axios.get(link);

//     dispatch({
//       type: GET_REQ_SELLER_SUCCESS,
//       payload: data.sellers,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_REQ_SELLER_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const updateSellerRole = (sellerId, newRole) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_SELLER_ROLE_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/admin/update/role/${sellerId}`;
//     const { data } = await axios.put(link, {
//       role: newRole,
//     });

//     dispatch({ type: UPDATE_SELLER_ROLE_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_SELLER_ROLE_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

