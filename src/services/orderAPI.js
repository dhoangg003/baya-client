import api from "./axiosInstances";

const orderApi = {
  create: (body) => {
    const url = "/paymentpage/orders"; 
    return api.post(url, body);
  },
  get: () => {
    const url = "/paymentpage/orders"; 
    return api.get(url);
  },
  delete: (orderId) => {
    const url = `/paymentpage/orders/${orderId}`; 
    return api.delete(url);
  },
};

export default orderApi;
