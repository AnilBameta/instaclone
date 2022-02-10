import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
    <Route exact path='/' element= {<Register/>} />
    <Route exact path='/login' element= {<Login/>} />
    <Route exact path='/home' element= {<Home/>} />
    </Routes>
    </Router>

  );
}

export default App;
