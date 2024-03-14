import api from "./axiosInstances";

const TypeMenuApi = {
  get: () => {
    const url = "/mainpage/typeMenu";
    return api.get(url);
  },

  create: (body) => {
    const url = "/mainpage/typeMenu";
    return api.post(url, body);
  },
};

export default TypeMenuApi;
