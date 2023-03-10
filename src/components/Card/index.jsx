import { Link } from "react-router-dom";
import './card.css'; // importa el archivo CSS

const Card = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
    <div className="containercard">
        <h4>{producto.title}</h4>
        <img src={producto.image} alt="" width={200} />
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
    </div>
    </Link>
  )
}

export default Card
