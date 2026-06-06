import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
            <App />
        </>
      ),
     // errorElement: <ErrorPage />, //adds error page if something went wrong
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;