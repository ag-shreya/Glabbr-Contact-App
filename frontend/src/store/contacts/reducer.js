import {
    GET_ITEMS,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAIL,
    // GET_POST_DETAILS,
    // GET_POST_DETAILS_SUCCESS,
    // GET_POST_DETAILS_FAIL,
  } from "./actionTypes";
  
  const initialState = {
    contacts: [],
    post: {},
    loadingItems: false,
    loadingPostDetails: false,
    error: {
      message: "",
    },
  };
  
  const PostReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ITEMS:
        state = { ...state, loadingItems: true };
        break;
      case GET_ITEM_SUCCESS:
        state = { ...state, contacts: action.payload, loadingItems: false };
        break;
      case GET_ITEM_FAIL:
        state = {
          ...state,
          error: {
            message: "Error",
          },
          loadingItems: false,
        };
        break;
      // case GET_POST_DETAILS:
      //   state = { ...state, loadingPostDetails: true };
      //   break;
      // case GET_POST_DETAILS_SUCCESS:
      //   state = { ...state, post: action.payload[0], loadingPostDetails: false };
      //   break;
      // case GET_POST_DETAILS_FAIL:
      //   state = {
      //     ...state,
      //     error: {
      //       message: "Error",
      //     },
      //     loadingPostDetails: false,
      //   };
      //   break;
      default:
        state = { ...state };
        break;
    }
    return state;
  };
  
  export default PostReducer;
  