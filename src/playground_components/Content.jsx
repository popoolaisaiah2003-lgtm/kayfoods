const Content = ({ count, fruits, products, updater }) => {
  
  const handleDecrement = () => {
    updater(count - 1);
  }

  const handleIncrement = () => {
    updater(count + 1);
  }
  return (
    <main className="bg-dark text-white p-3">
      <h1>Content Component {count}</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <p>Available Products:</p>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </main>
  )
}
export default Content