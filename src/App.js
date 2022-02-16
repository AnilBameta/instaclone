import HomeContainer from './redux/container/HomeContainer';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Routes>
    <Route exact path='/register' element= {<Register/>} />
    <Route exact path='/login' element= {<Login/>} />
    <Route exact path='/' element= {<HomeContainer/>} />
    </Routes>
    </Router>

  );
}

export default App;
