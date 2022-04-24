import { get, post } from "./api_helper";
import * as url from "./url_helper";

//Get
export const getItems = () => get(url.GET_ITEMS);

//Post
export const getPostDetails = (id) =>
  get(url.GET_ITEMS, {
    params: {
      id: id,
    },
  });

// Post
export const postItems = (data) => post(url.POST_ITEMS, data);
