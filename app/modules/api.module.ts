import axios, { AxiosError, AxiosResponse } from "axios";

export const ApiModule = {
  get: get,
};

const setHeader = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      "Content-Type": "application/json",
    },
    responseType: "json",
  });
};

async function get(url: string, params?: any) {
  const newAxios = setHeader();
  return await newAxios
    .get(url, {
      params: params,
    })
    .then(handleSuccess)
    .catch(handleError);
}

const handleSuccess = <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
  return response;
};

const handleError = (error: AxiosError): AxiosError => {
  console.log("Error!!", error);
  throw error;
};
