import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.10:3333",
  //   baseURL: "http://7u-7ab.anonymous.mobile.exp.direct:3333",
});

export default api;
