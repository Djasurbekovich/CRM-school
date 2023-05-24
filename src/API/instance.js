import axios from "axios";

const instance = axios.create({
  baseURL: "https://crm-c3xh.onrender.com/api/crm",
  headers: {
    "Content-Type": "application/json",
  },
});
console.log(instance);

export { instance };
