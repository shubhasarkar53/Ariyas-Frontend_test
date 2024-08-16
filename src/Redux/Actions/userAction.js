import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_PASSWORD_REQUEST,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  CLEAR_POPUP_MESSAGE,
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  USER_VERIFY_FAIL,
  USER_VERIFY_WRONG_ATTEMP,
} from "../Constants/userConstant";

import axios from "axios";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// User Login
export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(`${API_BASE_URL}/api/v1/login`, { email, password }, config);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Register User
export const userRegister = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = {
      headers: { "Content-type": "application/json" },
      withCredentials: true,
    };
    const { data } = await axios.post(`${API_BASE_URL}/api/v1/register/new`, userData, config);
    dispatch({ type: REGISTER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Verify Email
export const verifyEmail = (userId, otp) => async (dispatch) => {
  try {
    dispatch({ type: USER_VERIFY_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`${API_BASE_URL}/api/v1/verify-email`, { userId, otp }, config);
    dispatch({ type: USER_VERIFY_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: USER_VERIFY_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const { data } = await axios.get(`${API_BASE_URL}/api/v1/me`, { withCredentials: true });
    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Logout User
export const logOut = () => async (dispatch) => {
  try {
    await axios.get(`${API_BASE_URL}/api/v1/logout`, { withCredentials: true });
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Clear Errors
export const clearError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// Clear Popup Message
export const clearPopupMessage = () => (dispatch) => {
  dispatch({ type: CLEAR_POPUP_MESSAGE });
};

// Update User Profile
export const updateUserProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true, // Include this if authentication is needed
    };
    
    const { data } = await axios.put(`${API_BASE_URL}/api/v1/me/update/profile`, userData, config);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Update User Password
export const updateUserPassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_PASSWORD_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // Include this if authentication is needed
    };

    const { data } = await axios.put(`${API_BASE_URL}/api/v1/password/update`, userData, config);
    dispatch({ type: UPDATE_USER_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Forgot Password
export const forgotPasswordAction = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`${API_BASE_URL}/api/v1/password/forgot`, { email }, config);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};

// Reset Password
export const resetPasswordAction = (resetToken, passwords) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // Include this if authentication is needed
    };
    const { data } = await axios.put(`${API_BASE_URL}/api/v1/password/reset/${resetToken}`, passwords, config);
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};






// =========================================

//Login User action
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // User Login
// export const userLogin = (email, password) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGIN_REQUEST });
//     const config = {
//       headers: { "Content-type": "application/json" },
//       withCredentials: true,
//     };
//     const { data } = await axios.post(
//       `${API_BASE_URL}/api/v1/login`,
//       { email, password },
//       config
//     );
//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// // Register User
// export const userRegister = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: REGISTER_REQUEST });
//     const config = {
//       headers: { "Content-type": "application/json" },
//       withCredentials: true,
//     };
//     const { data } = await axios.post(
//       `${API_BASE_URL}/api/v1/register/new`,
//       userData,
//       config
//     );
//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: REGISTER_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// // Verify Email
// export const verifyEmail = (userId, otp) => async (dispatch) => {
//   try {
//     dispatch({ type: USER_VERIFY_REQUEST });
//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };
//     const { data } = await axios.post(
//       `${API_BASE_URL}/api/v1/verify-email`,
//       { userId, otp },
//       config
//     );
//     dispatch({ type: USER_VERIFY_SUCCESS, payload: data.user });
//   } catch (error) {
//     dispatch({
//       type: USER_VERIFY_FAIL,
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// // Load User
// export const loadUser = () => async (dispatch) => {
//   try {
//     dispatch({ type: LOAD_USER_REQUEST });
//     const { data } = await axios.get(`${API_BASE_URL}/api/v1/me`, {
//       withCredentials: true,
//     });
//     dispatch({
//       type: LOAD_USER_SUCCESS,
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: LOAD_USER_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };



// export const logOut = () => async (dispatch) => {
//   try {
//     await axios.get(`${API_BASE_URL}/api/v1/logout`, {
//       withCredentials: true,
//     });
//     dispatch({ type: LOGOUT_SUCCESS });
//   } catch (error) {
//     dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
//   }
// };



// // Clear Errors
// export const clearError = () => async (dispatch) => {
//   dispatch({ type: CLEAR_ERRORS });
// };

// // Clear Popup Message
// export const clearPopupMessage = () => async (dispatch) => {
//   dispatch({ type: CLEAR_POPUP_MESSAGE });
// };

// // Update User Profile
// export const updateUserProfile = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_USER_REQUEST });
//     const config = { headers: { "Content-Type": "multipart/form-data" } };
//     const { data } = await axios.put(
//       `${API_BASE_URL}/api/v1/me/update/profile`,
//       userData,
//       config
//     );
//     dispatch({
//       type: UPDATE_USER_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_USER_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// // Update User Password
// export const updateUserPassword = (userData) => async (dispatch) => {
//   try {
//     dispatch({ type: UPDATE_USER_PASSWORD_REQUEST });
//     const config = { headers: { "Content-Type": "application/json" } };
//     const { data } = await axios.put(
//       `${API_BASE_URL}/api/v1/password/update`,
//       userData,
//       config
//     );
//     dispatch({
//       type: UPDATE_USER_PASSWORD_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_USER_PASSWORD_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// // Forgot Password
// export const forgotPasswordAction = (email) => async (dispatch) => {
//   try {
//     dispatch({ type: FORGOT_PASSWORD_REQUEST });
//     const config = {
//       headers: { 'Content-Type': 'application/json' }
//     };
//     const { data } = await axios.post(
//       `${API_BASE_URL}/api/v1/password/forgot`,
//       { email },
//       config
//     );
//     dispatch({
//       type: FORGOT_PASSWORD_SUCCESS,
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: FORGOT_PASSWORD_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// // Reset Password
// export const resetPasswordAction = (resetToken, passwords) => async (dispatch) => {
//   try {
//     dispatch({ type: RESET_PASSWORD_REQUEST });
//     const config = { headers: { "Content-Type": "application/json" } };
//     const { data } = await axios.put(
//       `${API_BASE_URL}/api/v1/password/reset/${resetToken}`,
//       passwords,
//       config
//     );
//     dispatch({
//       type: RESET_PASSWORD_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: RESET_PASSWORD_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };
