import axios, { AxiosRequestConfig, Method } from "axios";

/**
 * Reusable API request function
 * @param url - API endpoint
 * @param method - HTTP method ('GET', 'POST', etc.)
 * @param data - Request body (optional)
 * @param extraHeaders - Additional headers (optional)
 */
export const apiRequest = async <T = unknown, D = unknown>(
  url: string,
  method: Method = "GET",
  data?: D,
  extraHeaders: Record<string, string> = {}
): Promise<T> => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const config: AxiosRequestConfig<D> = {
      url,
      method,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
        ...extraHeaders,
      },
      data,
    };

    const response = await axios(config);
    return response.data as T;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};
