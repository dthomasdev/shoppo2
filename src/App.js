//react
import { useState, useEffect } from 'react';

//components
import Header from './components/header';
import ListHeader from './components/listHeader';
import AddForm from './components/addForm';

//render
function App() {
  const [ itemsList , setList ] = useState( [ ] );

  // useEffect 'observer' for itemsList
  useEffect(() => {
   console.log("Watching")
  }, [itemsList]);


  // updates state when a new item is added in addForm
  // appends value to current list using spread operator ...
  function addNewItem(newItem){
    setList(c => [...c, newItem]);
  };

  // increments / decrements quantity
  // maps through the array and adjusts based on parameters
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
    }))
  }

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
    <div className="App">
      {/* STATE CHECKERS FOR APP.JS */}
      {/* <pre>{JSON.stringify(itemsList.length)}</pre>
      <pre>{JSON.stringify(itemsList)}</pre> */}
      <Header/>
      <AddForm addNewItem = { (newItem) => addNewItem(newItem) } />
      <ListHeader list = { itemsList }  removeItem = { (i) => removeItem(i) } adjustQuant = { (e, i ,q) => adjustQuant(e, i ,q) } />
      <h2>£{totaller()}</h2>
      <button onClick = {() => clearList()} >Clear</button>
    </div>
  );
}

export default App;
