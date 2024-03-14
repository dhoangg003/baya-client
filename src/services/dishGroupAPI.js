import api from "./axiosInstances";

const dishGroupApi = {
  create: (body) => {
    const url = "/mainpage/dishGroup";
    return api.post(url, body);
  },
  get: () => {
    const url = "/mainpage/dishGroup";
    return api.get(url);
  },
};

export default dishGroupApi;
