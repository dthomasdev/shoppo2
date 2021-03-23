//react
import { useState } from 'react';

//components
import Header from './components/header';
import ListHeader from './components/listHeader';
import AddForm from './components/addForm';

//render
function App() {
  const [ itemsList , setList ] = useState( [ ] );

  function addNewItem(newItem){
    setList(c => [...c, newItem]);
  };

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
      <ListHeader list = { itemsList } />
      <h2>£{totaller()}</h2>
    </div>
  );
}

export default App;
