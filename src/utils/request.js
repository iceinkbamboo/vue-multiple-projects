import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.NODE_ENV == "production" ? "" : "/api", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    // 'content-type': 'application/x-www-form-urlencoded',
    "Content-Type": "application/json;",
    "Access-Control-Allow-Origin": "*"
  }
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (localStorage.getItem("token")) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["token"] = localStorage.getItem("token");
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code && res.code !== 0) {
      return Promise.reject(new Error(res.msg || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
