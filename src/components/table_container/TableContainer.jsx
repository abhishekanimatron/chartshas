import dummyData from "../../data/dummyData.json";
import "./TableContainer.css";
export default function TableContainer() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Medals</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((i) => (
            <tr key={i.Id}>
              <td className="table-td-index">{i.Id.toString()}</td>
              <td className="table-td-medal">{i.Medals.toString()}</td>
              <td className="table-td-year">{i.Year.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
