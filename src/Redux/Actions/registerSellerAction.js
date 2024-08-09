import axios from 'axios';
import { CLEAR_ERRORS, REGISTER_SELLER_FAIL, REGISTER_SELLER_REQUEST, REGISTER_SELLER_SUCCESS } from '../Constants/registerSellerConstants';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerSeller = (formData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_SELLER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const link = `${API_BASE_URL}/api/v1/register-seller`;
    const { data } = await axios.post(link, formData, config);

    dispatch({
      type: REGISTER_SELLER_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_SELLER_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };