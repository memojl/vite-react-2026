
type Props = {
  listado: {
    id: number;
    nombre: string;
  }[];
};

function Profesiones({listado}: Props) {

  console.log(listado);
  return (
    <section className="content">
      <h2 className="mt-3">Profesiones</h2>
      <div className="list-group shadow-sm p-3 mb-5 rounded">
        <h4
          className="list-group-item list-group-item-action active text-center"
          aria-current="true"
        >
          Listado de Profesiones
        </h4>
        {
          
          listado.map((x)=>(
            <button
              type="button"
              className="list-group-item list-group-item-action text-center"
              key={x.id}
            >
              {x.nombre}
            </button>
          ))
          
        }
        
      </div>
    </section>
  );
}

export default Profesiones;
