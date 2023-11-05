"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchFacebookUser,
  fetchGoogleUser,
  getUserByToken,
  refreshToken,
} from "../../app/apis/getApis"; // Import the function for fetching user data
import { SigninUser, SignupUser, UpdateUser } from "../../app/apis/postApis";
import { useUserStore } from "../../store/User";

interface userType {
  uuid: string;
  u_id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string | null;
  status: number;
}
const useAuth = () => {
  const [Gtoken, setGToken] = useState("");
  const [Ftoken, setFToken] = useState("");
  const [Mtoken, setMToken] = useState("");
  const { user, token, setUser, setToken, updatePhoneNumberOfUser } =
    useUserStore((state: any) => state);

  const getToken = () => {
    return token;
  };
  const [url, setUrl] = useState("/");
  const router = useRouter();

  useQuery({
    queryKey: ["getUserByToken", token ? token : ""],
    queryFn: () => getUserByToken(token),
    enabled: !!token,
    onSuccess: (data: any) => {
      setUser(data?.data?.body?.data);
    },
    onError: (err) => {
      verifyToken();
      console.log(err);
    },
  });

  useQuery({
    queryKey: ["queryForRefreshToken", Mtoken ? Mtoken : ""],
    queryFn: () => {
      refreshToken(Mtoken);
    },
    enabled: true,
    refetchInterval: 60000,
    onSuccess: (data: any, variables: any, context: any) => {
      localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
      setToken(data?.data?.body?.data?.accessToken);
    },
    onError: (err: any) => {
      console.log("error");
    },
  });
  const verifyToken = () => {
    const tokenLocallyUsed = token
      ? token
      : typeof window !== "undefined"
      ? localStorage.getItem("accessToken")
      : null;
    if (!tokenLocallyUsed) {
      setToken(null);
      return;
    }
    const tokenPart: string = tokenLocallyUsed.split(".")[1];
    if (!tokenPart) {
      setToken(null);
      return;
    }
    const base64 = tokenPart.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );
    const payload = JSON.parse(jsonPayload);
    if (!payload) {
      setToken(null);
      return;
    }
    if (!payload.exp) {
      setToken(null);
      return;
    }
    const expirationTime = payload.exp * 1000; // Convert expiration time to milliseconds
    const currentTime = Date.now(); // Get current time in milliseconds
    if (currentTime < expirationTime) {
      setToken(tokenLocallyUsed);
    } else {
      const refreshToken =
        typeof window !== "undefined"
          ? localStorage.getItem("refreshToken")
          : null;

      if (!refreshToken) {
        setToken(null);
        return;
      } else {
        setMToken(refreshToken);
      }
    }
  };

  const signupMutation = useMutation({
    mutationFn: SignupUser,
    onSuccess: (data, variables, context) => {
      localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
      localStorage.setItem(
        "refreshToken",
        data?.data?.body?.data?.refreshToken,
      );
      setToken(data?.data?.body?.data?.accessToken);
      setUser(data?.data?.body?.data?.user);
      router.back();
      // Boom baby!
    },
  });
  const getSignup: any = () => {
    return { ...signupMutation };
  };

  const manualLoginMutation = useMutation({
    mutationFn: SigninUser,
    onSuccess: (data, variables, context) => {
      localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
      localStorage.setItem(
        "refreshToken",
        data?.data?.body?.data?.refreshToken,
      );
      setUser(data?.data?.body?.data?.user);
      setToken(data?.data?.body?.data?.accessToken);
      setMToken(data?.data?.body?.data?.accessToken);
      // router.push("/")
      router.back();

      // Boom baby!
    },
  });

  const setPhoneNumberMutation = useMutation({
    mutationFn: (data: any) => UpdateUser(data, token),
    onSuccess: (data, variables, context) => {
      updatePhoneNumberOfUser(variables.customer_number);
      // Boom baby!
    },
  });
  const getSetPhoneNumber: any = () => {
    return { ...setPhoneNumberMutation };
  };

  const googleLogin: any = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      setGToken(codeResponse.access_token);
    },
    onError: (error: Error) => console.log("Login Failed:", error),
  });
  const navigate = (url: string) => {
    setUrl(url);
  };

  const fetchGoogleUserData = useQuery({
    queryKey: ["user", Gtoken],
    queryFn: () => fetchGoogleUser(Gtoken),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
      localStorage.setItem(
        "refreshToken",
        data?.data?.body?.data?.refreshToken,
      );
      setUser(data?.data?.body?.data?.user);
      setToken(data?.data?.body?.data?.accessToken);
      router.push(url);
    },
    enabled: !!Gtoken,
  });

  const fetchFacebookUserData = (Ftoken: any) => {
    setFToken(Ftoken);
  };
  useQuery({
    queryKey: ["user", Ftoken],
    queryFn: () => fetchFacebookUser(Ftoken),
    onSuccess: (data: any) => {
      localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
      localStorage.setItem(
        "refreshToken",
        data?.data?.body?.data?.refreshToken,
      );
      setToken(data?.data?.body?.data?.accessToken);
      setUser(data?.data?.body?.data?.user);
      router.back();
    },
    enabled: !!Ftoken,
  });
  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setUser(null);
      setToken(null);
      window.location.reload();
      return true;
    } else {
      return false;
    }
  };
  // useEffect(() => {
  //   if (!token && !user) {
  //     verifyToken();
  //   }
  // }, [Logout]);
  return {
    getToken,
    googleLogin,
    manualLoginMutation,
    navigate,
    Logout,
    getSignup,
    verifyToken,
    fetchFacebookUserData,
    fetchGoogleUserData,
    getSetPhoneNumber,
  };
};

export default useAuth;
