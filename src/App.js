import './App.css';
import Header from 'components/Header';
import ButtonPluss from 'components/Button/ButtonPluss';
import Input from 'components/Input';
import Divider from 'components/Divider';
import List from 'components/List';
import Panigation from 'components/Panigation';

function App() {
  return (
    <div className="App">
      <Header title={'TO DO LIST APPLICATION'} />
      <div className='add-task-wrapper'>
        <Input />
        <ButtonPluss />
      </div>
      <Divider fullWidth />
      <List />
      <Divider fullWidth />
      <Panigation />
    </div>
  );
}

export default App;
