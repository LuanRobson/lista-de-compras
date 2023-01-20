import Product from "./Product"

export default function Main(props) {
  const { cartItems, products, onAdd, onRemove } = props
  return (
    <div className="block col2">
      <h2>Produtos</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            item={cartItems.find((x) => x.id === product.id)}
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Product>
        ))}
      </div>
    </div>
  )
}
