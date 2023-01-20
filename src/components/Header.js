export default function Header(props) {
  const { countCartItems } = props
  return (
    <div className="row center block">
      <div>
        <a href="#/">
          <h2>SmartSigmaXOP</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Carrinho
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">Entrar</a>
      </div>
    </div>
  )
}
