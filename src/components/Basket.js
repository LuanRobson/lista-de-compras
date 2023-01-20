export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice
  return (
    <aside className="block col1">
      <h2>Carrinho de compras</h2>
      <div>
        {cartItems.length === 0 && <div>Carrinho está vazio</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div clasName="col1">{item.name}</div>
            <div className="col1">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="col-1 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row">
              <div className="col1">Preço</div>
              <div className="col1 text-rigth">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col1">sla</div>
              <div className="col1 text-rigth">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col1">sla-2</div>
              <div className="col1 text-rigth">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col2">
                <strong>Total</strong>
              </div>
              <div className="col1 text-rigth">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <br />
            <div className="row">
              <button onClick={() => alert("Compra direito carai!")}>
                Comprar
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  )
}
