import './css/App.css';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Mesa from './mesa/Mesa';
import Abertas from './home/Abertas';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <Navbar></Navbar>

      <Route path="/" exact>
        <Home>
        </Home>
      </Route>

      <Route path="/pagar">
        <Abertas></Abertas>
      </Route>

      <Route path="/mesa:id" component={Mesa}>
      </Route>
    </BrowserRouter>
  );
}

export default App;
