import * as types from "./actionTypes";

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
    case types.GET_ITEMS:
      state = { ...state, loadingItems: true };
      break;
    case types.GET_ITEM_SUCCESS:
      state = { ...state, contacts: action.payload, loadingItems: false };
      break;
    case types.GET_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingItems: false,
      };
      break;

    case types.POST_ITEMS:
      state = { ...state, loadingPostDetails: true };
      break;
    case types.POST_ITEM_SUCCESS:
      state = { ...state, post: action.payload[0], loadingPostDetails: false };
      break;
    case types.POST_ITEM_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPostDetails: false,
      };
      break;

    case types.DELETE_ITEM:
      state = { ...state, loadingItems: true };
      break;
    case types.DELETE_ITEM_SUCCESS:
      state = { ...state, loadingItems: false };
      break;
    case types.DELETE_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingItems: false,
      };
      break;

    case types.PUT_ITEM:
      state = { ...state, loadingItems: true };
      break;
    case types.PUT_ITEM_SUCCESS:
      state = { ...state, loadingItems: false };
      break;
    case types.PUT_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingItems: false,
      };
      break;

    case types.GET_FAVORITE_ITEMS:
      state = { ...state, loadingFavoriteItems: true };
      break;
    case types.GET_FAVORITE_ITEM_SUCCESS:
      state = {
        ...state,
        favoriteContact: action.payload,
        loadingFavoriteItems: false,
      };
      break;
    case types.GET_FAVORITE_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
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
