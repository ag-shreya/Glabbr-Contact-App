import * as types from "./actionTypes";

// get contact items/list (paginated data)
export const getContactItems = (params) => {
  return {
    type: types.GET_ITEMS,
    params,
  };
};
export const getContactItemsSuccess = (payload) => {
  return {
    type: types.GET_ITEM_SUCCESS,
    payload,
  };
};
export const getContactItemsFail = (error) => {
  return {
    type: types.GET_ITEM_FAIL,
    payload: error,
  };
};

// post contact detail-item
export const postContactItem = (payload) => {
  return {
    type: types.POST_ITEMS,
    payload,
  };
};
export const postContactItemSuccess = (post) => {
  return {
    type: types.POST_ITEM_SUCCESS,
    payload: post,
  };
};
export const postContactItemFail = (error) => {
  return {
    type: types.POST_ITEM_FAIL,
    payload: error,
  };
};

// delete contact detail-item
export const deleteContact = (id) => {
  return {
    type: types.DELETE_ITEM,
    id,
  };
};
export const deleteContactSuccess = (contact) => {
  return {
    type: types.DELETE_ITEM_SUCCESS,
    payload: contact,
  };
};
export const deleteContactFail = (error) => {
  return {
    type: types.DELETE_ITEM_FAIL,
    payload: error,
  };
};

// update contact details
export const updateContact = (payload) => {
  return {
    type: types.PUT_ITEM,
    payload,
  };
};
export const updateContactSuccess = (contact) => {
  return {
    type: types.PUT_ITEM_SUCCESS,
    payload: contact,
  };
};
export const updateContactFail = (error) => {
  return {
    type: types.PUT_ITEM_FAIL,
    payload: error,
  };
};

// get list of favorite contact details
export const getFavoriteItems = () => {
  return {
    type: types.GET_FAVORITE_ITEMS,
  };
};
export const getFavoriteItemsSuccess = (contact) => {
  return {
    type: types.GET_FAVORITE_ITEM_SUCCESS,
    payload: contact,
  };
};
export const getFavoriteItemsFail = (error) => {
  return {
    type: types.GET_FAVORITE_ITEM_FAIL,
    payload: error,
  };
};
