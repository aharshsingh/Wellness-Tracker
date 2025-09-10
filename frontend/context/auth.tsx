"use client";

import { createContext, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AuthContextType, UserProfile } from "@/lib/types";
import axios from "axios";
import { getBaseURL } from "@/lib/utils";

export const AuthContext = createContext<AuthContextType>({
    profile: null,
    loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const Base_url = getBaseURL();
    
    // Define refreshAccessToken first
    const refreshAccessToken = useCallback(async (): Promise<void> => {
        try {
            const response = await axios.post(`${Base_url}/auth/refresh`, {}, { withCredentials: true })
            const data: { accessToken: string } = response.data;
            localStorage.setItem("accessToken", data.accessToken);
            await fetchProfile();
        } catch (err) {
            console.log(err);
            setProfile(null);
            router.replace("/auth/login");
        }
    }, [router]);

    const fetchProfile = useCallback(async (): Promise<void> => {
        try {
            const response = await axios.get(`${Base_url}/profile`)
            setProfile(response.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
            await refreshAccessToken();
        }
    }, [refreshAccessToken]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            router.replace("/auth/login");
            setLoading(false);
        } else if (accessToken) {
            fetchProfile();
        } else {
            router.replace("/auth/login");
            setLoading(false);
        }
    }, [fetchProfile, router]);

    return (
        <AuthContext.Provider value={{ profile, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
