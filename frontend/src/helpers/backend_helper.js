import { deleteContact, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// get all contact information
export const getItems = (params) => get(url.GET_CONTACT, { params });

// post new contact information
export const postItem = (data) => post(url.POST_CONTACT, data);

//delete contact information by id
export const deleteItem = (id) => deleteContact(url.DELETE_CONTACT, { id });

//update contact information by id
export const updateItem = (data) => put(url.PUT_CONTACT, data);

//get favorite contact information
export const getFavoriteItems = () => get(url.GET_FAVORITE_CONTACT);
