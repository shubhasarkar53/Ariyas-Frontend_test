import axios from "axios";

import { FETCH_INCOMING_ORDER_FAIL, FETCH_INCOMING_ORDER_REQUEST, FETCH_INCOMING_ORDER_SUCCESS, UPDATE_INCOMING_ORDER_STATUS_FAIL, UPDATE_INCOMING_ORDER_STATUS_REQUEST, UPDATE_INCOMING_ORDER_STATUS_SUCCESS } from "../Constants/incomingOrdersConstants"


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch incoming orders
export const fetchIncomingOrders = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_INCOMING_ORDER_REQUEST });

    const link = `${API_BASE_URL}/api/v1/getallorders/incoming/seller`;
    const { data } = await axios.get(link, { withCredentials: true });

    dispatch({ type: FETCH_INCOMING_ORDER_SUCCESS, payload: data.incomingOrders });
  } catch (error) {
    dispatch({
      type: FETCH_INCOMING_ORDER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Update incoming order status
export const updateIncomingOrderStatus = (orderId, newStatus, sellerId) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_INCOMING_ORDER_STATUS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // Include this if authentication is needed
    };

    const link = `${API_BASE_URL}/api/v1/update-order-status/seller/${orderId}`;
    const { data } = await axios.put(link, { sellerId, newStatus }, config);

    dispatch({ type: UPDATE_INCOMING_ORDER_STATUS_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_INCOMING_ORDER_STATUS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};







// =======================================


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const fetchIncomingOrders = () => async (dispatch) => {
//   try {
//     dispatch({ type: FETCH_INCOMING_ORDER_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/getallorders/incoming/seller`;
//     const { data } = await axios.get(link);

//     dispatch({ type: FETCH_INCOMING_ORDER_SUCCESS, payload: data.incomingOrders });
//   } catch (error) {
//     dispatch({
//       type: FETCH_INCOMING_ORDER_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const updateIncomingOrderStatus = (orderId, newStatus, sellerId) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_INCOMING_ORDER_STATUS_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const link = `${API_BASE_URL}/api/v1/update-order-status/seller/${orderId}`;
//     const { data } = await axios.put(link, { sellerId, newStatus }, config);

//     dispatch({ type: UPDATE_INCOMING_ORDER_STATUS_SUCCESS, payload: data.success });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_INCOMING_ORDER_STATUS_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };
