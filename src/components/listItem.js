const listItem = ({num, item, price, quantity, delItem}) => {

  return (
   <tr>
     <td>{num}</td> 
     <td>{item}</td> 
     <td>£{parseFloat(price).toFixed(2)}</td> 
     <td>{quantity}</td> 
     <td>£{parseFloat(quantity * price).toFixed(2)}</td> 
     <td><button onClick = { () => delItem() } >Delete</button></td> 
   </tr>
  )
}

export default listItem;

