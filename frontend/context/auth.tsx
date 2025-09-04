// "use client";

// import { createContext, useEffect, useState, useCallback } from "react";
// import { useRouter } from "next/router";
// import { AuthContextType, UserProfile } from "@/lib/types";
// import { apiRequest } from "@/lib/apiClient";

// export const AuthContext = createContext<AuthContextType>({
//   user: null,
//   loading: true,
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const [user, setUser] = useState<UserProfile | null>(null);
//   const [loading, setLoading] = useState(true);

//   const getCookie = (name: string): string | null => {
//     const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//     return match ? match[2] : null;
//   };

//   const setCookie = (name: string, value: string, days = 7) => {
//     const expires = new Date();
//     expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
//     document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
//   };

//   // Define refreshAccessToken first
//   const refreshAccessToken = useCallback(async (): Promise<void> => {
//     try {
//       const refreshToken = getCookie("refreshToken");
//       if (!refreshToken) throw new Error("Refresh token not found");

//       const data: { accessToken: string; refreshToken: string } = await apiRequest(
//         "/api/auth/refresh",
//         "POST",
//         { refreshToken }
//       );

//       localStorage.setItem("accessToken", data.accessToken);
//       setCookie("refreshToken", data.refreshToken);

//       await fetchProfile(); // fetchProfile can now safely call refreshAccessToken
//     } catch (err) {
//       console.log(err);
//       setUser(null);
//       router.replace("/login");
//     }
//   }, [router]); // router is needed here

//   // Now fetchProfile can safely include refreshAccessToken
//   const fetchProfile = useCallback(async (): Promise<void> => {
//     try {
//       const data: UserProfile = await apiRequest<UserProfile>("/api/auth/profile");
//       setUser(data);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       await refreshAccessToken();
//     }
//   }, [refreshAccessToken]);

//   useEffect(() => {
//     const accessToken = localStorage.getItem("accessToken");
//     const refreshToken = getCookie("refreshToken");

//     if (!accessToken && !refreshToken) {
//       router.replace("/login");
//       setLoading(false);
//     } else if (accessToken) {
//       fetchProfile();
//     } else {
//       router.replace("/login");
//       setLoading(false);
//     }
//   }, [fetchProfile, router]);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
