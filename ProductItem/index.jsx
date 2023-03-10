import { useParams } from "react-router-dom"

const ProductItem = ({productos}) => {
    const{ id } = useParams();
    // console.log("ID :",id)
    const producto = productos.find((producto) => producto.id == id)
  return (
    <div className="containercard">
          <h4>{producto.title}</h4> 
        <img src={producto.image} alt="" width={200} />
        <h4>{producto.category}</h4>
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
        <p>rating: {producto.rating.rate}</p> 
    </div>
  )
}

export default ProductItem
