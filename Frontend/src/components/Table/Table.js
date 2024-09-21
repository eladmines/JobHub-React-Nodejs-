export function Table(props){
    return(
            <div class="card-body">
              <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      {props.colsHeader.map((item, index) => (
        <th key={index} scope="col">
          {item}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {props.dataTable.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {Object.keys(item).map((key, colIndex) => (
          <td key={colIndex}>
            {item[key] || "N/A"}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>

            </div>

    )
}