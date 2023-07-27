import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "../components/index";
import "nprogress/nprogress.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useNavigationEvent } from './hooks/useNavigationEvent';
import ReactQueryProvider from './ReactQueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    
    children,
}: {
    children: React.ReactNode
})

{

    return (
        <ReactQueryProvider>
      <html lang="en">
          <ReactQueryDevtools/>

        <body>{children}</body>
      </html>
        </ReactQueryProvider>
    )
  }