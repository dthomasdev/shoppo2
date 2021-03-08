import {useState} from 'react';

//components
import ListItem from './listItem';

const ListHeader = () => {
const [state, setstate] = useState([{desc:"Bacon", price: "2.50", quantity: "1"}, {desc:"Eggs", price: "1.75", quantity: "2"}, {desc:"Sausages", price: "1.99", quantity: "1"}]);

function myList(){
  return state.map((item, i) => (
    <ListItem key={i} num={i+1} item={item.desc} price={item.price} quantity={item.quantity} actions="delete/edit"/>
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
