// import { useRouter } from 'next/navigation';
import {useEffect} from "react"
export const isUserAuthenticated = () => {
    // Check if the user is authenticated by verifying the token
    if (typeof window !== 'undefined') {

    const token = localStorage.getItem("accessToken");
    return token
         }
  };
  const ProtectedRoute = (WrappedComponent:any) => {
      const Component = (props:any) => {
        // const router = useRouter();
 
      // Check if the user is authenticated
      if (!isUserAuthenticated()) {
        // Redirect to the login page if not authenticated
        // router.push('/login');
        return null;
      }
  
      // Render the wrapped component if authenticated
      return <WrappedComponent {...props} />;
    };
  
    return Component;
  };
  
  export default ProtectedRoute;