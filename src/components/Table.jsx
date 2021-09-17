export default function Table({ product }) {
  const Nutrition = product.nutrition.map((item) => 
    <tr key={item.id} item={item} className="table-content">
      <td>{item.name}</td>
      <td>{item.amount}</td>
    </tr>
  ); 
  return (
    <div className="product-table">
    <h3>Nutrition</h3>
    <table>
      <tr className="table-header">
        <th>Name</th>
        <th>Amount</th>
      </tr>
      {Nutrition}
    </table>
    </div>
  );
}
