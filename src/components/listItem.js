const listItem = ({num, item, price, quantity, actions}) => {
  return (
   <tr>
     <td>{num}</td> 
     <td>{item}</td> 
     <td>£{parseFloat(price).toFixed(2)}</td> 
     <td>{quantity}</td> 
     <td>£{parseFloat(quantity * price).toFixed(2)}</td> 
     <td>{actions}</td> 
   </tr>
  )
}

export default listItem

