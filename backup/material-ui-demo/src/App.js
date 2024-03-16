import { Button, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import './App.css';
import Header from './NavBar';

function App() {
  return (
    <div className="App">
      <br/>
        <Header />
      <Button color="primary" variant="contained"> Press Me </Button>
      <br/><br/>
      <TextField id="name" label="Name" variant="outlined" />
      <br/><br/>
      <AccountCircle />
    </div>
  );
}

export default App;
