import {
  GET_ITEMS,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  // GET_POST_DETAILS,
  // GET_POST_DETAILS_SUCCESS,
  // GET_POST_DETAILS_FAIL,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  PUT_ITEM,
  PUT_ITEM_SUCCESS,
  PUT_ITEM_FAIL,
  GET_FAVORITE_ITEMS,
  GET_FAVORITE_ITEM_SUCCESS,
  GET_FAVORITE_ITEM_FAIL,
  TOGGLE_FAVORITE_ITEM,
  TOGGLE_FAVORITE_ITEM_SUCCESS,
  TOGGLE_FAVORITE_ITEM_FAIL,
} from "./actionTypes";

const initialState = {
  contacts: [],
  favoriteContact: [],
  post: {},
  loadingItems: false,
  loadingFavoriteItems: false,
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
    case DELETE_ITEM:
      state = { ...state, loadingItems: true };
      break;
    case DELETE_ITEM_SUCCESS:
      state = { ...state, contacts: action.payload, loadingItems: false };
      break;
    case DELETE_ITEM_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingItems: false,
      };
      break;
    case PUT_ITEM:
      state = { ...state, loadingItems: true };
      break;
    case PUT_ITEM_SUCCESS:
      state = { ...state, contacts: action.payload, loadingItems: false };
      break;
    case PUT_ITEM_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingItems: false,
      };
      break;
    case GET_FAVORITE_ITEMS:
      state = { ...state, loadingFavoriteItems: true };
      break;
    case GET_FAVORITE_ITEM_SUCCESS:
      state = {
        ...state,
        favoriteContact: action.payload,
        loadingFavoriteItems: false,
      };
      break;
    case GET_FAVORITE_ITEM_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingFavoriteItems: false,
      };
      break;
    case TOGGLE_FAVORITE_ITEM:
      state = { ...state, loadingFavoriteItems: true };
      break;
    case TOGGLE_FAVORITE_ITEM_SUCCESS:
      state = {
        ...state,
        favoriteContact: action.payload,
        loadingFavoriteItems: false,
      };
      break;
    case TOGGLE_FAVORITE_ITEM_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingFavoriteItems: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
