import { Helmet } from "react-helmet-async";
// section
import { LoginPageView } from "src/sections/admin/login";



export default function LoginPage() {
    return (
      <>
        <Helmet>
          <title> Login to admin</title>
        </Helmet>
  
        <LoginPageView />
      </>
    );
  }
