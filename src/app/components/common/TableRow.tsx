interface TableRowProps {
  label: string
  value: string
}

const TableRow = ({ label, value }: TableRowProps) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

export default TableRow
