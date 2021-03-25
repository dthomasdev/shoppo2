//components
import ListItem from './listItem';

const ListHeader = ({ list , removeItem , adjustQuant}) => {

  // part of the event chain for removing items from the list
  function delItem(index){
    removeItem(index)
  };

  // part of the event chain for updating quantities
  function updateQuant(e, i, q){
   adjustQuant(e , i , q)
  }

// maps through array of values passed in as props and creates a new ListItem per entry
function myList(){
  return list.map((item, i) => (
    <ListItem 
      key={i} 
      num={i+1} 
      item={item.item} 
      price={item.price} 
      quantity={item.quantity} 
      delItem={() => delItem(i)} // call del item function using the items index in the array
      updateQuant = {(e) => updateQuant(e, i, item.quantity)}
    />
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
