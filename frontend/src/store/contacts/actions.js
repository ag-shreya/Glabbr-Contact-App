import {
    GET_ITEMS,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAIL,
    // GET_POST_DETAILS,
    // GET_POST_DETAILS_SUCCESS,
    // GET_POST_DETAILS_FAIL,
  } from "./actionTypes";
  
  export const getItems = () => {
    return {
      type: GET_ITEMS,
    };
  };
  
  export const getItemsSuccess = (posts) => {
    return {
      type: GET_ITEM_SUCCESS,
      payload: posts,
    };
  };
  
  export const getItemsFail = (error) => {
    return {
      type: GET_ITEM_FAIL,
      payload: error,
    };
  };
  
  // export const getPostDetails = (id) => {
  //   return {
  //     type: GET_POST_DETAILS,
  //     payload: id,
  //   };
  // };
  
  // export const getPostDetailsSuccess = (post) => {
  //   return {
  //     type: GET_POST_DETAILS_SUCCESS,
  //     payload: post,
  //   };
  // };
  
  // export const getPostDetailsFail = (error) => {
  //   return {
  //     type: GET_POST_DETAILS_FAIL,
  //     payload: error,
  //   };
  // };