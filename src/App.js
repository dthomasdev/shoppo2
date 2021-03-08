//components
import Header from './components/header';
import ListHeader from './components/listHeader';
import AddForm from './components/addForm';


//render
function App() {

  return (
    <div className="App">
      <AddForm/>
      <Header/>
      <ListHeader/>
    </div>
  );
}

export default App;
