/* eslint-disable no-unused-vars */
import {
  SUBMIT_CONTACT_FORM_REQUEST,
  SUBMIT_CONTACT_FORM_SUCCESS,
  SUBMIT_CONTACT_FORM_FAILURE,
} from '../Constants/contactConstants.js';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Assuming you have this in your environment variables

// Action creators
export const submitContactFormRequest = () => ({
  type: SUBMIT_CONTACT_FORM_REQUEST,
});

export const submitContactFormSuccess = () => ({
  type: SUBMIT_CONTACT_FORM_SUCCESS,
});

export const submitContactFormFailure = (error) => ({
  type: SUBMIT_CONTACT_FORM_FAILURE,
  payload: error,
});

// Async action for form submission
export const submitContactForm = (formData) => async (dispatch) => {
  dispatch(submitContactFormRequest());

  try {
    // Make your actual API request here
    await axios.post(`${API_BASE_URL}/api/v1/contact`, formData, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true, // Include credentials if needed
    });

    dispatch(submitContactFormSuccess());
    // Optionally clear the form state or show a success message
    // dispatch(clearContactFormState());
  } catch (error) {
    dispatch(submitContactFormFailure(error.response?.data?.message || error.message));
  }
};

// Async action for form being cleared (if needed)
// export const clearContactForm = () => (dispatch) => {
//   dispatch(clearContactFormState());
// };











// --------------------------------------------------//

// // Action creators
// export const submitContactFormRequest = () => ({
//   type: SUBMIT_CONTACT_FORM_REQUEST,
// });

// export const submitContactFormSuccess = () => ({
//   type: SUBMIT_CONTACT_FORM_SUCCESS,
// });

// export const submitContactFormFailure = (error) => ({
//   type: SUBMIT_CONTACT_FORM_FAILURE,
//   payload: error,
// });

// // export const clearContactFormState = () => ({
// //   type: CLEAR_CONTACT_FORM_STATE,
// // });

// // Async action for form submission
// export const submitContactForm = (formData) => (dispatch) => {
//   dispatch(submitContactFormRequest());

//   setTimeout(() => {
//     try {
//       // Here you would make your actual API request
//       // If successful, dispatch success action
//       dispatch(submitContactFormSuccess());
//       // message sent, dispatch to clear the form
//       // dispatch(clearContactFormState());
//     } catch (error) {
//       // dispatch failure action, if there's an error that occurs
//       dispatch(submitContactFormFailure(error.message));
//     }
//   }, 1000);
// };

// // Async action for form being cleared
// // export const clearContactForm = () => (dispatch) => {
// //   dispatch(clearContactFormState);
// // }