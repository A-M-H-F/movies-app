import { BrowserRouter, BrowserRouter as Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pages/create">
              <Create />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
