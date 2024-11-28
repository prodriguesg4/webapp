import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
  } from "react-router-dom";
  import Protected from "./protected";
  import { SignInPage } from "@/pages/sign-in";
  import { SignUpPage } from "@/pages/sign-up";
import { isAuthenticated } from "./helpers";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Protected />}>
            <Route index element={<h1>App</h1>} />
            </Route>
            <Route path="sign-in" element={<SignInPage />} loader={async () => await isAuthenticated()} />
            <Route path="sign-up" element={<SignUpPage />} loader={async () => await isAuthenticated()} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
    )
  );

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;