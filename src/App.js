//react
import { useState } from 'react';

//components
import Header from './components/header';
import ListHeader from './components/listHeader';
import AddForm from './components/addForm';

//render
function App() {
  const [ itemsList , setList ] = useState( [ ] );

  // updates state when a new item is added in addForm
  // appends value to current list using spread operator ...
  function addNewItem(newItem){
    setList(c => [...c, newItem]);
  };

  //removeitem function
  //uses a filter to remove item
  // from the index in the array
  function removeItem(i){
    setList(itemsList.filter((_,index) => {
      return index !== i
    }))
  }

  // creates a shopping total
  // maps through the array of items and calclates line total
  // reduces the resulting array down to a grand total
  function totaller(){
    return(itemsList.map((item) => {
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
      <AddForm addNewItem = { (newItem) => addNewItem(newItem) } />
      <Header/>
      <ListHeader list = { itemsList }  removeItem = { (i) => removeItem(i) } />
      <h2>£{totaller()}</h2>
    </div>
  );
}

export default App;
