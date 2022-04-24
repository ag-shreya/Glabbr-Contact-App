import { deleteContact, get, patch, post, put } from "./api_helper";
import * as url from "./url_helper";

// get all contact information
export const getItems = () => get(url.GET_ITEMS);

//get contact information by id
export const getItemById = (id) => get(url.GET_ITEMS, { params: { id: id } });

// post new contact
export const postItems = (data) => post(url.POST_ITEMS, data);

//delete contact information by id
export const deleteItem = (id) =>
  deleteContact(url.DELETE_ITEM, { params: { id: id } });

//update contact information by id
export const updateItem = (id) => put(url.PUT_ITEM, { params: { id: id } });

//get favorite contact information
export const getFavoriteItems = () => get(url.GET_FAVORITE_ITEM);

//toggle favorite contact information
export const updateFavoriteItems = (id) =>
  patch(url.TOGGLE_FAVORITE_ITEM, { params: { id: id } });
