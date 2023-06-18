import logo from './logo.svg';
import './App.css';

const [firstCity, second] = ["Tokyo", "London"]

console.log(second)

function App({library}) {
  return (
    <div className="App">
        
        <p>
          Hello, {library}
        </p>
        </div>
  );
}

export default App;
