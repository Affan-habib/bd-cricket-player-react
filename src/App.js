import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;