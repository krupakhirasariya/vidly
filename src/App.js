
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movie';
import Customer from './components/customer';
import Rental from './components/rental';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm'
import Login from './components/login';
import './App.css';
import RegisterForm from './components/registerForm';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="container">
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customer" component={Customer}></Route>
          <Route path="/rental" component={Rental}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from='/' exact to='/movies'></Redirect>
          <Redirect to='/not-found'></Redirect>
        </Switch>
        {/* <Movies></Movies> */}
      </main>
    </div>
  );
}

export default App;
