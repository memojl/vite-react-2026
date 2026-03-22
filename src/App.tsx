import Acceso from './components/Acceso';
import Menu from './components/Menu';
import Contenido from './ui/pages/Contenido';

function App() {
  return (
    <div className="dashboard">
      <Acceso />
      <Menu />
      <Contenido />
    </div>
  );
}

export default App;
