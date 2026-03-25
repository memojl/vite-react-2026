import type { CardProps } from "../utils/models/interfaces";

function Card({ listado }: CardProps) {
  console.log(listado);

  return (
    <>
      {listado.map((x) => (
        <div
          key={x.id}
          className="person-box shadow p-3 mb-5 bg-body-tertiary rounded"
        >
          <div className="box-avatar">
            <img src={x.foto} alt="john-wick" />
          </div>
          <div className="box-bio">
            <h2 className="bio-name">{x.nombre} {x.apellido}</h2>
            <p className="bio-position">{x.email}</p>
          </div>
          <div className="box-actions">
            <button>
              <i className="bi bi-star"></i>
            </button>
            <button>
              <i className="bi bi-chat"></i>
            </button>
            <button>
              <i className="bi bi-envelope"></i>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
