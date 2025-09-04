import axios, { AxiosRequestConfig, Method } from "axios";

/**
 * Reusable API request function
 * @param url - API endpoint
 * @param method - HTTP method ('GET', 'POST', etc.)
 * @param data - Request body (optional)
 * @param extraHeaders - Additional headers (optional)
 */
export const apiRequest = async <T = any>(
  url: string,
  method: Method = "GET",
  data?: any,
  extraHeaders: Record<string, string> = {}
): Promise<T> => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const config: AxiosRequestConfig = {
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
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
};
