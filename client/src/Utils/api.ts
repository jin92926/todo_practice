import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  timeout: 10000,
  transformResponse: [
    (data) => {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    },
  ],
});

const requestInterceptorFulfilled = (config: any) => {
  // add your custom logic here
  return config;
};

const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  return Promise.reject(res.data);
};

const responseInterceptorRejected = (error: AxiosError | any) => {
  const errorMsg = error.response?.data?.message ?? "에러입니다";
  return Promise.reject(errorMsg);
};

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected,
);

export const get = <T>(url: string, config?: any) => {
  return instance.get<T, AxiosResponse<T>>(url, config).then((res) => res.data);
};
export const post = <T>(url: string, data?: any, config?: any) => {
  return instance
    .post<T, AxiosResponse<T>>(url, data, config)
    .then((res) => res.data);
};
export const patch = <T>(url: string, data?: any, config?: any) => {
  return instance
    .patch<T, AxiosResponse<T>>(url, data, config)
    .then((res) => res.data);
};
export const del = <T>(url: string, config?: any) => {
  return instance
    .delete<T, AxiosResponse<T>>(url, config)
    .then((res) => res.data);
};
