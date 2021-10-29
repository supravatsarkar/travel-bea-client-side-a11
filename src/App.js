
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="min-vh-100">
        <Header></Header>
        <Home></Home>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
