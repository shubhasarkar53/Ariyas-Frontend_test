/* eslint-disable no-unused-vars */
import axios from "axios";

import {
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    ALL_BLOG_FAIL,
    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,
    CLEAR_ERRORS,
    LOAD_CREATED_BLOG_REQUEST,
    LOAD_CREATED_BLOG_SUCCESS,
    LOAD_CREATED_BLOG_FAIL,
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    CREATE_BLOG_RESET,
    EDIT_BLOG_REQUEST,
    EDIT_BLOG_SUCCESS,
    EDIT_BLOG_FAIL,
    EDIT_BLOG_RESET,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    DELETE_BLOG_RESET,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET

} from "../Constants/blogConstants";



// Base URL for the API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Action to get all blogs
export const getBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_BLOG_REQUEST });

    const link = `${API_BASE_URL}/api/v1/blogs`;
    const { data } = await axios.get(link, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Include credentials
    });

    dispatch({
      type: ALL_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BLOG_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Action to get blog details
export const getBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: BLOG_DETAILS_REQUEST });

    const link = `${API_BASE_URL}/api/v1/blog/${id}`;
    const { data } = await axios.get(link, {
      withCredentials: true, // Include credentials
    });

    dispatch({
      type: BLOG_DETAILS_SUCCESS,
      payload: data.blog,
    });
  } catch (error) {
    dispatch({
      type: BLOG_DETAILS_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Action to create a new blog
export const createBlog = (blogData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true, // Include credentials
    };

    const link = `${API_BASE_URL}/api/v1/blog/new`;
    const { data } = await axios.post(link, blogData, config);

    dispatch({
      type: CREATE_BLOG_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BLOG_FAIL,
      payload: error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

// Action to edit a blog
export const editCreatedBlog = (blogId, updateBlogData) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_BLOG_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true, // Include credentials
    };

    const link = `${API_BASE_URL}/api/v1/blog/${blogId}`;
    const { data } = await axios.put(link, updateBlogData, config);

    dispatch({
      type: EDIT_BLOG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: EDIT_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Action to delete a blog
export const deleteCreatedBlog = (blogId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });

    const config = {
      withCredentials: true, // Include credentials
    };

    const link = `${API_BASE_URL}/api/v1/blog/${blogId}`;
    const { data } = await axios.delete(link, config);

    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Action to load blogs created by the user
export const getYourBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_CREATED_BLOG_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true, // Include credentials
    };

    const link = `${API_BASE_URL}/api/v1/blogs/me`;
    const { data } = await axios.get(link, config);

    dispatch({
      type: LOAD_CREATED_BLOG_SUCCESS,
      payload: data.sellerAllBlogs, // Also works for admin
    });
  } catch (error) {
    dispatch({
      type: LOAD_CREATED_BLOG_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Action to clear errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};






// //action to get all blogs
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const getBlogs = () => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_BLOG_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/blogs`;
//     const { data } = await axios.get(link, {
//       headers: {
//         "Content-type": "application/json",
//       },
//       withCredentials: true,
//     });

//     dispatch({
//       type: ALL_BLOG_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_BLOG_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const getBlogDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: BLOG_DETAILS_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/blog/${id}`;
//     const { data } = await axios.get(link);

//     dispatch({
//       type: BLOG_DETAILS_SUCCESS,
//       payload: data.blog,
//     });
//   } catch (error) {
//     dispatch({
//       type: BLOG_DETAILS_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const createBlog = (blogData) => async (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   };

//   try {
//     dispatch({ type: CREATE_BLOG_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/blog/new`;
//     const { data } = await axios.post(link, blogData, config);

//     dispatch({
//       type: CREATE_BLOG_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: CREATE_BLOG_FAIL,
//       payload: error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//   }
// };

// export const editCreatedBlog = (blogId, updateBlogData) => async (dispatch) => {
//   dispatch({ type: EDIT_BLOG_REQUEST });

//   const config = {
//     headers: { "Content-Type": "multipart/form-data" },
//     withCredentials: true,
//   };

//   try {
//     const link = `${API_BASE_URL}/api/v1/blog/${blogId}`;
//     const { data } = await axios.put(link, updateBlogData, config);

//     dispatch({
//       type: EDIT_BLOG_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: EDIT_BLOG_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// export const deleteCreatedBlog = (blogId) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_BLOG_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/blog/${blogId}`;
//     const { data } = await axios.delete(link);

//     dispatch({
//       type: DELETE_BLOG_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_BLOG_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// export const getYourBlogs = () => async (dispatch) => {
//   try {
//     dispatch({ type: LOAD_CREATED_BLOG_REQUEST });

//     const link = `${API_BASE_URL}/api/v1/blogs/me`;
//     const { data } = await axios.get(link, {
//       headers: {
//         "Content-type": "application/json",
//       },
//       withCredentials: true,
//     });

//     dispatch({
//       type: LOAD_CREATED_BLOG_SUCCESS,
//       payload: data.sellerAllBlogs, //ALSO WORKS FOR ADMIN
//     });
//   } catch (error) {
//     dispatch({
//       type: LOAD_CREATED_BLOG_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };


// export const clearError = () => async (dispatch) => {
//     dispatch({ type: CLEAR_ERRORS });
// };
