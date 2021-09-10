export default function Table({ info }) {
  return (
    <table>
      <tr>
        <td>{info.name}</td>
        <td>{info.amount}</td>
      </tr>
    </table>
  );
}
