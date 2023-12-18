"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchFacebookUser, fetchGoogleUser, getUserByToken, getUserWishlist, refreshToken } from "../../app/apis/getApis"; // Import the function for fetching user data
import { SigninUser, SignupUser, UpdateUser } from "../../app/apis/postApis";
import { useUserStore } from "../../store/User";
import { useWishlistStore } from "../../store/wishList";

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
  const { user, token, setUser, setToken, updatePhoneNumberOfUser } = useUserStore((state: any) => state);
  const { count, setWishlist } = useWishlistStore((store: any) => store);

  const getToken = () => {
    return token;
  };
  const [url, setUrl] = useState("/");
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const param = new URLSearchParams(searchParam);
  param.delete("redirect");
  const path = searchParam.get("redirect");
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

  // useQuery({
  //   queryKey: ["queryForRefreshToken", Mtoken],
  //   queryFn: () => {
  //     refreshToken(Mtoken);
  //   },
  //   enabled: !!Mtoken,
  //   refetchInterval: 60000,
  //   onSuccess: (data: any, variables: any, context: any) => {
  //     localStorage.setItem("accessToken", data?.data?.body?.data?.accessToken);
  //     setToken(data?.data?.body?.data?.accessToken);
  //   },
  //   onError: (err: any) => {
  //     console.log("error");
  //   },
  //   refetchOnWindowFocus:false
  // });
  const verifyToken = () => {
    const tokenLocallyUsed = token ? token : typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
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
        .join("")
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
      const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null;

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
      localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
      setToken(data?.data?.body?.data?.accessToken);
      setUser(data?.data?.body?.data?.user);
      router.push(`/login`);
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
      localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
      setUser(data?.data?.body?.data?.user);
      setToken(data?.data?.body?.data?.accessToken);
      setMToken(data?.data?.body?.data?.accessToken);
      if (path === null) {
        router.push("/");
      } else {
        router.push(`${path}${param}`);
        
      }

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
      localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
      setUser(data?.data?.body?.data?.user);
      setToken(data?.data?.body?.data?.accessToken);
      if (searchParam.get("redirect")===null) {
      }else if(pathname==="/login" && searchParam.get("redirect")===null){
        router.push(`/`);
      } else {
        router.push(`${path}${param}`);
      }
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
      localStorage.setItem("refreshToken", data?.data?.body?.data?.refreshToken);
      setToken(data?.data?.body?.data?.accessToken);
      setUser(data?.data?.body?.data?.user);
      if (path === null) {
        router.push(`/`);
      } else {
        router.push(`${path}${param}`);
      }
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
  useQuery({
    queryKey: ["getUserWishlist", user, count],
    queryFn: () => getUserWishlist(token, user?.uuid),
    enabled: !!user,
    onSuccess: (data: any) => {
      setWishlist(data.data.body.data.data);
    },
  });
  return {
    getToken,
    googleLogin,
    manualLoginMutation,
    navigate,
    Logout,
    verifyToken,
    fetchFacebookUserData,
    fetchGoogleUserData,
    getSetPhoneNumber,
    signupMutation
  };
};

export default useAuth;
