
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BookService from './Pages/BookService/BookService';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-vh-100"> {/*For min hight of blank page  */}
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/booking/:serviceId">
              <BookService></BookService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
