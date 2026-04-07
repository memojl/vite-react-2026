import Acceso from "../components/Acceso";
import Menu from "../components/Menu";
//import Rutas from "../Rutas";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Aspirantes from "./pages/Aspirantes";
import Preventa from "./pages/Preventa";
import Profesiones from "./pages/Profesiones";
import { profesiones } from '../utils/conts';
import { aspirantesLoader } from '../utils/hooks/useAspirantesLoader';


function Template() {
  return (
    <div className="dashboard">
      <Acceso />
      <Menu />
      <main className="content-wrap">
            <Outlet />
        </main>
    </div>
  )
}

function Layout() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Template />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'empresa',
                    element: <Preventa />
                },
                {
                    path: 'aspirantes',
                    element: <Aspirantes />,
                    loader: aspirantesLoader
                },
                {
                    path: 'profesiones',
                    element: <Profesiones listado={profesiones} />
                }
            ]

        }
    ])
    return <RouterProvider router={router} />;
}

export default Layout