import api from "./axiosInstances.js";

const ProductAPI = {
  get: () => {
    const url = "/mainpage/menu";
    return api.get(url);
  },

  create: (body) => {
    const url = "/mainpage/menu";
    return api.post(url, body);
  },
  delete: (id) => {
    const url = `/mainpage/menu/${id}`;
    return api.delete(url);
  },
  update: (body, id) => {
    const url = `/mainpage/menu/${id}`;
    return api.put(url, body);
  },
};

export default ProductAPI;
