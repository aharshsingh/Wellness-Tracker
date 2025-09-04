"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContextType, UserProfile } from "@/lib/types";
import { apiRequest } from "@/lib/apiClient";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (accessToken: string): Promise<any> => {
    try {
      const res = await apiRequest("/api/auth/profile");

      if (res.status === 401) {
        return await refreshAccessToken();
      }

      if (!res.ok) throw new Error("Failed to fetch profile");

      const data = await res.data;
      setUser(data);
      setLoading(false);
    } catch (err) {
      setUser(null);
      setLoading(false);
      router.replace("/login");
    }
  };

  const refreshAccessToken = async (): Promise<any> => {
    try {
      const refreshToken = getCookie("refreshToken");
      if (!refreshToken) {
        throw new Error("Refresh token not found");
      }

      const res = await apiRequest("/api/auth/refresh", "POST", { refreshToken });

      if (res.status === 401) {
        throw new Error("Refresh token is expired");
      }
      const data = await res.data;
      localStorage.setItem("accessToken", data.accessToken);
      setCookie("refreshToken", data.refreshToken);
      return fetchProfile(data.accessToken);
    } catch (err) {
      setUser(null);
      router.replace("/login");
    }
  };

  const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
    return null;
  };

  const setCookie = (name: string, value: string, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = getCookie("refreshToken");

    if (!accessToken && !refreshToken) {
      router.replace("/login");
      setLoading(false);
    } else if (accessToken) {
      fetchProfile(accessToken);
    } else {
      router.replace("/login");
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
