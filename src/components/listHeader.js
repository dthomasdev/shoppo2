//components
import ListItem from './listItem';

const ListHeader = ({ list }) => {

// maps through array and creates a new ListItem per entry
function myList(){
  return list.map((item, i) => (
    <ListItem key={i} num={i+1} item={item.item} price={item.price} quantity={item.quantity} actions="delete/edit"/>
  ));
};

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
        {myList()}
        </tbody>
      </table>
  )
}

export default ListHeader;
