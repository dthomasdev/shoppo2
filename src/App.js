//react
import { useState, useEffect } from 'react';

//components
import Header from './components/header';
import ListHeader from './components/listHeader';
import AddForm from './components/addForm';

//styles
import './scss/main.scss';

//render
function App() {
  const [ itemsList , setList ] = useState( [] );
  
  // loads state from local storage
  // only on app load as indicated by empty array
    useEffect(() => {
    const items = localStorage.getItem('items')
    setList(JSON.parse(items));
  }, []);

  // useEffect 'observer' for itemsList
  // updates local storage when a change is detected in the item list
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(itemsList));
  },[itemsList]);

  // updates state when a new item is added in addForm
  // appends value to current list using spread operator ...
  function addNewItem(newItem){
    setList(c => [...c, newItem]);
  };

  // increments / decrements quantity
  // maps through the array and adjusts based on parameters
  // if item goes to zero the item is removed from the list
  function adjustQuant(e , i , q) {
    const quantity = parseInt(q)

    setList(itemsList.map((item, index) => {
      if(i === index && e === 'increment'){
        return {
          ...item,
          quantity : quantity+1
        }
      } else if(i === index && e === 'decrement') {
        return {
          ...item,
          quantity : quantity-1
        }
      } else {
        return item;
      }
    }).filter((item)=>{
      return item.quantity !== 0
    }))
  };

  // removeitem function
  // uses a filter to remove item
  // from the index in the array
  function removeItem(i){
    setList(itemsList.filter((_,index) => {
      return index !== i
    }))
  }

  // clears the entire list
  // by resetting state to 
  // an empty array
  function clearList(){
    setList([])
  };

  // creates a shopping total,
  // maps through the array of items and calclates line total
  // reduces the resulting array down to a grand total
  function totaller(){
    return(itemsList.map( item => {
      return item.price * item.quantity
    }).reduce((acc, curr) => {
      return acc + curr
    },0)).toFixed(2)
  };

  return (
    <div className="app">
        <Header/>
        <AddForm addNewItem = { (newItem) => addNewItem(newItem) } />
        <ListHeader list = { itemsList }  removeItem = { (i) => removeItem(i) } adjustQuant = { (e, i ,q) => adjustQuant(e, i ,q) } />
      <div className="shop-total">
        <p>Shop Total</p><h2>£{totaller()}</h2>
        <button onClick = {() => clearList()} >Clear List</button>
      </div>
    </div>
  );
}

export default App;
