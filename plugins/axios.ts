import axios, { type AxiosRequestConfig, type AxiosResponse, type AxiosError } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string,
});

interface ApiProps extends AxiosRequestConfig {
  url: string;
  open?: boolean;
}

export const api = ({ url, open = false, ...props }: ApiProps) => {
  let token: string | null = localStorage.getItem("access_token");

  if (token) token = `Bearer ${token}`;
  if (!open) {
    props.headers = {
      ...props.headers,
      Authorization: props.headers?.Authorization || token,
    };
  }

  return instance({
    url,
    ...props,
  });
};

function createAxiosResponseInterceptor() {
  const interceptor = instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          Clear();
        }
      }
      instance.interceptors.response.eject(interceptor);
      return Promise.reject(error);
    }
  );
}

function Clear() {
  localStorage.removeItem("access_token");
  window.location.href = "/login";
  return null;
}

createAxiosResponseInterceptor();
