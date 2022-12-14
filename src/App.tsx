
import './App.css'
import { products } from './data'
import { useCart } from './Providers'

function App() {
  
  const { cart, addProduct, deleteProduct } = useCart()

  return (
    <div className="App">
      <section>
        <ul>
          { products.map(product => <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={()=> addProduct(product)}>Add</button>
            <button onClick={()=> deleteProduct(product)}>Deletar</button>
          </li>)}
        </ul>
      </section>
      <section>
        <ul>
            { cart && cart.map(({ title, id })=> <li key={id}>{title}</li>) }
        </ul>
      </section>
    </div>
  )
}

export default App
