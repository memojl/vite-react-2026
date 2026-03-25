import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contenido from "./ui/Contenido";
import Aspirantes from "./ui/pages/Aspirantes";
import Preventa from "./ui/pages/Preventa";
import Profesiones from "./ui/pages/Profesiones";
import { profesiones } from './utils/conts';
import { aspirantesLoader } from './hooks/useAspirantesLoader';


function Layout() {
    return (
        <main className="content-wrap">
            <Outlet />
        </main>
    )
}

function Rutas() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Contenido />
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

export default Rutas