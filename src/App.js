import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
          <>
          {console.log(props)}
          <h1>{props.firstname}</h1>
          <h1 style={{color: 'red'}}>{props.lastname}</h1>
          <h1 style={{color: 'Gray'}}>{props.address}</h1>
          <h1 style={{color: 'orange'}}>{props.contact}</h1>
          
          </>
  );
}

export default App;
