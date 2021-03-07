import ListItem from './listItem';

const ListHeader = () => {
  return (
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <ListItem num="1" item="Bacon" price="2.50" quantity="1" actions="delete/edit" />
        </tbody>
      </table>
  )
}

export default ListHeader
