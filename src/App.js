
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BookService from './Pages/BookService/BookService';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import AddService from './Pages/Home/AddService/AddService';
import MyBookings from './Pages/MyBookings/MyBookings/MyBookings';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
              <PrivateRoute path="/booking/:serviceId">
                <BookService></BookService>
              </PrivateRoute>
              <PrivateRoute path="/addservice">
                <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute path="/mybookings">
                <MyBookings></MyBookings>
              </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
