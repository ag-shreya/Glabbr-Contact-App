const config = {
  dev: "http://localhost:3000/",
};

const apis = {
  getItem: "item",
  postItem: "item",
};

export const urls = (endpoint) =>
  process.env.NODE_ENV === "development"
    ? config.dev + apis[endpoint]
    : config.prod + apis[endpoint];
