'use client';
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "../components/index";
import "nprogress/nprogress.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useNavigationEvent } from "./hooks/useNavigationEvent";
import ReactQueryProvider from "./ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NextTopLoader from "nextjs-toploader";
import React from "react";
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages

  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
    >
      <ReactQueryProvider>
        <html lang="en">
          <ReactQueryDevtools />
          <NextTopLoader />
          <body>{children}</body>
        </html>
      </ReactQueryProvider>
      {/* <ToastContainer/> */}
    </GoogleOAuthProvider>
  );
}
