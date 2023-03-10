import Card from "../Card";


const ProductList = ({productos}) => {
  return (
    <>
      { productos.map((producto) => (
               <Card key ={producto.id} producto = {producto} />
            ))}
    </>
  )
}

export default ProductList;
