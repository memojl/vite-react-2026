import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom';
import Acceso from "./components/Acceso";
import Menu from "./components/Menu";
//import { Routes, Route } from "react-router-dom";
import Home from "./ui/pages/Home";
import Aspirantes from "./ui/pages/Aspirantes";
import Preventa from "./ui/pages/Preventa";
import Profesiones from "./ui/pages/Profesiones";
import { profesiones } from './utils/conts';
import { aspirantesLoader } from './utils/hooks/useAspirantesLoader';

function Layout() {
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

function App() {


  const router = createBrowserRouter([
        {
            path: '/',
            element : <Layout/>,
            children : [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'empresa',
                    element: <Preventa/>
                },
                {
                    path: 'aspirantes',
                    element: <Aspirantes/>,
                    loader: aspirantesLoader
                },
                {
                    path: 'profesiones',
                    element: <Profesiones listado={profesiones}/>
                }
            ]

        }
    ])
    return <RouterProvider router={router}/>;
}

export default App;
