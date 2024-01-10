import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
import ScreenLoader from "../components/ScreenLoader";
import { Layout } from "../components";
// const Layout = dynamic(() => import("../components/layouts/Layout"), {
//   loading: () => (
//     <div style={{ width: "100%", height: "100vh" }} className="justify-content-center d-flex align-items-center">
//       <ScreenLoader />
//     </div>
//   ),
//   ssr: false,
// });

// const NextTopLoader = dynamic(() => import("../components/ProgressBar"), {
//   ssr: false,
// });

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages

  children,
}: {
  children: React.ReactNode;
})


{
  return (
      <ReactQueryProvider>
        <html lang="en">
          {/* <ReactQueryDevtools /> */}
          <body>
            {/* <ProgressBar /> */}
            {/* <Layout> */}
              {children}
              {/* </Layout> */}
          </body>
        </html>
      </ReactQueryProvider>
  );
}
