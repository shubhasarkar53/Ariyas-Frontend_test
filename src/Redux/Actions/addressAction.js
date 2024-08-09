import axios from "axios";
import {
    ADDRESS_DELETE_FAIL,
    ADDRESS_DELETE_REQUEST,
  ADDRESS_DELETE_SUCCESS,
  EDIT_ADDRESS_FAIL,
  EDIT_ADDRESS_REQUEST,
  EDIT_ADDRESS_SUCCESS,
  LOAD_ADDRESS_FAIL,
  LOAD_ADDRESS_REQUEST,
  LOAD_ADDRESS_SUCCESS,
  NEW_ADDRESS_FAIL,
  NEW_ADDRESS_REQUEST,
  NEW_ADDRESS_SUCCESS,
} from "../Constants/addressConstants";

// ADD NEW ADDRESS
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const addNewAddress = (addressData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ADDRESS_REQUEST });

    const config = {
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    };

    const link = `${API_BASE_URL}/api/v1/new/address`;
    const { data } = await axios.post(link, addressData, config);

    dispatch({ type: NEW_ADDRESS_SUCCESS, payload: data.saveAddress });
  } catch (error) {
    dispatch({ type: NEW_ADDRESS_FAIL, payload: error.response.data.message });
  }
};

// DELETE ADDRESS
export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    dispatch({ type: ADDRESS_DELETE_REQUEST });

    const link = `${API_BASE_URL}/api/v1/address/delete/${addressId}`;
    const { data } = await axios.delete(link);

    dispatch({
      type: ADDRESS_DELETE_SUCCESS,
      payload: addressId,
    });
  } catch (error) {
    dispatch({
      type: ADDRESS_DELETE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// EDIT ADDRESS
export const editAddress = (addressId, updatedAddressData) => async (dispatch) => {
  dispatch({ type: EDIT_ADDRESS_REQUEST });

  try {
    const config = {
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    };

    const link = `${API_BASE_URL}/api/v1/address/update/${addressId}`;
    const { data } = await axios.put(link, updatedAddressData, config);

    dispatch({
      type: EDIT_ADDRESS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: EDIT_ADDRESS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOAD USER ADDRESSES
export const loadAddress = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_ADDRESS_REQUEST });

    const link = `${API_BASE_URL}/api/v1/address/me`;
    const { data } = await axios.get(link);

    dispatch({ type: LOAD_ADDRESS_SUCCESS, payload: data.userAddresses });
  } catch (error) {
    dispatch({ type: LOAD_ADDRESS_FAIL, payload: error.response.data.message });
  }
};

